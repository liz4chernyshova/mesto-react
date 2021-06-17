import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function PopupAddCard(props) {
    return (
        <PopupWithForm title="Новое место" name="popupAdd" isOpen={props.isOpen} onClose={props.onClose}>
            <input id="name-input" type="text" placeholder="Название" name="name" className="form__input" minLength="2" maxLength="30" required />
            <span className="name-input-error form__input-error"></span>
            <input id="link-input" type="url" placeholder="Ссылка на картинку" name="link" className="form__input" required />
            <span className="link-input-error form__input-error"></span>
        </PopupWithForm>
    );
}