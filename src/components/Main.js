import React from 'react';
import api from '../utils/Api';
import Card from './Card';

function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}){

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

React.useEffect(() => {
  api
  .getUser()
  .then((data) => {
    setUserName(data.name);
    setUserDescription(data.about);
    setUserAvatar(data.avatar);
  })
  .catch((err) => console.log(err))
}, [])

React.useEffect(()=>{
api
.getInitialCards()
.then((data) => {
  setCards(data.map((item) => ({
    id: item._id,
    name: item.name,
    link: item.link,
    likes: item.likes
  })))
})
.catch((err) => console.log(err))
})

    return(
      <main>
      <section className="profile">
        <div className="profile__image">
          <img
            className="profile__avatar"

            src={ `${userAvatar}` }
            
            alt={`${userName}`}
          />
          <button className="profile__avatar-button" onClick={onEditAvatar} />
        </div>
        <div className="profile__content">
          <h1 className="profile__name" id="name">
          {`${userName}`}
          </h1>
          <button className="profile__edit-button" type="button" onClick={onEditProfile} />
          <p className="profile__description" id="description">
          {`${userDescription}`}
          </p>
        </div>
        <button className="profile__add-button" type="button" onClick={onAddPlace}/>
      </section>
      <section>
        <ul className="elements">{cards.map((card) => {
  return (
<Card 
key = {card._id}
card = {card}
onCardClick = {onCardClick}
/>)
})}</ul>
      </section>
    </main>)
}

export default Main