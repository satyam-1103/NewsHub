import React, { Component } from "react";
import loadingGif from "../assets/Infinity-1s-200px.gif";
export class Loading extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loadingGif} alt="news-loading" />
      </div>
    );
  }
}

export default Loading;
