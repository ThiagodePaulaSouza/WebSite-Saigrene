import { List } from "phosphor-react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

interface ScrollProps {
  valueScrollY: number;
}

export function Navigation({ valueScrollY }:ScrollProps) {
  let colorLogo1 = 'fill-gray-100'
  let colorLogo2 = 'fill-gray-100'
  function tradeColor() {
    if (valueScrollY > 0) {
      colorLogo1 = 'fill-black'
      colorLogo2 = 'fill-blue-700'
    }
  }
  tradeColor()
 return (
    <header className={`transition duration-200 fixed w-full py-2 flex items-center justify-between bg-blue-700 border-b md:bg-local ${valueScrollY > 0 ? "bg-transparent border-none" : ""}`} >
      <div className="py-[1.65rem] pl-[2rem] text-white click:bb-1 md:flex md:items-center md:justify-between md:gap-[7rem] md:pl-[15%]">
        <div>
        <a href="#Home" className="">
          <Logo valueScroll={valueScrollY} />
        </a>
        </div>
        <div className="hidden invisible md:visible md:flex">
        <a className="">
        <List size={32} color="#fff" />
      </a>
      </div>
      </div>

      <div className="py-[1.65rem] pr-[1.25rem]">
        <ul className="gap-10 flex">
          <li>
            <Link
              activeClass="active"
              to="home"    
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold md:invisible ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
              spy={true} 
              smooth={true} 
              duration={500} 
              offset={-100}
              >
              Início
            </Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="service"        
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold md:invisible ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Serviços
            </Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="depoiment"        
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold md:invisible ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Depoimentos
            </Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="sobre"        
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold md:invisible ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Sobre
            </Link>
          </li>
          <li>
          <Link
              activeClass="active"
              to="contato"        
              className={`transition duration-200 cursor-pointer pb-[2.2rem] hover:font-bold hover:border-b-2 focus:border-b-2 focus:font-bold md:invisible ${valueScrollY > 0 ? "text-blue-900 border-blue-900"  : ""}`}
              spy={true} 
              smooth={true} 
              duration={500} 
              >
              Contato
            </Link>
          </li>
        </ul>
        
      </div>

      <div 
      className={` border rounded-full fs-[1.8rem] py-2 px-6 fw-700 cursor-pointer text-sm font-bold transtition-colors duration-200 md:invisible ${valueScrollY > 0 ? "bg-transparent text-blue-700 border-blue-700 hover:text-gray-100 hover:border-white hover:bg-blue-700"  : "bg-blue-700 text-white hover:bg-blue-300 hover:text-blue-700"}`}
      >
        <a href="" >AGENDE SUA CONSULTA</a>
      </div>
      <div>
      
      </div>
    </header>

  )
}