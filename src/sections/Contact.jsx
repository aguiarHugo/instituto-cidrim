import React from 'react'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact' className='bg-primary'>
        <div className='flex flex-col lg:flex-row justify-between items-center mt-16 px-20 py-8'>
            <div className='flex flex-col text-center lg:text-start lg:flex-row items-center gap-2'>
                <iframe className='border-2 border-secondary p-1' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.818707271445!2d-34.904256725382616!3d-8.119933381262273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ab1f213d0661e1%3A0xec03916a8ff25633!2sInstituto%20Cidrim!5e0!3m2!1spt-BR!2sbr!4v1695829908495!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className='flex flex-col gap-2'>
                    <p className='text-2xl text-secondary'>Av. Fernando Simões Barbosa, 266</p>
                    <p className='text-2xl text-secondary'>Boa Viagem, Recife - PE, 51020-390</p>
                </div>
                </div>
            <div className='flex flex-col py-4 gap-y-4'>
                <div className='flex items-center gap-x-2 text-secondary text-2xl'>
                    <BsWhatsapp />
                    <p>(81) 99799-0234</p>
                </div>
                <div className='flex items-center gap-x-2 text-secondary text-2xl'>
                    <BsWhatsapp />
                <p>(81) 98856-6715</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact