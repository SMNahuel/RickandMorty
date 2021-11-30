import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchInput } from "store/actionCreator";

const Navbar = () => {
  const { pathname } = useLocation();
  const [state, setState] = useState("");
  const dispatch = useDispatch();
  const searchChange = () => {
    dispatch(SearchInput(state));
  };
  useEffect(() => {
    searchChange();
  }, [state]);
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
          <a href="/">API Rick&Morty</a>
        </div>
      )}
      {pathname.split("/")[1] === "character" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Información </p>
          <a href="/">API Rick&Morty</a>
        </div>
      )}
      {pathname === "/characters" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Personajes</p>
          <input
            type="text"
            placeholder="Buscar personaje"
            onChange={(e) => setState(e.target.value)}
          />
          <a href="/">API Rick&Morty</a>
        </div>
      )}
      {pathname === "/locations" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Lugares de la serie</p>
          <a href="/">API Rick&Morty</a>
        </div>
      )}
      {pathname === "/locations/residents" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Residentes de </p>
          <a href="/">API Rick&Morty</a>
        </div>
      )}
      {pathname === "/species" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <p>Especies</p>
          <a href="/">API Rick&Morty</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
