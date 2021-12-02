import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchInput } from "store/actionCreator";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const searchChange = (value) => {
    return dispatch(SearchInput(value));
  };

  return (
    <div className="navbar">
      {pathname === "/" && (
        <div className="searchContainer" id="searchContainer">
          <p>Pagina principal</p>
        </div>
      )}
      {pathname === "/episode" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Pagina de episodios</p>
          <a href="/">Home</a>
        </div>
      )}
      {pathname.split("/")[1] === "character" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Información </p>
          <a href="/">Home</a>
        </div>
      )}
      {pathname === "/characters" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Personajes</p>
          <input
            type="text"
            placeholder="Buscar personaje"
            onChange={(e) => searchChange(e.target.value)}
          />
          <a href="/">Home</a>
        </div>
      )}
      {pathname === "/locations" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Lugares de la serie</p>
          <a href="/">Home</a>
        </div>
      )}
      {pathname === "/locations/residents" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Residentes de </p>
          <a href="/">Home</a>
        </div>
      )}
      {pathname === "/species" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Especies</p>
          <a href="/">Home</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
