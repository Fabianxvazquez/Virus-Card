import React, { Component } from "react";
import { Container, Header, CommentAction } from "semantic-ui-react";
import FlashCards from './flashCards'

import "./App.css";
import CardForm from "./CardForm";

class App extends Component {
  state = {
    cards: [
      {
        id: 1,
        front: "important question",
        back: "important answer",
        correct: 0,
        wrong: 0,
        showBack: false,
        edit: false
      },
      {
        id: 2,
        front: "other question",
        back: "other answer",
        correct: 0,
        wrong: 0,
        showBack: false,
        edit: false
      }
    ],
    showForm: false
  };

  getID() {
    return Math.floor(Math.random() * 100);
  }
  addCard = card => {
    const newCard = { ...card, id: this.getID() };
    const newCards = [newCard, ...this.state.cards];
    this.setState({
      cards: newCards
    });
  };
  deleteCard = id => {
    const { cards } = this.state;
    const newCards = cards.filter(card => card.id !== id);
    this.setState({
      cards: newCards
    });
  };

  editCard = cardObject => {
    const { cards } = this.state;
    const newCards = cards.map(card => {
      if (card.id === cards.id) return card;
      return card;
    });
    this.setState({ cards: cards });
  };
  renderEditForm() {
    if (this.state.edit) {
      return (
      <form onSubmit={this.onUpdateHandle.bind(this)}>
        <input 
        type="text" 
        name="updatedItem" 
        className="item" 
        defaultValue={this.state.title} />
        <button className="update-add-item">Update</button>
      </form>
      )}
    }
  toggleEdit = id => {
    const newArray = this.state.cards.map(card => {
      if (card.id === id) {
        const newCard = { ...card };
        newCard.edit = !card.Edit;
        this.toggleForm()

        
      } else {
        return card
      }
    });
    
    this.setState({
      cards: newArray
    })
    
  };

  toggleAnswer = id => {
    // map and if id matches change
    let newArray = this.state.cards.map(card => {
      if (card.id === id) {
        const Card = { ...card };
        Card.showBack = !card.showBack;
        return Card;
      } else {
        return card;
      }
    });
    this.setState({
      cards: newArray
    });
  };
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };

  render() {
    const { showForm } = this.state;
    return (
      <>
        <Container>
          <Header as="h1">Flash Cards</Header>

          {/* a way to add more flash cards */}
          <div onClick={this.toggleForm}>
            {showForm ? "hide" : "new Flashcard"}
          </div>
          {showForm ? <CardForm addCard={this.addCard} /> : null}
          {/* bunch of flash cards */}
          <FlashCards
            cards={this.state.cards}
            delete={this.deleteCard}
            // edit={this.editCard}
            toggleEdit={this.toggleEdit}
            toggleAnswer={this.toggleAnswer}
          />

          {/* a way to edit flash cards  */}
          {/* a way to show front and back of flash cards */}
          {/* a way to guess answers */}
          {/* a way to show success and fails of your guesses */}
        </Container>
      </>
    );
  }
}

export default App;
