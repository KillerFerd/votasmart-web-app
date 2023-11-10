import {useState, useEffect} from 'react'

const Users = () => {
    const [users, Setusers ] = useState();
  return (
    <article>
        <h2>Users List</h2>
        {Users?.length
            ? (
                <ul>
                    {users.map((user,i) => <li key={i}>{user?.username}</li>)}
                </ul>
            ) : <p>no users to display</p>
        }
    </article>
  )
}

export default Users