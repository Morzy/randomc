import logo from './logo.svg';
import './App.css';
import TierOne from './Tier/TierOne';
import TierTwo from './Tier/TierTwo';
import TierThree from './Tier/TierThree.tsx';
import MyClass from './babelT/annotationT';
import {
  Routes,
  Route,
  Link,
  Outlet,
  NavLink,
  useLocation
} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import {aa} from "./babelT/PromiseT"
import { NameContext } from './context/NameContext';

import { useSelector } from 'react-redux';
import TestContainer from './test/TestContainer';


const action = (message, callback) =>{
  const allowT = window.confirm(message);
  callback(allowT)
}

function App(props) {

  const value = useSelector(state =>state.digit)
  // const x= aa();
  // console.log(x);
  // props.getState();
  console.log(value)
  return (
    <NameContext.Provider value={{ name: "shit" }}>
        <Routes>

          <Route exact path="/" element={<Layout {...props}/>}>
            <Route path="third" element={<TierThree input={123} />} />
            <Route path="second" element={<TierTwo > aaaaa</TierTwo>} />
            <Route path="first" element={<TierOne />} />
            <Route path="test" element={<TestContainer />} />
          </Route>
        </Routes>
    </NameContext.Provider>
  );
}

function Layout({add}) {

  let location = useLocation();
  const [path,setPath]  = useState("/")

  useEffect(()=>{
    setPath(location.pathname)
  },[location])
  
  // const addNumber = ()=>{
  //   store.dispatch({type:"Add"})
  // }

  // const display =()=>{
  //   console.log(store.getState());
  // }

  return (
    <div><ul className="nav nav-tabs ">
      <li role="presentation" className={path == "/third" ? "active" : ""} onClick={()=>add()}><NavLink to="third">三等奖</NavLink></li>
      <li role="presentation" className={path == "/second" ? "active" : ""}><NavLink to="second">二等奖</NavLink></li>
      <li role="presentation" className={path == "/first" ? "active" : ""} ><NavLink to="first">一等奖</NavLink></li>
      <li role="presentation" className={path == "/test" ? "active" : ""} ><NavLink to="test">测试</NavLink></li>
    </ul>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
