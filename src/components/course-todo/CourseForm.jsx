import { useState } from "react"
import useCourseStore from "./courseStore"

const CourseForm = () => {
    const addCoure = useCourseStore((state) => state.addCourse)

    const [courseTitle, setCourseTitle] = useState("")

    const handlecourseSubmit = () => {
        if (!courseTitle) return alert("please add a course title")
        addCoure({
            id: Math.ceil(Math.random() * 1000000),
            title: courseTitle,
        })
        setCourseTitle("")
    }

    return (
        <div className="form-container">
            <input type="text"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)} />
            <button
                onClick={(e) => handlecourseSubmit()}
                type="submit"></button>
        </div>
    )
}

export default CourseForm