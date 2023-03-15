import { useEffect ,useState} from "react";

function ReactT() {
    const [fu,setFu] = useState("5");

  

    useEffect(()=>{
        console.log(2)
        setFu(2)
    },[])

    return (<></>)
}

export { ReactT};