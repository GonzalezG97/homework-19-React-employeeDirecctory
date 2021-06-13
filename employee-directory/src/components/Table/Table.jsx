import React from "react";


function Table(props) {

 return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">City</th>
              <th scope="col">Phone Number</th>
            </tr>
          </thead>
          <tbody>
          {props.users[0]!== undefined && props.users[0].name!== undefined ?
            (props.users.map(({name, email, location, phone, picture}) => {
                return (<tr>
                    <img src={picture.thumbnail}/>
                    <td>{name.first} {name.last}</td>
                    <td>{email}</td>
                    <td>{location.city}</td>
                    <td>{phone}</td>                    
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
