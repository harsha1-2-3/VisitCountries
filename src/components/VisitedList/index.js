import './index.css'

const VisitedList = props => {
  const {onClickRemoveBtn, visitedDetails} = props
  const {name, imageUrl, id} = visitedDetails

  const clickedRemoveBtn = () => {
    onClickRemoveBtn(id)
  }

  return (
    <li className="VisitedLi">
      <img className="VisitedImg" src={imageUrl} alt="thumbnail" />
      <div className="VisitedNameCont">
        <p className="VisitedName">{name}</p>
        <button onClick={clickedRemoveBtn} type="button" className="RemoveBtn">
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitedList
