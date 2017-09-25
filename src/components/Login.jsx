import React from 'react';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    // set up state
    this.state = {
      username: undefined,
      password: undefined,
    };

    // bind our methods to this class
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * @func handleInputChange
   * @desc handles the data change events from each form element and
   * stores the results in state
   * @param {Event} event - form element change event
   */
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // send the data to our parent
    this.props.handleLoginForm(this.state);
  }


  render() {
    return (
      <aside className="box">
        <form onSubmit={this.handleSubmit} >
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                name="username"
                className="input is-large"
                type="email"
                placeholder="Email"
                onChange={this.handleInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
              </span>
              <span className="icon is-small is-right">
                <i className="fa fa-check" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <input
                name="password"
                className="input is-large"
                type="password"
                placeholder="Password"
                onChange={this.handleInputChange}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">
                Login
              </button>
            </p>
          </div>
        </form>
      </aside>
    );
  }
}

//module.exports = LoginForm;
export default LoginForm;

