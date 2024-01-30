import React from 'react'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: ''
    }
  }

  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  
  onSubmitSignIn = () => {
    fetch('http://localhost:3000/register', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.name,
        password: this.state.password

      })
    })
      .then(response => response.json())
      .then(user => {
        if(user) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }



  render() {
    return (
      <div className="w-full max-w-md mx-auto bg-gray-100 rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 bg-white sm:px-6 sm:py-4">
          <h2 className="text-3xl font-bold text-gray-900 pt-4">Register</h2>
        </div>
  
        <div className="w-full px-6 pb-8 pt-6">
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              id="email"
              type="email"
              name="email"
              className="bg-gray-200 border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Enter your email address"
              required
              onChange={this.onEmailChange}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              type="name"
              name="name"
              className="bg-gray-200 border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Enter your name"
              required
              onChange={this.onNameChange}
            />
          </div>
  
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              className="bg-gray-200 border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Enter your password"
              required
              onChange={this.onPasswordChange}
            />
          </div>
  
          <div className="mb-6">
            <label htmlFor="remember_me" className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                name="remember_me"
                className="h-4 w-4 text-gray-600 mr-2"
                required
              />
            </label>
          </div>
  
          <div className="flex items-center justify-between">
            <button 
            type="register" 
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md" 
            onClick={this.onSubmitSignIn}
            >Sign in
            </button>
          </div>
        </div>
      </div>
    );
  };
  };
   

    
export default Register;