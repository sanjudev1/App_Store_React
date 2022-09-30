// Write your code here
import './index.css'

const AppItem = props => {
  const {categoryList} = props
  const {appName, imageUrl} = categoryList

  return (
    <li className="container">
      <img src={imageUrl} alt={appName} className="image" />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
