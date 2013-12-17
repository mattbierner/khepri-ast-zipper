define(['$',
        'ecma_ast_zipper/ecma_zipper',
        'neith/zipper',
        'neith/tree'],
function($,
        ecma_zipper,
        zipper,
        tree) {
    
    return {
        'module': "ECMA Zipper",
        'tests': [
            ["Simple",
            function(){
                var prog = $.Program(
                    $.Var(
                        $.Declarator($.Id('a'))),
                    $.If(
                        $.Boolean(true),
                        $.Expression(
                            $.Assign($.Id('a'), $.Number(1)))));
                
                var z = ecma_zipper.ecmaZipper(prog);
                
                var r = tree.node(zipper.up(zipper.down(z)));
                
                assert.equal(r.type, 'Program');
                assert.equal(r.body.length, 2);
                assert.equal(r.body[0].type, 'VariableDeclaration');
                assert.equal(r.body[0].declarations[0].type, 'VariableDeclarator');
                assert.equal(r.body[0].declarations[0].id.type, 'Identifier');
                
                assert.equal(r.body[1].type, 'IfStatement');
                assert.equal(r.body[1].test.type, 'Literal');
                assert.equal(r.body[1].test.kind, 'boolean');
                assert.equal(r.body[1].test.value, true);
                assert.equal(r.body[1].consequent.type, 'ExpressionStatement');
            }],
            ["Simple move by name",
            function(){
                var prog = $.Program(
                    $.Expression($.Id('a')),
                    $.Expression($.Id('b')));
                
                var z = ecma_zipper.ecmaZipper(prog);
                
                var c = tree.child(0, tree.child('body', z));
                
                var r1 = tree.node(c),
                    r2 = tree.node(tree.sibling(1, c));
                
                assert.equal(r1.type, 'ExpressionStatement');
                assert.equal(r1.expression.name, 'a');
            }],
            
            ["Simple insert",
            function(){
                var prog = $.Program(
                    $.Expression($.Id('a')));
                
                var z = ecma_zipper.ecmaZipper(prog);
                
                var c = tree.child('body', z);
                
                var r1 = tree.node(
                    zipper.root(
                        tree.insertChild(1, $.Expression($.Id('b')), c)));
                
                assert.equal(r1.type, 'Program');
                assert.equal(r1.body.length, 2);
            }]
            
        ],
    };
});
