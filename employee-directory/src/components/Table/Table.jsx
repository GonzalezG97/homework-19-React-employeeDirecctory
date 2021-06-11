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
            {props.state.results.map((employee) => {
              return (
                <tr>
                  <td>
                    <img>
                      src={employee.picture.thumbnail}
                      alt={employee.name.last}
                    </img>
                  </td>
                </tr>
              )
            })}
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">2</th>
              <td>Bruce</td>
              <td>Wayne</td>
              <td>@Batman</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  
};

export default Table;
