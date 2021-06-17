import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function PopupEditProfile(props) {
    return (
        <PopupWithForm title="Редактировать профиль" name="popup" isOpen={props.isOpen} onClose={props.onClose}>
            <input id="heading-input" type="text" name="name" placeholder="Имя" className="form__input" minLength="2" maxLength="40" required />
            <span className="heading-input-error form__input-error"></span>
            <input id="subheading-input" type="text" name="about" placeholder="Вид деятельности" className="form__input" minLength="2" maxLength="200" required />
            <span className="subheading-input-error form__input-error"></span>
        </PopupWithForm>
    );
}