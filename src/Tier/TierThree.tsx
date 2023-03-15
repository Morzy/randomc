import React, { useState, useEffect, useRef } from "react"
import RandomDis from "./randomNumberDis";
import { useLocation, useNavigate } from 'react-router-dom'
import { CT } from "../babelT/classTest";
import PropTypes from "prop-types";
import { NameContext } from "../context/NameContext";
import { useSelector } from 'react-redux';
import {createBrowserHistory} from "history"


const history  = createBrowserHistory();

let b = 0;

type fuck = {
    input: boolean
}

function TierThree(a: fuck) {
    console.log(a)
    const value = useSelector<any>(state =>state.digit)
    console.log(value)

    

    const [stop, setStop] = useState(false);
    const navigate = useNavigate();
    console.log(navigate);
   
    console.log(history);
    // const location =useLocation();
    // console.log(location);
    const h1Ref = useRef(null);

    let b = {
        _age: 0,
        get age() { console.log("aaa"); return this._age },
        set age(value) { this._age = value }
    }

    b.age = 2;

    let g = b.age;
    //console.log(b)


    useEffect(() => {

        console.log(h1Ref)
    })

    sessionStorage.setItem("aa", "bb")
    return (<NameContext.Consumer>{
        context => <h1 ref={h1Ref} className="tier" ><div onClick={()=>history.back()}>{context.name}</div>
            <span className="label label-default" onClick={() => setStop(!stop)}>三等奖</span>
            <RandomDis stopP={stop} /></h1>
    }

    </NameContext.Consumer>)
};

function jiegou({ name = "test" } = {}) {

}

TierThree.propTypes = {
    input: PropTypes.bool
}

//TierThree.contextType = NameContext;

export default TierThree;