import Carousel from "./commonComponent/Carousel";


export default function Skills(props){
    let skillSet=props.content;
    return (
        <>
            <Carousel content={skillSet}></Carousel>
        </>
    )
}