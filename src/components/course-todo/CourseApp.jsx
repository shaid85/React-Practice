import './style.css'
import CourseForm from './CourseForm'
import CourseItem from './CourseItem'

const CourseApp = () => {
    return (
        <div className="main-container">
            <h1 style={{
                fontSize: "2.5rem",
                marginBottom: "2rem"
            }}> My Course list</h1>
            <CourseForm />
            <CourseItem />
        </div>
    )
}

export default CourseApp