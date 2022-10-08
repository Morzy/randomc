import logo from './logo.svg';
import './App.css';
import TierOne from './Tier/TierOne';
import TierTwo from './Tier/TierTwo';
import TierThree from './Tier/TierThree';
import MyClass from './babelT/annotationT';
import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

function App() {
  return (
    <><Routes>
      <Route path="/" element={<Layout />}> 
      <Route path="third" element={<TierThree/>} />
      <Route path="second" element={<TierTwo/>} />
      <Route path="first" element={<TierOne/>} />
      </Route>
      </Routes>
    </>
  );
}

function Layout({history}) {
  console.log(window.location.pathname)
  let a = new MyClass();
  console.log(a)
  return (
    <div><ul class="nav nav-tabs ">
      <li role="presentation" class={window.location.pathname == "/third" ? "active" : ""}><Link to="third">三等奖</Link></li>
      <li role="presentation" class={window.location.pathname == "/second" ? "active" : ""}><Link to="second">二等奖</Link></li>
      <li role="presentation" class={window.location.pathname == "/first" ? "active" : ""}><Link to="first">一等奖</Link></li>
    </ul>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
