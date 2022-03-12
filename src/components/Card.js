import cardStar from '../images/Star.png'





const Card = (props) => {
  let badgeText
  if (props.card.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.card.location === "Online") {
      badgeText = "ONLINE"
  }


  
  
  return (
    <div className="card">
    {badgeText && <div className="card--badge">{badgeText}</div>}
     {/* if the first element is truthy the div will display. If its a falsey the div will never display */}
     <img src={`../cardImg/${props.card.coverImg}`} alt="card coverImg" className="card--image" />
             <div className="card--stats">
                <img src={cardStar} alt="star" className="card--star" />
                <span>{props.card.rating}</span>
                <span className="gray">({props.card.stats.reviewCount}) • </span>
                <span className="gray">{props.card.location}</span>
            </div>
            <p className="card--title">{props.card.title}</p>
            <p className="card--price"><span className="bold">From ${props.card.price}</span> / person</p>
    </div>
  )
}

export default Card
