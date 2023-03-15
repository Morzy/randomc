import React, { useState } from "react"
import RandomDis from "./randomNumberDis";

function TierTwo(props) {
    console.log(props);
    const [stop,setStop] = useState(false);

    return (<h1 className="tier" > <span className="label label-default" onClick={()=>setStop(!stop)}>二等奖</span><RandomDis stopP={stop}/></h1>)
};



export default TierTwo;