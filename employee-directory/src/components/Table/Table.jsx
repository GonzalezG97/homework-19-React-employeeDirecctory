import React, { Component } from "react";
import API from '../../utils/API'


export default class Table extends Component {
  state = {
    search: "",
    results: []
  };

  componentDidMount() {
    API.getEmployeeList()
      .then((response) => {
        this.setState({
          results: response.results
        })
      })
  };

  

  

  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
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
  }
}
