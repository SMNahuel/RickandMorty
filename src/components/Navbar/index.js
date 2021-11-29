import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SearchInput } from "store/actionCreator";

const Navbar = () => {
  const { pathname } = useLocation();
  const [state, setState] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const searchChange = () => {
      dispatch(SearchInput(state));
    };

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
          <a href="/episode/season/1">Temporada 1</a>
          <a href="/episode/season/2">Temporada 2</a>
          <a href="/episode/season/3">Temporada 3</a>
          <a href="/episode/season/4">Temporada 4</a>
          <a href="/episode/season/5">Temporada 5</a>
        </div>
      )}
      {pathname === "/character" && (
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
        </div>
      )}
      {pathname === "/spicie" && (
        <div className="searchContainerCharacter" id="searchContainer">
          <input
            type="text"
            placeholder="search"
            onChange={(e) => setState(e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Navbar;
