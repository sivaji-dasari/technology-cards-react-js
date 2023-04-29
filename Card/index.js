import './index.css'

const Card = props => {
  const {cardData} = props
  const {title, description, imgUrl, className} = cardData
  return (
    <div className={className}>
      <div className="inner-container">
        <h1 className="card-heading">{title}</h1>
        <p className="card-paragraph">{description}</p>
        <div className="img-style">
          <img src={imgUrl} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Card
