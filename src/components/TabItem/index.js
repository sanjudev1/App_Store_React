// Write your code here
import './index.css'

const TabItem = props => {
  const {tabItem, isActive, onChangeCategory} = props
  const {tabId, displayText} = tabItem

  const activeTabBtn = isActive ? 'active-tab-btn' : ''
  const onEvent = () => {
    onChangeCategory(tabId)
  }
  return (
    <li className="tabItem">
      <button
        type="button"
        onClick={onEvent}
        className={`btn-tb ${activeTabBtn}`}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
