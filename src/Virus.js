import React from "react";

export default class Virus extends React.Component {
  componentDidMount() {
    console.log("mounted");
  }
  componentWillUnmount() {
    console.log("unmounted");
  }
  render() {
    return <div>Virus</div>;
  }
}
