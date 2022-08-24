import { WhatsappLogo } from 'phosphor-react'

export function Home() {
  return (
     <section id="home" className="bg-blue-300  justify-center flex items-center md:flex-col">
      <div className="pt-20 flex justify-center" id="wrapper">
        <header>
          <h4
            className="text-blue-700 font-bold text-left text-[0.875rem] leading-snug w-[37.5rem] tracking-wide md:text-center"
          >BOAS-VINDAS AO INSTITUTO SAIGRENE 👋</h4>
           <div id="title" className="md:items-center md:text-center flex flex-col">
          <h1
            className="text-gray-900 font-bold mt-3 text-[3.1rem] w-[37.5rem] leading-[67.6px] text-left md:w-[24.5rem] md:text-center"
          >Assistência psicologica simplificada para todos</h1>+  
          </div>
          <div
            id="content"
            className="mt-4 text-gray-700 font-normal text-lg leading-releaxed w-[37.5rem] md:flex md:flex-col md:items-center md:justify-center"
          >
            <p className='md:w-[24.5rem] md:text-center'>
              Os psicologos vão além dos sintomas para tratar a causa raiz de
              sua doença e proporcionar uma cura a longo prazo.
            </p>
            <a
              href="#"
              className="bg-blue-700 uppercase font-bold gap-[0.75rem] text-white rounded-full text-sm py-[1rem] flex justify-center w-[250px] items-center mt-8 hover:bg-blue-900 duration-200">
              <WhatsappLogo size={25} weight="light"/>
              Agende sua Consulta
            </a>
          </div>
        </header>
      </div>

       <div id="col-b">
        <img
         className="block w-[27rem] max-w-[100%] md:w-[80%] mt-6"
          src="./src/assets/mamae.png"
          alt="Erica Luciana Garcia"
        />
      </div>
    </section>
  )
}
