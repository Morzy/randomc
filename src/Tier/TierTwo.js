import React, { useState } from "react"
import RandomDis from "./randomNumberDis";

function TierTwo() {
    const [stop,setStop] = useState(false);

    return (<h1 class="tier" > <span class="label label-default" onClick={()=>setStop(!stop)}>二等奖</span><RandomDis stopP={stop}/></h1>)
};



export default TierTwo;