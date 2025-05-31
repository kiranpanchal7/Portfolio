export default function Education(props){
    let education=props.content;
    return(
        <div className="flex flex-col sm:flex-row gap-3 items-center">
            {
                education.map((el)=>(
                    <>
                        <div key={el.short} className="w-full bg-slate-50 p-4 shadow-xl rounded mb-3 text-center flex items-center flex-col lg:flex-row">
                            <img src="https://png.pngtree.com/png-clipart/20240416/original/pngtree-flat-design-online-courses-and-get-certificate-concept-png-image_14870057.png" className="dropShadow w-64 m-auto"></img>
                            <div>
                            <p className="text-indigo-900 text-xl font-bold">{el.degree}</p>
                            <p className="text-indigo-900 text-xl font-bold">({el.short})</p>
                            <p className="font-bold">{el.institute}</p>
                            <p className="text-slate-500 font-bold">{el.duration}</p>

                            </div>
                        </div>
                    </>
                ))
            }
        </div>
    )
}