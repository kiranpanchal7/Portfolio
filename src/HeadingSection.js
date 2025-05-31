export default function HeadingSection(props){
    console.log("props",props);
    
    return (
        <div className="flex items-center my-8">
            <div className="flex-grow border-t border-gray-400  border-dashed"></div>
            <span className="text-3xl text-center my-8 mx-4 text-indigo-900 font-bold">{props.content}</span>
            <div className="flex-grow border-t border-dashed border-gray-400"></div>
        </div>
    )

}