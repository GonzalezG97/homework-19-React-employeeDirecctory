import React from "react";


function Table(props) {

 return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">City</th>
            </tr>
          </thead>
          <tbody>
          {props.users[0]!== undefined && props.users[0].name!== undefined ?
            (props.users.map(({name, email, city, phone, picture}) => {
                return (<tr>
                    <td>{name.first} {name.last}</td>
                    <td>{email}</td>
                    <td>{city}</td>
                    <td>{phone}</td>
                    <img src={picture.thumbnail}/>
                </tr>)
                    }
                ))
                : (
                    <></>
                )
            }
          </tbody>
        </table>
      </div>
    );
  
};

export default Table;
