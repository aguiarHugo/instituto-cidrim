import hero from '../assets/hero.png'
const Hero = () => {
  return (
    <section id='hero' className='w-full flex justify-center items-center py-36'>
        <img 
            src={hero} 
            alt="Instituto Cidrim" 
            className='w-[300px] h-[400px] md:h-[600px] md:w-[600px]'
        />
    </section>
  )
}

export default Hero