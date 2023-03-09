import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null)

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function onCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
  }

  return (

    <div>

      <Header />

      <Main onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={onCardClick}
      />

      <Footer />

      <PopupWithForm name='add' title="Новое место" btnText="Сохранить" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input
            id="title-input"
            className="popup__input popup__input_type_title "
            placeholder="Название"
            name="title"
            type="text"
            minLength={2}
            maxLength={30}
            required=""
          />
          <span className="popup__input-error title-input-error " />
        </label>
        <label className="popup__form-field">
          <input
            id="source-input"
            className="popup__input popup__input_type_source"
            placeholder="Ссылка на картинку"
            name="source"
            type="url"
            required=""
          />
          <span className="popup__input-error source-input-error " />
        </label>
      </PopupWithForm>

      <PopupWithForm name='edit' title="Редактировать профиль" btnText="Сохранить" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input
            id="name-input"
            className="popup__input popup__input_type_name"
            placeholder="Имя"
            name="name"
            type="text"
            minLength={2}
            maxLength={40}
            required=""
          />
          <span className="popup__input-error name-input-error " />
        </label>
        <label className="popup__form-field">
          <input
            id="description-input"
            className="popup__input popup__input_type_description"
            placeholder="Описание"
            name="description"
            type="text"
            minLength={2}
            maxLength={200}
            required=""
          />
          <span className="popup__input-error description-input-error " />
        </label>
      </PopupWithForm>

      <PopupWithForm name="confirm" title="Вы уверены?" btnText="Да" onClose={closeAllPopups} />

      <PopupWithForm name='update' title="Обновить аватар" btnText="Сохранить" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <label className="popup__form-field">
          <input
            id="update-input"
            className="popup__input popup__input_type_update"
            placeholder="Ссылка на картинку"
            name="avatar"
            type="url"
            required=""
          />
          <span className="popup__input-error update-input-error " />
        </label>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    </div>

  );
}

export default App;