import React, { useState } from "react"
import RandomDis from "./randomNumberDis";

function TierOne() {
    const [stop,setStop] = useState(false);

    return (<h1 class="tier" > <span class="label label-default" onClick={()=>setStop(!stop)}>一等奖</span><RandomDis stopP={stop}/></h1>)
};



export default TierOne;