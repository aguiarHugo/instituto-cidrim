import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='flex justify-between px-4 text-secondary text-[10px] md:text-[12px]'>
           <p>2023 &copy;Instituto Cidrim, todos os direitos reservados.</p>
           <a href="https://hugoaguiar.vercel.app/" target='_blank'>&copy;Hugo Aguiar </a>
        </div>
    </footer>
  )
}

export default Footer