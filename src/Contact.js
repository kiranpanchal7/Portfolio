import { useRef,useState } from 'react';
import emailjs from 'emailjs-com';
  import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Contact(props){
    let contact=props.content;

    const form = useRef();
    const [formValue,setFormValue]=useState({})

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_bpbgw3s', 'template_4huvl6d', form.current, 'QQldYPPkkGWqAAQ3v')
        .then((result) => {
            setFormValue({});
            toast.success("Sent Successfully!", {
                position: 'top-right',
                autoClose: 3000, // time in ms
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: false,
                icon: <span style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck} /></span>,
                style: {
                    backgroundColor: '#059905',  // ✅ custom background
                    color: '#fff',            // ✅ text color
                },
            });
            console.log('Success:', formValue);
        }, (error) => {
            toast.error("Error!", {
                position: 'top-right',
                autoClose: 3000, // time in ms
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: false,
                icon: <span style={{ color: 'white' }}><FontAwesomeIcon icon={faCheck} /></span>,
                style: {
                    backgroundColor: '#e00606',  // ✅ custom background
                    color: '#fff',            // ✅ text color
                },
            });
            console.error('Error:', error.text);
        });
    };
    return (
        <>
            <div className="md:flex p-3 rounded-md bg-white" id="contact" style={{boxShadow: '2px 2px 10px lightgray, inset 2px 2px 10px #c4cef3'}}>
                <div className="h-100 relative w-full md:w-1/2">
                    <img src="https://i.pinimg.com/736x/56/2b/a6/562ba63070941bf2769e0ef7250f0db1.jpg" className="w-full rounded-md"></img>
                </div>
                <div className="w-full md:w-1/2 p-3 md:p-8">
                <form ref={form} onSubmit={sendEmail}>
                    {
                        contact.map((el,index)=>(
                            <div className="mb-4" key={index}>
                                <label htmlFor={el.label} className="block text-md font-bold text-indigo-900 mb-1">{el.label}</label>
                                <InputClass content={el} form={formValue} setFormValue={setFormValue}></InputClass>
                            </div>
                        ))
                    }
                    <div className="text-center">
                        <button type="submit" className="px-6 py-2 bg-indigo-900 text-white rounded-xl shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-1 transition">Submit</button>
                    </div>
                </form>
                
                </div>
            </div>
        </>
    )
}



export function InputClass(props){
    const field=props.content;
    const formValue=props.form;
    const handleChange = (e) => {
        props.setFormValue(prev => ({ ...prev, [e.target.name]: e.target.value }));
            // console.log('Success:', formValue);

    };
    return (field.inputType!='textarea'?<input value={formValue[field.label]||''} key={field.label} onChange={handleChange} type={field.inputType} id={field.label} name={field.label} placeholder={field.placeholder} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"/>:<textarea rows="5" key={field.label} onChange={handleChange} value={formValue[field.label]||''} id={field.label} name={field.label} placeholder={field.placeholder} className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>);
}