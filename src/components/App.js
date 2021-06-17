import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithAvatar from './PopupWithAvatar';
import PopupEditProfile from './PopupEditProfile';
import PopupAddCard from './PopupAddCard';
import ImagePopup from './ImagePupup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
        <Header />
        <Main onEditAvatar={handleEditAvatarClick} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
        <Footer />
        <PopupWithAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups}/>
        <section className="popup popup-delete">
          <div className="popup__container">
            <form name="popupDelete" className="form" noValidate>
              <button type="button" className="popup__close-btn" value=""><img className="popup__icon" alt="Крестик." src="<%=require('./images/close.svg')%>" /></button>
              <h2 className="form__title">Вы уверены?</h2>
              <button type="submit" className="form__save-btn">Да</button>
            </form>
          </div>
        </section>
    </div>
  );
}

export default App;
