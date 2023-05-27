import './index.css'

const PasswordItem = props => {
  const {item, deleteItem} = props
  const {web, username, password, isChecked} = item
  console.log(isChecked)
  const pass = isChecked ? (
    <p>{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
      className="stars"
    />
  )
  const delItem = () => {
    deleteItem(username)
  }
  return (
    <li className="item">
      <div className="itemIcon">
        <p>{username[0]}</p>
      </div>
      <div>
        <p>{web}</p>
        <p>{username}</p>
        {pass}
      </div>
      <button type="button" data-testid="delete" onClick={delItem}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="del"
        />
      </button>
    </li>
  )
}

export default PasswordItem
