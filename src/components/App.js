import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithAvatar from './PopupWithAvatar';
import PopupEditProfile from './PopupEditProfile';
import PopupAddCard from './PopupAddCard';
import ImagePopup from './ImagePupup';
import PopupWithConfirm from './PopupWithConfirm';
import api from '../utils/api';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCard] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState('');

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
    .then(([userData, cardData]) => {
        setCurrentUser(userData);
        setCard(cardData);
    })
    .catch((err) => {
        console.log(err);
    });
  }, []);

  function handleUpdateUser(data) {
    setIsLoading('Сохранить...');
    api.setUserInfo(data)
      .then((userData) => {
        setCurrentUser(userData);
        closeAllPopups();
      })
      .catch((err) => {
          console.log(err);
      })
      .finally(() => setIsLoading(''));
  }

  function handleUpdateAvatar(data) {
    setIsLoading('Сохранить...');
    api.setUserAvatar(data)
    .then(userAvatar => {
      setCurrentUser(userAvatar);
      closeAllPopups();
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => setIsLoading(''));
  }

  function handleAddPlaceSubmit(data) {
    setIsLoading('Сохранить...');
    api.addCard(data)
    .then((cardData) => {
      setCard([cardData, ...cards]);
      closeAllPopups();
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => setIsLoading(''));
  }

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

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.likeCard(card._id, !isLiked)
      .then((newCard) => {
          setCard((cards) => cards.map((c) => c._id === card._id ? newCard : c));
      })
      .catch((err) => {
        console.log(err);
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
          setCard((cards) => cards.filter((c) => c._id !== card._id));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick} 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}/>
        <Footer />
        <PopupWithAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isLoading={isLoading}/>
        <PopupEditProfile onUpdateUser={handleUpdateUser} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} isLoading={isLoading}/>
        <PopupAddCard isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} isLoading={isLoading}/>
        <ImagePopup card={selectedCard !== null && selectedCard} onClose={closeAllPopups}/>
        <PopupWithConfirm />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
