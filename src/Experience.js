import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Experience(props){
    let experince=props.content;
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        slidesToShow: 1 ,
        arrows: true,
      };
    return(
        <Slider {...settings}>
        {
            experince.map((el,index)=>(
                <div key={index} className="!flex gap-5 md:items-start !w-5/6 m-auto flex-col md:flex-row xs:items-center" id="experience">
                    <div className="flex-[2] xs:self-center text-center">
                        <img src={el.companyLogo} className="m-auto"></img>
                        <p className="font-bold text-2xl">{el.name}</p>
                        <p className="text-slate-600">{el.position}</p>
                        <p className="text-xs">{el.startDate}&nbsp;-&nbsp;{!el.endDate? 'Present':el.endDate}</p>
                    </div>
                    <p className="flex-[3] fadeIn" dangerouslySetInnerHTML={{__html:el.description}}></p>
                </div>
            ))
        }
        </Slider>
    )
}