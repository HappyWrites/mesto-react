import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';



function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({})

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className="page">
        <div className="page__content">
          <Header />
          <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
          <Footer />
        </div >
      </div >

      <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title='Редактировать профиль' name='edit-profile' buttonName="Сохранить">
        <input id="name-input" className="popup__input popup__input_type_name" required minLength="2" maxLength="40"
          type="text" placeholder="Жак-Ив Кусто" name="name" />
        <span className="name-input-error popup__input-error"></span>
        <input id="about-input" className="popup__input popup__input_type_about-me" required minLength="2" maxLength="200"
          type="text" placeholder="Исследователь океана" name="about" />
        <span className="about-input-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title='Новое место' name='add' buttonName="Создать">
        <input id="place-input" className="popup__input popup__input_type_name popup__input_type_place" required
          minLength="2" maxLength="30" type="text" placeholder="Название" name="name" />
        <span className="place-input-error popup__input-error"></span>
        <input id="link-input" className="popup__input popup__input_type_about-me popup__input_type_link" required
          type="url" placeholder="Ссылка на картинку" name="link" />
        <span className="link-input-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm title='Вы уверены?' name='trash' subtitle='Да' onClose={closeAllPopups} buttonName="Да" />

      <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title='Обновить аватар' name='edit-avatar' buttonName="Сохранить" >
        <input id="avatar-input" className="popup__input popup__input_type_avatar" required minLength="2" maxLength="150"
          type="text" placeholder="Ссылка" name="avatar" />
        <span className="avatar-input-error popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    </>
  );
}

export default App;


