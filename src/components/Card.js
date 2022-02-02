function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="cards__item">
      <img onClick={handleClick}
        src={props.link}
        alt={props.name} className="cards__image" />
      <div className="cards__content">
        <h2 className="cards__title">{props.name}</h2>
        <div className="cards__like-container">
          <button className="cards__like" type="button"></button>
          <p className="cards__count-like">{props.likes.length}</p>
        </div>
      </div>
    </li>
  )
}

export default Card;