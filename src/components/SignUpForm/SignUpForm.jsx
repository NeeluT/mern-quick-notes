import { Component } from 'react';
import { signUp } from '../../utilities/users-service'

// one of the key distictions between classes and functions components is the extend keyword
// it tells our code "get all the good stuff from component, but let me make it work for my ppuposes"
export default class SignUpForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    })
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();

    // alert(JSON.stringify(this.state)); this was to make our function do somthing to test our component

    try {
        const formData = {...this.state}
        delete formData.error
        delete formData.confirm
        const user = await signUp(formData)
        this.props.setUser(user)
    } catch {
      this.setState({ error: 'Sign Up Failed - Try Again!'})
    }
  }
  
// Every single class component NEEDS a render method
// this render method tells our app what this component returns
render() {
  const disable = this.state.password !== this.state.confirm;
      return (
        <div>
          <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
              <label>Name</label>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
              <label>Email</label>
              <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
              <label>Password</label>
              <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
              <label>Confirm</label>
              <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
              <button type="submit" disabled={disable}>SIGN UP</button>
            </form>
          </div>
          <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
      );
    }
  }