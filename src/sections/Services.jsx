import { motion } from 'framer-motion';
import ServicesCards from '../components/ServicesCards'

const Services = () => {
  return (
    <section id='services' className='w-full mt-32 lg:mt-12 lg:pt-16 text-center'>
      <div className='flex flex-col-reverse lg:flex-row gap-x-8 px-4 lg:px-0  items-center'>
        <ServicesCards />
        <div 
          className='flex flex-col gap-y-4 lg:w-[100%]'
        >
          <motion.h2 
            className='text-primary text-3xl lg:text-4xl text-center'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 1 }}
            variants={{ 
              hidden: { opacity:0, x:50 },
              visible: { opacity:1, x:0 }
            }}
          >
            Serviços
          </motion.h2>
          <motion.p 
            className='text-primary text-[18px] lg:text-2xl'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 1.5 }}
            variants={{ 
              hidden: { opacity:0, x:50 },
              visible: { opacity:1, x:0 }
            }}
          >
          Fornecemos espaços de alta qualidade e bem equipados que podem ser alugados por médicos, fisioterapeutas, psicólogos e outros profissionais de saúde.
          </motion.p>
          <motion.p 
            className='text-primary text-[18px] lg:text-2xl'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3}}
            transition={{ duration: 1.5 }}
            variants={{ 
              hidden: { opacity:0, x:50 },
              visible: { opacity:1, x:0 }
            }}
          >
          Nossos espaços incluem consultórios privados, permitindo que os profissionais de saúde realizem atendimentos individuais com seus pacientes.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default Services