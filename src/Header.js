import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useContext } from 'react';
import { MyContext } from './commonContext';


export default function Header(){
    const userDetail=useContext(MyContext)
    console.log('userDetail=>',userDetail)
    const navArray=[
        {
            title:'Profile',
            id:'profile',
        },
        {
            title:'Skills',
            id:'skills',
        },
        {
            title:'Experience',
            id:'experience',
        },
        {
            title:'Education',
            id:'education',
        },
        {
            title:'Projects',
            id:'projects',
        },
        {
            title:'Contact',
            id:'contact',
        },
    ]
    const contactDetail=[
        {
            title:userDetail.email,
            id:'2',
            route:'',
            icon:faEnvelope,
        },
        {
            title:'+91 '+userDetail.mobileNo,
            id:'1',
            route:'',
            icon:faPhone,
        },
    ]
    return(
        <>
            <div className="contactDetail bg-indigo-950 py-2 px-4">
                <ContactDetails detail={contactDetail} userDetail={userDetail}></ContactDetails>
            </div>
            <div className="flex justify-between items-center bg-white shadow-lg flex-col sm:flex-row p-4">
                {/* <img src="/images/logo.png" className="w-40"></img> */}
                <p className="text-3xl font-bold">{userDetail.designation}</p>
                <div>
                    <ul className="flex flex-wrap gap-4 *:font-bold *:text-base">
                        <Navbar content={navArray}></Navbar>
                    </ul>
                </div>
            </div>
        </>
    )
}

export function Navbar(props){
    const list=props.content;
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        console.log("id=>",id,el)
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      };
    return(
        <>
        {
            list.map((el,index)=>(
                <li key={el.id} onClick={()=>scrollToSection(el.id)} className="cursor-pointer"><p>{el.route=='' && <span className="me-3"><FontAwesomeIcon icon={el.icon} /></span>}{el.title}{(el.route==''&&list.length-1!=index)&&<span className="mx-3 hidden md:inline">|</span>}</p></li>
            ))
        }
        </>
    )
}



export function ContactDetails(props){

    return(
        <div className="flex justify-between text-white flex-col sm:flex-row">
            <h1 className="text-xl font-bold">{props.userDetail.name}</h1>
            <div className="contact">
                <ul className="flex flex-col sm:flex-row">
                    <Navbar content={props.detail}></Navbar>
                </ul>
            </div>
        </div>
    )
}