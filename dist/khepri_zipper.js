/*
 * THIS FILE IS AUTO GENERATED from 'lib/khepri_zipper.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "neith/tree", "khepri_ast/node"], (function(require, exports, __o, __o0) {
    "use strict";
    var khepriZipper;
    var __o = __o,
        treeZipper = __o["treeZipper"],
        __o0 = __o0,
        Node = __o0["Node"],
        modify = __o0["modify"];
    var range = (function(end) {
        var a = [];
        for (var i = 0;
            (i < end);
            (i = (i + 1)))(a[i] = i);
        return a;
    });
    var joinKeys = (function(children, values) {
        return children.reduce((function(p, c) {
            (p[c] = values[c]);
            return p;
        }), []);
    });
    (khepriZipper = treeZipper.bind(null, (function(node) {
        return (!node ? [] : (Array.isArray(node) ? range(node.length) : node.children));
    }), (function(n, k) {
        return n[k];
    }), (function(node, _, children, values) {
        return ((node instanceof Node) ? modify(node, values, ({})) : joinKeys(children, values));
    })));
    (exports.khepriZipper = khepriZipper);
}))