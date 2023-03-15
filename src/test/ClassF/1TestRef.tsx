import React from "react";
export default class TestRef extends React.Component {

    inputRef: any
    state: any
    fuck: any
    constructor(props: object) {
        super(props)
        this.state = {}
        this.inputRef = React.createRef();
    }

    showInput = () =>{
        alert(this.inputRef.current.value);
        console.log(this);
    }

    render() {
        return <div><input defaultValue={"XXX"} ref={this.inputRef}></input><button ref={fuck => this.fuck = fuck}onClick={this.showInput}>XX</button></div>
    }
}