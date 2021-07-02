import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function PopupWithAvatar(props) {

    const avatarRef = React.useRef('');
    
    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm title="Обновить аватар" name="popupAvatar" onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} isLoading={props.isLoading}>
            <input id="avatar-input" type="url" ref={avatarRef} placeholder="Ссылка на аватар" name="link" className="form__input" required />
            <span className="link-input-error form__input-error"></span>
        </PopupWithForm>
    );
}