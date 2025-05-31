import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as starOutline } from "@fortawesome/free-regular-svg-icons";
import { faStar as starSolid } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function Carousel(props){
  const sliderData=props.content
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    arrows: false,
  };
  return(
    <Slider {...settings}>
      {
        sliderData.map((el,index)=>(
          <div key={el.title} className="text-center p-3" id="skills"> 
            <div className="max-w-xl mx-auto p-6 bg-indigo-200 rounded-md shadow-lg shadow-indigo-200 hover:-translate-y-1">
              <div className="h-48">
                <img src={el.image} alt={el.title} className="w-full h-full object-contain dropShadow"></img>
              </div>
              <p className="my-3 text-gray-500 font-bold">{el.title}</p>
              <div className="flex gap-2 justify-center">
                {[...Array(5)].map((elem,index)=>(
                  <div key={index}>
                    <FontAwesomeIcon icon={!Number.isInteger(el.rating)&&index+1==Math.ceil(el.rating)?faStarHalfStroke:index<el.rating?starSolid:starOutline} className="text-2xl text-yellow-500 animate-pulse"></FontAwesomeIcon>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))
      }
    </Slider>

  )
}