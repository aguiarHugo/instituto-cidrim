import { motion } from 'framer-motion'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
    <section id='hero' className='w-full flex justify-center items-center py-36'>
        <motion.img 
            src={hero} 
            alt="Instituto Cidrim" 
            className='w-[300px] h-[400px] md:h-[600px] md:w-[600px]'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 1 }}
            variants={{ 
              hidden: { opacity:0, y:50 },
              visible: { opacity:1, y:0 }
            }}
        />
    </section>
  )
}

export default Hero