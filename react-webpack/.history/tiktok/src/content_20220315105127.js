import { useState ,useEffect } from "react";
const lessons = [
    {
        id:1,
        name: "ReactJS la gi ? Tai sao nen hoc ReactJS"
    },
    {
        id:2,
        name: "SPA/MPA la gi"
    },
    {
        id:3,
        name: "Arrow function "
    }
]
function Content(){
    const [lessonId , setLessonId] =useState(1)
    const handleComment = ({detail}) =>{
        console.log({detail})
    }
    useEffect(() =>{
        window.addEventListener(`lesson-${lessonId}` , handleComment)
    },[lessonId])
    
    return(
        <div>
        <ul>
        {lessons.map((lesson) => (
            <li 
            key={lesson.id}
            style ={{color: lessonId === lesson.id ? "red" : "#333"}}
            
            onClick = {() => setLessonId(lesson.id)} 
            >
            {lesson.name}

            </li>
        ))}

        </ul>
        
        </div>

    )
}        
export default Content;