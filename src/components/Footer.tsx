import { InstagramLogo, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <div className="bg-blue-700 flex  justify-between items-center md:hidden">

      <div className="my-10 ml-28 border-none">
        <Logo colorWord1="fill-gray-100" colorWord2="fill-gray-100"/>
        <span className="flex items-center text-sm mt-6">©2022 - Instituto Saigrene</span>
        <span className="flex items-center text-sm mt-3"> Todos os direitos reservados.
        </span>
      </div>
      <div className="flex items-center mr-28 gap-3">
        <a href="" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"><InstagramLogo size={25} color="#fff" /></a>
        <a href="" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"><WhatsappLogo size={25} color="#fff" /></a>
        <a href="" className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-200"><LinkedinLogo size={25} color="#fff" /></a>
      </div>
    </div>
  )
}