import React, { useState } from 'react'
import $ from 'jquery'

export default function GitUserRepos() {
    const [userId, setUserId] = useState("srikanthpragada")
    const [repos, setRepos] = useState([])
    const [message, setMessage] = useState('')


    function getUserRepos() {
        setRepos([])
        setMessage('')
        $.get(
            {
                url: `https://api.github.com/users/${userId}/repos`,
                success: function (resp) {
                    setRepos(resp)
                },
                error: function (error) {
                    setMessage("Sorry! Invalid userid")
                }
            }
        );

    }

    function updateUserId(e) {
        setUserId(e.target.value)
    }

    return (
        <>
            <h1>Github User Repos</h1>
            <input type="text" value={userId} onChange={updateUserId} />
            &nbsp;
            <span className="text-danger ">{message}</span>
            <p></p>
            <button disabled={userId.length === 0}
                onClick={getUserRepos}>Get Repos</button>

            <p></p>
            {
                repos.length > 0 &&
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Last Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            repos.map((repo, idx) =>
                                <tr>
                                    <td>
                                        <a rel="noreferrer" target="_blank"
                                            href={repo.html_url}>{repo.name}</a>
                                    </td>
                                    <td>{repo.description}</td>
                                    <td>{repo.updated_at}</td>
                                </tr>
                            )

                        }
                    </tbody>


                </table>

            }

        </>
    )
}
