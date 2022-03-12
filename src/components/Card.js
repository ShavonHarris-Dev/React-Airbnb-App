import cardStar from '../images/Star.png'


const Card = (props) => {
  console.log(props)
  
  
  
  return (
    <div className="card">
     <img src={`../cardImg/${props.coverImg}`} alt="card coverImg" className="card--image" />
             <div className="card--stats">
                <img src={cardStar} alt="star" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}

export default Card
