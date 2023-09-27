import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import ic1 from '../assets/ic1.jpeg';
import ic2 from '../assets/ic2.jpeg';
import ic3 from '../assets/ic3.jpeg';
import ic4 from '../assets/ic4.jpeg';
import ic5 from '../assets/ic5.jpeg';
import ic6 from '../assets/ic6.jpeg';
import ic7 from '../assets/ic7.jpeg';
import ic8 from '../assets/ic8.jpeg';
import ic9 from '../assets/ic9.jpeg';
import ic10 from '../assets/ic10.jpeg';

const icImages = [ic1, ic2, ic3, ic4, ic5, ic6, ic7, ic8, ic9, ic10];

const ServicesCards = () => {
  const settings = {
    dots: true,            
    infinite: true,        
    speed: 500,
    slidesToShow: 2,       
    slidesToScroll: 2, 
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Define o ponto de quebra para a versão mobile (altere conforme necessário)
        settings: {
          slidesToShow: 1, // Altere as configurações para a versão mobile
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      }
    ]
  };

  return (
      <div className='w-full lg:w-[900px] py-12 px-[71px] lg:px-12 mx-auto cursor-pointer'>
        <Slider {...settings}>
            {icImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Imagem ${index}`} className="w-full lg:w-[380px] max-h-[400px] border-2 border-primary p-1 " />
              </div>
            ))}
        </Slider>
      </div>
  )
}

export default ServicesCards