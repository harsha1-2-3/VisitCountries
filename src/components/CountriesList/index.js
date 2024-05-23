import './index.css'

const CountriesList = props => {
  const {onClickVisitBtn, countryDetails} = props
  const {id, isVisited, name} = countryDetails

  const clickedVisit = () => {
    onClickVisitBtn(id)
  }

  const isVisitedEle = isVisited ? (
    <p className="NotVisitedBtn">Visited</p>
  ) : (
    <button onClick={clickedVisit} type="button" className="VisitBtn">
      Visit
    </button>
  )

  return (
    <li className="NotVisitedLi">
      <p className="NotVisitedName">{name}</p>
      {isVisitedEle}
    </li>
  )
}
export default CountriesList
