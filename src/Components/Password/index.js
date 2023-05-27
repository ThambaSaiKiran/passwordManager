import {Component} from 'react'
import PasswordItem from '../PasswordItem'
import './index.css'

class Password extends Component {
  state = {
    passwordList: [],
    web: '',
    username: '',
    password: '',
    isChecked: false,
    searchPass: '',
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {passwordList, web, username, password} = this.state
    const obj = {
      web,
      username,
      password,
    }
    const newList = [...passwordList]
    newList.push(obj)
    this.setState({passwordList: newList, web: '', username: '', password: ''})
  }

  noPasswords = () => (
    <div className="noPassCont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
        alt="no passwords"
        className="noPass"
      />
      <p>No Passwords</p>
    </div>
  )

  deleteItem = username => {
    const {passwordList} = this.state
    const newList = passwordList.filter(
      eachItem => eachItem.username !== username,
    )
    this.setState({passwordList: newList})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  changeUsername = event => {
    this.setState({username: event.target.value})
  }

  changeWebUrl = event => {
    this.setState({web: event.target.value})
  }

  changeStar = () => {
    const {isChecked} = this.state
    this.setState({isChecked: !isChecked})
  }

  changeSearchPass = event => {
    this.setState({searchPass: event.target.value})
  }

  render() {
    const {
      passwordList,
      web,
      username,
      password,
      isChecked,
      searchPass,
    } = this.state
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="logo"
        />
        <div className="bg1">
          <div className="bg11">
            <h1 className="h1">Add new Password</h1>
            <form onSubmit={this.onSubmitForm}>
              <div className="inputs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="formLogos"
                />
                <input
                  type="text"
                  value={web}
                  placeholder="Enter Website"
                  className="search"
                  onChange={this.changeWebUrl}
                />
              </div>
              <div className="inputs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="formLogos"
                />
                <input
                  type="text"
                  value={username}
                  placeholder="Enter Username"
                  className="search"
                  onChange={this.changeUsername}
                />
              </div>
              <div className="inputs">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="formLogos"
                />
                <input
                  type="password"
                  value={password}
                  placeholder="Enter Password"
                  className="search"
                  onChange={this.changePassword}
                />
              </div>
              <div>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="pmImg"
          />
        </div>
        <div className="bg2">
          <div className="bg21">
            <div className="bg212">
              <h1 className="h1">Your Passwords</h1>
              <p className="len">{passwordList.length}</p>
            </div>
            <div className="bg211">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="formLogos"
              />
              <input
                type="search"
                placeholder="Search"
                className="search"
                onChange={this.changeSearchPass}
                value={searchPass}
              />
            </div>
          </div>
          <hr />
          <div>
            <div>
              <input type="checkbox" id="check" onClick={this.changeStar} />
              <label htmlFor="check">Show Passwords</label>
            </div>
          </div>
          <div>
            {passwordList.length === 0 ? (
              this.noPasswords()
            ) : (
              <ul className="list">
                {passwordList.map(item => (
                  <PasswordItem
                    key={item.username}
                    item={item}
                    isChecked={isChecked}
                    deleteItem={this.deleteItem}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Password
