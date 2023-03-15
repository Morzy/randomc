var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MAN = { getname: function () { return "1"; } };
function mix(obj) {
    function fuck() {
    }
    ;
    console.log(obj);
    Object.assign(fuck.prototype, obj);
    console.log(fuck.prototype);
    return fuck;
}
//@ts-ignore
var CT = /** @class */ (function (_super) {
    __extends(CT, _super);
    function CT() {
        var _this = this;
        console.log("before ");
        _this = _super.call(this) || this;
        console.log("after ");
        return _this;
    }
    return CT;
}(mix(MAN)));
export { CT };
