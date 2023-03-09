import React from 'react';
import Delete from '../img/delete.svg';

function Card({card, onCardClick}){
    function handleCardClick() {
        onCardClick(card);
      };

      return(
    <li className="element">
      <img className="element__image" alt={`${card.name}`} id="source" src={card.link}  onClick={handleCardClick}/>
      <img className="element__delete" src={Delete} alt="кнопка удаления" />
      <div className="element__content">
        <h2 className="element__title" id="title">{card.name}</h2>
        <div className="element__like-container">
        <button className="element__like" type="button"></button>
        <span className="element__like-counter">{card.likes.length}</span>
      </div>
      </div>
    </li>)
}

export default Card