import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown,faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState,useContext } from 'react';
import Card from './Card';
import Intro from './Intro';
import { MyContext } from './commonContext';
import HeadingSection from './HeadingSection'
import Experience from './Experience';
import Education from './Education'
import Skills from './Skills';
import Contact from './Contact'

export default function Content(){
  const [scrolled , scrollFunc]=useState(false);
  const bottomRef = useRef(null);
  const displayData=useContext(MyContext)

    function scrollDownFunc(){
      let obj={behavior: "smooth"}
      obj['block']=scrolled?"start":"end";
      bottomRef.current.scrollIntoView(obj);
      scrollFunc(!scrolled)
    }



    return(
      <>
        <div ref={bottomRef}>
          <Intro id="profile"></Intro>
          <div>
            <HeadingSection content={'Technical Skills'}></HeadingSection>
            <Skills content={displayData.skills}></Skills>
          </div>
          <div>
            <HeadingSection content={'Experience'}></HeadingSection>
            <Experience content={displayData.experience}></Experience>
          </div>
          <div>
            <HeadingSection content={'Education'}></HeadingSection>
            <Education content={displayData.education}></Education>
          </div>
          <div>
            <HeadingSection content={'Project'}></HeadingSection>
            <Card content={displayData.projects}></Card>
          </div>
          <div>
            <HeadingSection content={'Contact Us'}></HeadingSection>
            <Contact content={displayData.contact}></Contact>
          </div>
        </div>
        <div onClick={scrollDownFunc} className="animate-bounce text-2xl bg-white text-indigo-500 w-12 h-12 rounded-full p-3 flex justify-center items-center absolute bottom-0 right-3 saturate-150 shadow-inner shadow-indigo-300">
          {scrolled?<FontAwesomeIcon icon={faArrowUp}/>:<FontAwesomeIcon icon={faArrowDown} />}
        </div>
      </>
    )
}


