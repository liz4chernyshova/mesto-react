import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function PopupWithAvatar(props) {
    return (
        <PopupWithForm title="Обновить аватар" name="popupAvatar" isOpen={props.isOpen} onClose={props.onClose}>
            <input id="avatar-input" type="url" placeholder="Ссылка на аватар" name="link" className="form__input" required />
            <span className="link-input-error form__input-error"></span>
        </PopupWithForm>
    );
}