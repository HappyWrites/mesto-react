import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {
  const [userName, setUserName] = React.useState(null);
  const [userDescription, setUserDescription] = React.useState(null);
  const [userAvatar, setUserAvatar] = React.useState(null);
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, cards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__data">
          <button onClick={props.onEditAvatar} className="profile__avatar-button" type="button">
            <img className="profile__image" src={userAvatar} alt="аватар" />
          </button>
          <div className="profile__info">
            <div className="profile__edit-name">
              <h1 className="profile__name">{userName}</h1>
              <button onClick={props.onEditProfile} className="profile__edit" type="button"></button>
            </div>
            <p className="profile__about-me">{userDescription}</p>
          </div>
        </div>
        <button onClick={props.onAddPlace} className="profile__add" type="button"></button>
      </section>

      <section className="cards">
        <ul className="cards__items">
          {cards.map((item) => (<Card key={item._id} {...item} card={item} onCardClick={props.onCardClick} />))}
        </ul>
      </section>
    </main>
  )
}

export default Main;

