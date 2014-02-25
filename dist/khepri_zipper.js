/*
 * THIS FILE IS AUTO GENERATED from 'lib/khepri_zipper.kep'
 * DO NOT EDIT
*/
define(["require", "exports", "nu-stream/gen", "nu-stream/stream", "neith/tree", "khepri-ast/node"], (function(require,
    exports, __o, __o0, __o1, __o2) {
    "use strict";
    var range = __o["range"],
        filter = __o0["filter"],
        foldl = __o0["foldl"],
        from = __o0["from"],
        NIL = __o0["NIL"],
        treeZipper = __o1["treeZipper"],
        Node = __o2["Node"],
        modify = __o2["modify"],
        khepriZipper, getChild, getChildren, construct, nonNullChildren = (function(node) {
            return node.children.filter((function(k) {
                return (node[k] !== null);
            }));
        }),
        buildArray = (function(pairs) {
            return foldl((function(p, __o) {
                var key = __o["key"],
                    value = __o["value"];
                (p[key] = value);
                return p;
            }), [], pairs);
        });
    (getChildren = (function(node) {
        return (node ? (Array.isArray(node) ? range(0, node.length) : from(nonNullChildren(node))) :
            NIL);
    }));
    (getChild = (function(node, k) {
        return node[k];
    }));
    (construct = (function(node, pairs, values) {
        return (node ? (Array.isArray(node) ? buildArray(pairs) : modify(node, values(), ({}))) : node);
    }));
    (khepriZipper = treeZipper.bind(null, getChildren, getChild, construct));
    (exports.khepriZipper = khepriZipper);
    (exports.getChild = getChild);
    (exports.getChildren = getChildren);
    (exports.construct = construct);
}));