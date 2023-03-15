import React from "react";
import ReactDOM from "react-dom";
export default class ReactPortal extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return ReactDOM.createPortal((<><h1>Footer</h1></>), document.getElementById("footer"))
    }
}