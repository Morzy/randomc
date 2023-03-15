import React, { useState, useEffect ,useRef } from "react"

let timer;

function RandomDis({ stopP }) {

    const [value, setValue] = useState(0)
    //const [stop, setStop] = useState(stopP);

    const renderRef = useRef(true);

    const random = () => {
        if(renderRef.current){
            renderRef.current = false;
            return;
        }
        if (!stopP) {
            timer = setInterval(() => {
                let num = generateRando();
                setValue(num)
            }, 100)
        } else {
            clearInterval(timer);
            let num = generateRando();
            setValue(num)
        }
    }

    useEffect(() => {
     //   setStop(stopP);
        random();
    }, [stopP])



    const generateRando = () => {
        let num = Math.round(Math.random() * 312) + "";
        if (num.lastIndexOf("4") > -1) {
            return generateRando();
        } else {
            return num;
        }
    }

    return (
        <div>
            {value}
        </div>

    )
}

export default RandomDis;