import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.checkIsLogged();
    this.updateName = this.updateName.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.checkIsLogged = this.checkIsLogged.bind(this);
    this.submitLogout = this.submitLogout.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.submitRegister = this.submitRegister.bind(this);
    this.getUsers = this.getUsers.bind(this);
  }
  updateName(e) {
    this.setState({username: e.target.value});
  }
  updatePassword(e) {
    this.setState({password: e.target.value});
  }
  checkIsLogged() {
    const url = '//sea-info6250-crud.herokuapp.com/users/test/me';
    fetch(url, {
      method: 'GET',
      credentials: 'include'
    }).then(
      response => response.ok
      ? response.json()
      : response.json().then(j => Promise.reject(j))).then(j => {
      console.log(j);
      return j
    }).catch(e => console.warn(e)).then(loginInfo => {
      this.setState({
        user: loginInfo.username,
        loggedIn: loginInfo.username !== undefined
      })
    })
  }
  submitLogout() {
    const url = '//sea-info6250-crud.herokuapp.com/users/test/' + this.state.user + '/session';
    fetch(url, {
      method: 'DELETE',
      credentials: 'include'
    }).then(
      response => response.ok
      ? response.json()
      : response.json().then(j => Promise.reject(j))).then(j => {
      console.log(j);
      return j
    }).catch(e => console.warn(e)).then(loginInfo => {
      this.setState({
        loggedIn: false,
        user: ''
      }, () => {
        document.cookie += ";expires=Wed, 14 Jun 2017 07:00:00 GMT"
      })
    })
  }
  submitLogin() {
    const url = '//sea-info6250-crud.herokuapp.com/users/test/' + this.state.username + '/session';
    const password = this.state.password;
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({password}),
      credentials: 'include'
    }).then(
      response => response.ok
      ? response.json()
      : response.json().then(err => {
        Promise.reject(err);
        this.setState({message: 'the username or password is not correct !'})
      })).then((loginInfo) => {
      this.setState({
        loggedIn: loginInfo.username !== undefined,
        user: loginInfo.username,
        token: loginInfo.token
      });
      document.cookie = `userToken=${loginInfo.token}`;
      this.getUsers(loginInfo.username, loginInfo.token)
    }).then(json => console.log(json)).catch(err => console.warn(err));

  }
  submitRegister() {
    const url = '//sea-info6250-crud.herokuapp.com/users/test/' + this.state.username;
    const password = this.state.password
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({password}),
      credentials: 'include'
    }).then(
      response => response.ok
      ? response.json()
      : response.json().then(err => {
        Promise.reject(err);
        this.setState({message: 'invaid registration !'})
      })).then((loginInfo) => {
      this.setState({
        loggedIn: loginInfo.username !== undefined,
        user: loginInfo.username

      });
      document.cookie = `userToken=${loginInfo.token}`
    }).then(json => console.log(json)).catch(err => console.warn(err));
  }

  getUsers(user, token) {
    fetch(`/api/${user}/${token}`, {method: 'GET'}).then(
      response => response.ok
      ? response.json()
      : response.json().then(err => Promise.reject(err))).then((response) => this.setState({users: response})).catch(err => console.warn(err))
  }

  render() {

    const isLogin = this.state.loggedIn;
    if (!isLogin) {
      return (<div className="App">
        <h1>Sign in / Sign up</h1>
        <div>Name</div>
        <input type="text" onChange={this.updateName}/>
        <div>Password</div>
        <input type="password" onChange={this.updatePassword}/>
        <div>
          <button type="submit" onClick={this.submitLogin}>Login</button>
          <button type="button" onClick={this.submitRegister}>Register</button>
        </div>
      </div>)
    } else {
      return (<div>
        <div className="App">

          <h2>You login. There are users' lists
          </h2>
          <button type="submit" onClick={this.submitLogout}>
            {this.state.username}_Log out</button>
          <div>{JSON.stringify(this.state.users)}</div>
        </div>
      </div>)
    }
  }
}
export default App;