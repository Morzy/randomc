import React, { useState } from "react"
import RandomDis from "./randomNumberDis";
import PropTypes from 'prop-types'

function TierOne(name) {
    const [stop, setStop] = useState(false);

    return (<h1 className="tier" >
        <span className="label label-default" onClick={() => setStop(!stop)}>一等奖</span>
        <RandomDis stopP={stop} /></h1>)
};

TierOne.propTypes = {
    name: PropTypes.string//.isRequired
}

export default TierOne;