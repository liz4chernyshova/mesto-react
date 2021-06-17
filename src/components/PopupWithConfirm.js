import PopupWithForm from './PopupWithForm';
import React from 'react';

export default function PopupWithConfirm() {
    return(
        <PopupWithForm title="Вы уверены?" name="popupDelete" buttonText="Да">
        </PopupWithForm>
    )
}