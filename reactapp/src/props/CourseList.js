import React from 'react'



export default function CourseList(props) {
    return (
        <>
            <h2 className="text-danger">Courses</h2>
            <h3 className="text-primary">Trainer : {props.trainer}</h3>
            <h4>Courses Count : {props.courses.length}</h4>

            <table className='table table-bordered'>
                <tr>
                    <th>Title</th>
                    <th>Course Fee</th>
                </tr>
                {
                    props.courses.map((c) =>
                        <tr>
                            <td>{c.title}</td>
                            <td>{c.fee}</td>
                        </tr>
                    )
                }
            </table>
        </>
    )
}
