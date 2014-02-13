/*
 * THIS FILE IS AUTO GENERATED from 'lib/khepri_zipper.kep'
 * DO NOT EDIT
*/
"use strict";
var __o = require("nu-stream")["gen"],
    range = __o["range"],
    __o0 = require("nu-stream")["stream"],
    foldl = __o0["foldl"],
    from = __o0["from"],
    NIL = __o0["NIL"],
    __o1 = require("neith")["tree"],
    treeZipper = __o1["treeZipper"],
    __o2 = require("khepri-ast")["node"],
    Node = __o2["Node"],
    modify = __o2["modify"],
    khepriZipper, getChild, getChildren, construct, buildArray = (function(pairs) {
        return foldl((function(p, __o3) {
            var key = __o3["key"],
                value = __o3["value"];
            (p[key] = value);
            return p;
        }), [], pairs);
    });
(getChildren = (function(node) {
    return (node ? (Array.isArray(node) ? range(0, node.length) : from(node.children)) : NIL);
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