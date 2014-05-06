/*
 * THIS FILE IS AUTO GENERATED from 'lib/khepri_zipper.kep'
 * DO NOT EDIT
*/define(["require", "exports", "nu-stream/gen", "nu-stream/stream", "neith/tree", "khepri-ast/node"], (function(require,
    exports, __o, __o0, __o1, __o2) {
    "use strict";
    var range = __o["range"],
        foldl = __o0["foldl"],
        from = __o0["from"],
        NIL = __o0["NIL"],
        treeZipper = __o1["treeZipper"],
        Node = __o2["Node"],
        modify = __o2["modify"],
        khepriZipper, getChild, getChildren, construct, __dot = (function(x, y) {
            return x[y];
        }),
        isObject = (function(x) {
            var y = (typeof x);
            return ("object" === y);
        });
    (getChildren = (function(node) {
        return ((node && isObject(node)) ? (Array.isArray(node) ? range(0, node.length) : from(node.children)) :
            NIL);
    }));
    (getChild = __dot);
    (construct = (function(node, pairs, values) {
        return ((node && isObject(node)) ? (Array.isArray(node) ? foldl((function(p, __o3) {
            var key = __o3["key"],
                value = __o3["value"];
            (p[key] = value);
            return p;
        }), [], pairs) : modify(node, values(), ({}))) : node);
    }));
    (khepriZipper = treeZipper.bind(null, getChildren, getChild, construct));
    (exports["khepriZipper"] = khepriZipper);
    (exports["getChild"] = getChild);
    (exports["getChildren"] = getChildren);
    (exports["construct"] = construct);
}));