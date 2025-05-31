import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function Card(props){
    let displayData=props.content;
    console.log("content-1->",props)
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 animate-slideDown" id="projects">
            {
                displayData.map((el)=>(
                    <div className="border-2 border-indigo-200 bg-indigo-200 p-3 rounded-md text-center shadow-2xl shadow-indigo-200 hover:shadow-indigo-300 transition ease-in-out hover:-translate-y-1 cursor-pointer " key={el.id}>
                    {/* <div className="border-2 border-indigo-200 bg-white p-3 rounded-md text-center shadow-2xl shadow-indigo-200 hover:shadow-indigo-300 transition ease-in-out hover:-translate-y-1 cursor-pointer " key={el.id}> */}
                        <h1 className="font-bold text-xl mb-1 text-indigo-900">{el?.heading}</h1>
                        <p className="font-bold text-lg mb-6">({el.subHeading})</p>
                        <p className="text-base text-slate-600">{el.content}</p>
                        {/* <p className="text-indigo-950 text-end font-bold mt-5 hover:translate-1"><u>Decription</u><FontAwesomeIcon icon={faAnglesRight} /></p> */}
                    </div>
                ))
            }
        </div>
    )
}