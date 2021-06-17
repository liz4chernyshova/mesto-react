import React from 'react';
import api from '../utils/Api';
import Card from './Card';

export default function Main(props) {
    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
        .then((userData, initialCards) => {
            setUserName(userData.name);
            setUserDescription(userData.about);
            setUserAvatar(userData.avatar);
            setCards(initialCards);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])

    return (
        <main className="content">
            <section className="profile">
              <div className="profile__avatar-container" onClick={props.onEditAvatar}>
                  <img className="profile__avatar" alt="Аватарка." src={userAvatar} />
              </div>
                <div className="profile__info">
                    <div className="profile__redactor">
                        <h1 className="profile__info-name">{userName}</h1>
                        <button type="button" className="profile__redactor-btn" value="" onClick={props.onEditProfile} ></button>
                    </div>
                    <p className="profile__info-description">{userDescription}</p>
                </div>
                <button type="button" className="profile__submit-btn" value="" onClick={props.onAddPlace}></button>
            </section>
            <section className="photo-elements">
                <template id="template-element">
                    {cards.map((card) => (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                    ))}
                </template>
            </section>
        </main>  
    );
}