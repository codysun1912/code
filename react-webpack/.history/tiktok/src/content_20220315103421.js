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
    
    return(
        <div>
        <ul>
        {lessons.map(lesson => {
            <li 
            key={lesson.id}
            style ={{color: lessonId === lesson.id ?}}
            
            onClick = {} 
            >

            </li>
        })}

        </ul>
        
        </div>

    )
}        
export default Content;