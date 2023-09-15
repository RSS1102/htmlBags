import {
  HashRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

import WujieReact from "wujie-react";
import React, { useState } from "react";
import Home from "./pages/Home";
import Vue3 from "./pages/Vue3";
import All from "./pages/All.js";
import Button from "antd/es/button";
import { UnorderedListOutlined, CaretUpOutlined } from "@ant-design/icons";

const { bus } = WujieReact;

const subMap = {
  vue3: ["home", "dialog", "location", "contact", "state"],
};

function Nav() {
  const location = useLocation();
  const navigation = useNavigate();
  const [vue3Flag, setVue3Flag] = useState(
    location.pathname.includes("vue3-sub")
  );

  const degrade = window.Proxy;

  // 在 xxx-sub 路由下子应用将激活路由同步给主应用，主应用跳转对应路由高亮菜单栏
  bus.$on("sub-route-change", (name, path) => {
    const mainName = `${name}-sub`;
    const mainPath = `/${name}-sub${path}`;
    const currentPath = window.location.hash.replace("#", "");
    if (currentPath.includes(mainName) && currentPath !== mainPath) {
      navigation(mainPath);
    }
  });

  const handleFlag = (name) => {
    switch (name) {
      case "vue3":
        setVue3Flag(!vue3Flag);
        break;
      default:
        break;
    }
  };

  return (
    <nav>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        介绍
      </NavLink>
      {degrade && (
        <NavLink
          to="/vue3"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          vue3<span className="alive">保活</span>
          <CaretUpOutlined
            className={vue3Flag ? "main-icon active" : "main-icon"}
            onClick={() => handleFlag("vue3")}
          />
        </NavLink>
      )}
      <div
        className="sub-menu"
        style={{ display: vue3Flag ? "block" : "none" }}
      >
        {subMap.vue3.map((item) => (
          <NavLink
            to={`/vue3-sub/${item}`}
            key={item}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            {item}
          </NavLink>
        ))}
      </div>
      <NavLink
        to="/all"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        all
      </NavLink>
      <Button
        type="primary"
        className="menu-icon"
        icon={<UnorderedListOutlined />}
      ></Button>
    </nav>
  );
}

class App extends React.PureComponent {
  state = {
    active: false,
  };
  changeActive = (val) => {
    this.setState({ active: val });
  };
  render() {
    return (
      <div className="app">
        <Router>
          <div className={this.state.active ? "nav active" : "nav"}>
            <Nav />
          </div>
          <div className="content" onClick={() => this.changeActive(false)}>
            <Routes>
              <Route
                exact
                path="/home"
                element={<Home changeActive={this.changeActive} />}
              />
              <Route exact path="/vue3" element={<Vue3 />} />
              <Route exact path="/vue3-sub/:path" element={<Vue3 />} />
              <Route exact path="/all" element={<All />} />
              <Route path="*" element={<Navigate to="/home" replace />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
