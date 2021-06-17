import React from 'react';

export default function Card(props) {
    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
          <div className="photo-element">
              <img className="photo-element__picture" alt={props.card.name} src={props.card.link} onClick={handleClick} />
              <div className="photo-element__content">
                  <h2 className="photo-element__title">{props.card.name}</h2>
                  <div className="photo-element__likes-container">
                    <button type="button" className="photo-element__like" value=""></button>
                    <p className="photo-element__quantity">{props.card.likes.length}</p>
                  </div>
              </div>
              <button type="button" className="photo-element__delete-btn" value=""></button>
          </div>
    )
}