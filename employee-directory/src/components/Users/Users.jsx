import React from 'react'

function Users({users}) {
    


    return (
        <div>
            <tbody>
            {users[0]!== undefined && users[0].name!== undefined ?
            (users.map(({first, last, email, city, phone, picture}) => {
                return (<tr>
                    <td>{first} {last}</td>
                    <td>{email}</td>
                    <td>{city}</td>
                    <td>{phone}</td>
                    <td>{picture}</td>
                </tr>)
                    }
                ))
                : (
                    <></>
                )
            }
            </tbody>
        </div>
    )
};

export default Users;

