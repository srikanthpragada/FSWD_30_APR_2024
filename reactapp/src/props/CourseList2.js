import React from 'react'

function ShowCourse({ course }) {
    return (
        <tr>
            <td>{course.title}</td>
            <td>{course.fee}</td>
        </tr>
    )
}

export default function CourseList2(props) {
    return (
        <>
            <h2 className="text-danger">Courses</h2>
            <h3 className="text-success">Trainer : {props.trainer}</h3>
            <h4>Courses Count : {props.courses.length}</h4>

            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Course Fee</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.courses.map((c, idx) => <ShowCourse key={idx} course={c} />)
                    }
                </tbody>
            </table>
        </>
    )
}
