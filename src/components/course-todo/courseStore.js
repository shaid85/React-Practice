import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const courseStore = (set) => ({
    courses: [],
    addCourse: (course) => {
        set((state) => ({
            courses: [course, ...state.courses]
        }))
    },
    removeCourse: (courseId) => {
        set((state) => ({
            courses: state.courses.filter((item) => item.id !== courseId)
        }))
    },
    toggleCourseStatus: (courseId) => {
        set((state) => ({
            courses: state.courses.map((item) => item.id === courseId ? { ...item, completed: !item.completed } : item)
        }))
    }
})


const useCourseStore = create(
    devtools(
        persist(courseStore, {
            name: "courses"
        })
    )
)

export default useCourseStore