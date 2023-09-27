import React from 'react'
import ServicesCards from '../components/ServicesCards'

const Services = () => {
  return (
    <section id='services' className='w-full h-screen mt-32 lg:mt-12 lg:pt-16 text-center'>
      <div className='flex flex-col-reverse lg:flex-row gap-x-8 px-4 lg:px-0  items-center'>
        <ServicesCards />
        <div className='flex flex-col gap-y-4 lg:w-[100%]'>
          <h2 className='text-primary text-3xl lg:text-4xl text-center'>Serviços</h2>
          <p className='text-primary text-[18px] lg:text-2xl'>
          Fornecemos espaços de alta qualidade e bem equipados que podem ser alugados por médicos, fisioterapeutas, psicólogos e outros profissionais de saúde.
          </p>
          <p className='text-primary text-[18px] lg:text-2xl'>
          Nossos espaços incluem consultórios privados, permitindo que os profissionais de saúde realizem atendimentos individuais com seus pacientes.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services