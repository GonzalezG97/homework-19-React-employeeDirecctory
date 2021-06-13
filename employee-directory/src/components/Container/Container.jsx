import React, { Component } from "react";
import Table from '../Table/Table'
import API from '../../utils/API';

class Container extends Component {
    state = {
        search: "",
        results: [],
        error:"",
      };

      componentDidMount() {
        API.getEmployeeList()
          .then((res) => {
            console.log(res.data.results)
            this.setState({
              results: res.data.results
            })
          }).catch((err) => {
            this.setState({error: err})
          })
      };

      render() {
          return (
              <Table
                users={this.state.results}
              />
          )
      }
}

export default Container;