import { motion } from 'framer-motion';
import aboutVideo from '../assets/videos/icvideo1.mp4';

const About = () => {

  return (
    <section id='about' className='w-full pt-10'>
      <div className='flex flex-col lg:flex-row gap-y-8 px-4 lg:px-0 items-center text-center justify-around'>
        <div className='flex flex-col gap-y-4 lg:flex-1/2 lg:w-[50%]'>
          <motion.h2 
            className='text-primary text-3xl lg:text-4xl'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 1 }}
            variants={{ 
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
            Quem Somos
          </motion.h2>
          <motion.p 
            className='text-primary text-[18px] lg:text-2xl'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 1.5 }}
            variants={{ 
              hidden: { opacity:0, x:-50 },
              visible: { opacity:1, x:0 }
            }}
          >
          Somos um instituto integrado e moderno dedicado ao atendimento personalizado na área da saúde. Nossa localização estratégica no coração de Boa Viagem torna-nos acessíveis e convenientes para nossos pacientes.
          No Instituto Cidrim, nossa missão é fornecer serviços de saúde de alta qualidade, adaptados às necessidades individuais de cada paciente. Nossa equipe de profissionais altamente qualificados e especializados está comprometida em oferecer cuidados abrangentes e compassivos.
          </motion.p>
        </div>
        <motion.video 
          src={aboutVideo}
          autoPlay 
          muted
          loop
          className='w-[600px] h-[400px] lg:h-[600px] object-cover border-4 border-primary p-1 lg:mt-12'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3}}
          transition={{ duration: 1.5 }}
          variants={{ 
            hidden: { opacity:0, x:50 },
            visible: { opacity:1, x:0 }
          }}
        >
        </motion.video>
      </div>
    </section>
  )
}

export default About