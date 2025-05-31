
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {MyContext} from './commonContext';
import {useContext} from 'react';
import { faLinkedin, faGitlab } from '@fortawesome/free-brands-svg-icons';
// import { faArrowDown,faArrowUp } from "@fortawesome/free-solid-svg-icons";



export default function Intro(){
    const data=useContext(MyContext);
    return(
        <>
        <div className="mb-7" id="profile">
            <div className="grid grid-cols-full md:grid-cols-2 bg-blend-multiply border-solid border-2">
                <div className="mb-3 relative">
                    <div className="h-96 w-1/2 relative">
                        <div className="stripped-background-horizontal flex justify-end animate-slideDown">
                            <div className="bg-indigo-800 p-1"></div>
                        </div>
                        <div className="w-64 h-64 transition-shadow rounded-full absolute top-2/4 left-full translate-50 bg-indigo-900 p-2 animate-slideUp">
                            <div className="relative rounded-full">
                                <img src={data.logo}  className="rounded-full profileImage" alt="logo"></img>
                                <img src={data.logo}  className="rounded-full bgImageClass" alt="logo"></img>
                            </div>
                        </div>                        
                    </div>
                </div>
                <div>
                    <p className="animate-fadeIn tracking-wider self-center first-letter:uppercase first-letter:text-5xl first-letter:font-bold first-letter:mr-2 first-letter:float-left">{data.summary}</p>
                    <div className="flex gap-3 mt-4">
                        {
                            data.socialAccess.map((el)=>(
                                <a href={el.url} key={el.label} target="_blank" className="socialDiv bg-indigo-200 shadow-md shadow-indigo-300 animate-wiggle">{el.label=='linkedln'?<FontAwesomeIcon icon={faLinkedin}  className="text-indigo-900"/>:<FontAwesomeIcon icon={faGitlab}  className="text-indigo-900" />}{el.icon}</a>
                            ))
                        }
                    </div>
                </div>
            </div> 
        </div>
        </>
    )
}