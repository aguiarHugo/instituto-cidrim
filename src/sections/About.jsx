import React from 'react'
import aboutVideo from '../assets/videos/icvideo1.mp4'

const About = () => {
  return (
    <section id='about' className='w-full pt-10'>
      <div className='flex flex-col lg:flex-row gap-y-8 px-4 lg:px-0 items-center text-center justify-around'>
        <div className='flex flex-col gap-y-4 lg:flex-1/2 lg:w-[50%]'>
          <h2 className='text-primary text-3xl lg:text-4xl'>Quem Somos</h2>
          <p className='text-primary text-[18px] lg:text-2xl'>
          Somos um instituto integrado e moderno dedicado ao atendimento personalizado na área da saúde. Nossa localização estratégica no coração de Boa Viagem torna-nos acessíveis e convenientes para nossos pacientes.
          No Instituto Cidrim, nossa missão é fornecer serviços de saúde de alta qualidade, adaptados às necessidades individuais de cada paciente. Nossa equipe de profissionais altamente qualificados e especializados está comprometida em oferecer cuidados abrangentes e compassivos.
          </p>
        </div>
        <video 
          src={aboutVideo}
          autoPlay 
          muted
          loop
          className='w-[600px] h-[400px] lg:h-[600px] object-cover border-4 border-primary p-1 lg:mt-12' >
        </video>
      </div>
    </section>
  )
}

export default About