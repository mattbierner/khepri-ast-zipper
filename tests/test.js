var $ = require('./$');

var khepri_zipper = require('../dist_node/khepri_zipper');
var zipper = require('neith').zipper;
var tree = require('neith').tree;

exports.simple = function(test) {
    var prog = $.Program(
        $.Var(
            $.Declarator($.Id('a'))),
        $.If(
            $.Boolean(true),
            $.Expression(
                $.Assign($.Id('a'), $.Number(1)))));
    
    var z = khepri_zipper.khepriZipper(prog);
    
    var r = tree.node(zipper.up(zipper.down(z)));
    
    test.equal(r.type, 'Program');
    test.equal(r.body.length, 2);
    test.equal(r.body[0].type, 'VariableDeclaration');
    test.equal(r.body[0].declarations[0].type, 'VariableDeclarator');
    test.equal(r.body[0].declarations[0].id.type, 'Identifier');
    
    test.equal(r.body[1].type, 'IfStatement');
    test.equal(r.body[1].test.type, 'Literal');
    test.equal(r.body[1].test.kind, 'boolean');
    test.equal(r.body[1].test.value, true);
    test.equal(r.body[1].consequent.type, 'ExpressionStatement');
    
    test.done();
};

exports.move_by_name = function(test) {
    var prog = $.Program(
        $.Expression($.Id('a')),
        $.Expression($.Id('b')));
    
    var z = khepri_zipper.khepriZipper(prog);
    
    var c = tree.child(0, tree.child('body', z));
    
    var r1 = tree.node(c),
        r2 = tree.node(tree.sibling(1, c));
    
    test.equal(r1.type, 'ExpressionStatement');
    test.equal(r1.expression.name, 'a');
    
    test.done();
};

exports.insert = function(test) {
    var prog = $.Program(
        $.Expression($.Id('a')));
    
    var z = khepri_zipper.khepriZipper(prog);
    
    var c = tree.child('body', z);
    
    var r1 = tree.node(
        zipper.root(
            tree.insertChild(1, $.Expression($.Id('b')), c)));
    
    test.equal(r1.type, 'Program');
    test.equal(r1.body.length, 2);
    
    test.done();
};
