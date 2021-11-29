/* -------------------------------------------------Modules */
import React from "react";
import thunk from "redux-thunk";
import reducer from "store/reducer";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* -------------------------------------------------Components */
import Navbar from "components/Navbar";

/* -------------------------------------------------Pages */
import Home from "pages/Home";
import Location from "pages/Location";
import Residents from "pages/Residents";
import Episodes from "pages/Episodes";
import Character from "pages/Characters";

/* -------------------------------------------------Pages */
import "./sass/style.css"

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

function App() {
  return (
    <Provider store={store}>
      <Router >
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episode" element={<Episodes />} />
          <Route path="/character" element={<Character />} />
          <Route exact path="/locations" element={<Location />} />
          <Route path="/locations/residents" element={<Residents />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
