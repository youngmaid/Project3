import React, { Component } from "react";

class ImgForm extends Component {
  render() {
    return (
      <form
        className="add-tweed-form"
        onSubmit={this.props.handleImgSubmit}
      >
      <input
          type="text"
          value={this.props.inputimg}
          name="content"
          placeholder="Add Image Link Here"
          onChange={this.props.handleinputImgChange}
        />
        <br/>
        <button id="submit">Add Image!</button>
      </form>
    );
  }
}

export default ImgForm;
