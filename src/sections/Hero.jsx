import hero from '../../public/hero.png'
const Hero = () => {
  return (
    <section id='hero' className='w-full h-screen flex justify-center items-center'>
        <img 
            src={hero} 
            alt="Instituto Cidrim" 
            className='w-[400px] h-[600px] sm:w-[600px] -mt-16'
        />
    </section>
  )
}

export default Hero