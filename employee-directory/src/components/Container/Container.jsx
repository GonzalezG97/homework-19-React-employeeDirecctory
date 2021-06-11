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
            this.setState({
              results: res.results
            })
          }).catch((err) => {
            this.setState({error: err})
          })
      };

      render() {
          return (
              <Table
                state={this.state}
              />
          )
      }
}

export default Container;