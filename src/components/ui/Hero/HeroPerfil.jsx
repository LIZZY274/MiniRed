import React from "react";
import fondoPerfil from "../../../assets/fondoperfil.jpeg";
import perfil from "../../../assets/perfil.jpeg";
import Amigos from "./Amigos";
import Articulos from "./Articulos";
import articul1 from '../../../assets/articul1.jpeg'
import articul2 from '../../../assets/articul2.jpeg'
import Hero from "./Hero";


function HeroPerfil() {
  return (
    <>
      <main className="grid grid-cols-3 gap-3">
        <section className="relative mt-5 col-span-2 ">
          <div className=" w-full h-60">
            <img
              className=" w-full h-full object-cover object-center"
              src={fondoPerfil}
              alt=""
            />
            <div className=" absolute top-[150px] left-10 w-[187px] h-[187px] rounded-full  overflow-hidden ">
              <img
                className="w-full h-full object-cover object-center"
                src={perfil}
                alt=""
              />
            </div>
          </div>

          <div className="mt-24 grid grid-cols-2 p-4">
            <div className="flex flex-col gap-3">
              <h1 className="text-4xl font-bold">Joanna Rosita</h1>
              <h3 className=" text-base text-gray-700">Ing. Software</h3>
              <p>Suchiapa, México.</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>Intereses</p>
              <div className="flex flex-wrap gap-2">
                <p className="bg-[#EEEE] p-2 rounded flex items-center justify-center">
                  Materias
                </p>
                <p className="bg-[#EEEE] p-2 rounded flex items-center justify-center">
                  deportes
                </p>
                <p className="bg-[#EEEE] p-2 rounded flex items-center justify-center">
                  Hobbies
                </p>
                <p className="bg-[#EEEE] p-2 rounded flex items-center justify-center">
                  Comida/Series
                </p>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex gap-2">
              <li className="">
                <a className="flex items-center gap-2" href="">
                  <img src="" alt="logo" />
                  aqui redes sosciasd
                </a>
              </li>
              <li>
                {" "}
                <a className="flex items-center gap-2" href="">
                  <img src="" alt="logo" />
                  aqui redes sosciasd
                </a>
              </li>
              <li>
                {" "}
                <a className="flex items-center gap-2" href="">
                  <img src="" alt="logo" />
                  aqui redes sosciasd
                </a>
              </li>
            </ul>
          </div>

          <section className=" grid grid-cols-3 gap-3 w-full h-auto mt-10 p-2">
            <div className=" bg-gray-200 rounded-xl col-span-2 p-3">
              <h1 className="text-xl font-bold">Acerca de mi</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda quo deleniti molestiae, error molestias exercitationem
                totam nemo rerum veniam voluptatum, placeat modi earum cum? Odit
                recusandae eligendi nostrum aperiam minima error cupiditate
                harum tempora deserunt ipsam officia fuga veniam nobis, ullam
                quaerat dolor vero laborum aliquid vitae illo praesentium.
                Labore atque libero quaerat veniam porro sit laborum repellendus
                cum. Assumenda.
              </p>
            </div>
            <div className="w-full bg-gray-200 p-3 ">
              <header className="flex items-center justify-between p-3">
                <h1 className="text-xl font-bold">Amigos</h1>
                <a className="text-xs border-b-2 border-stone-400 " href="">Buscar amigos</a>
              </header>
                <div className="flex flex-col gap-2">
                  <Amigos img={perfil}/>
                  <Amigos img={perfil}/>
                </div>
            </div>
          </section>


          <section className=" p-2 rounded-xl flex gap-3 flex-col">
          <Hero/>
          <Hero/>
          <Hero/>
        </section>
        </section>

        <section className="w-full h-auto rounded-lg bg-[#B9B9B9] p-3 mt-5">
          <h1 className="text-xl font-bold">Tus Articulos</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, incidunt!</p>
          
          <div className=" space-y-6 border-transparent h-auto">
            <Articulos images={articul1} title="Fernanda Luna" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus voluptatem rem dolor quae natus harum mollitia atque voluptas dicta."/>
            <Articulos images={articul2} title="Lizzy" paragraph="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae accusamus voluptatem rem dolor quae natus harum mollitia atque voluptas dicta."/>
            <Articulos/>
          </div>
        </section>

      </main>
    </>
  );
}

export default HeroPerfil;
