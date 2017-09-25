import React, { Component } from 'react';

class InputForm extends Component {

  render() {
    return (
      <form
        className="add-faces-form"
        onSubmit={this.props.handleInputFormSubmit}
      >
        <input
          type="text"
          value={this.props.inputHappyValue}
          name="happy"
          placeholder="are you happy"
          onChange={this.props.handleInputHappyChange}
        /><br/>

        <input
          type="text"
          value={this.props.inputMadValue}
          name="mad"
          placeholder="bad day?"
          onChange={this.props.handleInputMadChange}
        /><br/>

         <input
          type="text"
          value={this.props.inputimg}
          name="url"
          placeholder="url"
          onChange={this.props.handleInputURLChange}
        /><br/>

          <input
          type="text"
          value={this.props.result}
          name="result"
          placeholder="result"
          onChange={this.props.handleInputResultChange}
        /><br/>

          <label>
          Name
          <select value={this.props.user_id} onChange={this.props.handleInputUserChange}>
            <option value='1'>Julia</option>
            <option value='2'>Ann</option>
            <option value='3'>Jess</option>
            <option value='4'>Norma</option>
            <option value='5'>Mike</option>
            <option value='6'>Jane</option>
            <option value='7'>Tom</option>
          </select>
        </label>
          <br />

        <button id="submit">Add FaceForm!</button>
      </form>
    );
  }
}

export default InputForm;










