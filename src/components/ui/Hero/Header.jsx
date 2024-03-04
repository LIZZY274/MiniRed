import React from "react";
import { Link } from "react-router-dom";

function Perfil() {
  return (
    <>
      <header className="w-full  pl-5 p-3 bg-[#D9D9D9] text-black flex items-center justify-between">
        <div className="flex gap-5">
          <div>
            <img src="" alt="Logo" />
          </div>
          <div>
            <input className="rounded p-2" type="text" placeholder="Buscar" />
          </div>

          <nav>
            <ul className="flex gap-5 flex items-center ">
              <li className="bg-[#C5C5C5C5] p-2 rounded">
                <a href="#">Inicio</a>
              </li>
              <li className="bg-[#C5C5C5] p-2 rounded">
                <a href="#">Grupos</a>
              </li>
              <li className="bg-[#C5C5C5] p-2 rounded">
                <a href="#">Articulos</a>
              </li>
              <li className="bg-[#C5C5C5] p-2 rounded">
                <a href="#">Comunicados</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <nav>
            <ul className="flex gap-5">
              <li className="bg-[#C5C5C5] p-2 rounded">
                <a href=""> Ver mas</a>
              </li>
              <li className="bg-[#C5C5C5] p-2 rounded">
                <Link to="/" href="">
                  <img src="" alt="Img" />
                </Link >
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Perfil;
