import React, { Component } from "react";
import axios from "axios";
export default class TestAxios extends Component {
    componentDidMount() {
        axios
            .get("http://192.168.137.1:8000/members/")
            .then(res => {
                console.log(res.data[0]);
            })
            .catch(err => {
                console.log("Error", err);
            });
    }
    render() {
        return <div></div>;
    }
}
