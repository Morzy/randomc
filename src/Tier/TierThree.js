var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import RandomDis from "./randomNumberDis";
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { NameContext } from "../context/NameContext";
import { useSelector } from 'react-redux';
import { createBrowserHistory } from "history";
var history = createBrowserHistory();
var b = 0;
function TierThree(a) {
    console.log(a);
    var value = useSelector(function (state) { return state.digit; });
    console.log(value);
    var _a = useState(false), stop = _a[0], setStop = _a[1];
    var navigate = useNavigate();
    console.log(navigate);
    console.log(history);
    // const location =useLocation();
    // console.log(location);
    var h1Ref = useRef(null);
    var b = {
        _age: 0,
        get age() { console.log("aaa"); return this._age; },
        set age(value) { this._age = value; }
    };
    b.age = 2;
    var g = b.age;
    //console.log(b)
    useEffect(function () {
        console.log(h1Ref);
    });
    sessionStorage.setItem("aa", "bb");
    return (_jsx(NameContext.Consumer, { children: function (context) { return _jsxs("h1", __assign({ ref: h1Ref, className: "tier" }, { children: [_jsx("div", __assign({ onClick: function () { return history.back(); } }, { children: context.name })), _jsx("span", __assign({ className: "label label-default", onClick: function () { return setStop(!stop); } }, { children: "\u4E09\u7B49\u5956" })), _jsx(RandomDis, { stopP: stop })] })); } }));
}
;
function jiegou(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.name, name = _c === void 0 ? "test" : _c;
}
TierThree.propTypes = {
    input: PropTypes.bool
};
//TierThree.contextType = NameContext;
export default TierThree;
