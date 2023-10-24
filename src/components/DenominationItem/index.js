// Write your code here
import './index.css'

const DenominationItem = props => {
  const {eachDenominationDetails, updateBalance} = props
  const {value} = eachDenominationDetails

  return (
    <li className="denomination-item">
      <button
        className="denomination-button"
        type="button"
        onClick={() => updateBalance(value)}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
