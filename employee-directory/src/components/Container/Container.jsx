import React, { Component } from "react";

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
}