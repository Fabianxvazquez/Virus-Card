import React, { Component } from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom'
import Home from './Home'
import About from './About'
import NoMatch from './NoMatch';
import {Container} from 'semantic-ui-react'
import Navbar from './Navbar'
import Virus from './Virus'

export default class App extends Component {
  state = {
    viruses: [
      {
        id: 1,
        name: "ebola",
        description: "The Ebola virus causes an acute, serious illness which is often fatal if untreated. EVD first appeared in 1976 in 2 simultaneous outbreaks, one in what is now Nzara, South Sudan, and the other in Yambuku, DRC. The latter occurred in a village near the Ebola River, from which the disease takes its name. The 2014–2016 outbreak in West Africa was the largest Ebola outbreak since the virus was first discovered in 1976. The outbreak started in Guinea and then moved across land borders to Sierra Leone and Liberia. The current 2018-2019 outbreak in eastern DRC is highly complex, with insecurity adversely affecting public health response activities. The virus family Filoviridae includes three genera: Cuevavirus, Marburgvirus, and Ebolavirus. Within the genus Ebolavirus, six species have been identified: Zaire, Bundibugyo, Sudan, Taï Forest, Reston and Bombali. The virus causing the current outbreak in DRC and the 2014–2016 West African outbreak belongs to the Zaire ebolavirus species.",
        showBack: false,
        edit: false
      },
      {
        id: 2,
        name: "Covid-19",
        description: "Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death. ",
        showBack: false,
        edit: false
      }
    ],
    showForm: false
  };
  getID() {
    return Math.floor(Math.random() * 100);
  }
  addVirus = virus => {
    const newVirus = { ...virus, id: this.getID() };
    const newViruses = [newVirus, ...this.state.viruses];
    this.setState({
      viruses: newViruses
    });
  };
  deleteVirus = id => {
    const { viruses } = this.state;
    const newViruses = viruses.filter(virus => virus.id !== id);
    this.setState({
      viruses: newViruses
    });
  };

  editVirus = virusObject => {
    const { viruses } = this.state;
    const newViruses = viruses.map(virus => {
      if (virus.id === viruses.id) return virus;
      return virus;
    });
    this.setState({ viruses: newViruses });
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
    const newArray = this.state.viruses.map(virus => {
      if (virus.id === id) {
        const newCard = { ...virus };
        newCard.edit = !virus.Edit;
        this.toggleForm()

        
      } else {
        return virus
      }
    });
    
    this.setState({
      viruses: newArray
    })
    
  };

  toggleAnswer = id => {
    // map and if id matches change
    let newArray = this.state.viruses.map(virus => {
      if (virus.id === id) {
        const Card = { ...virus };
        Card.showBack = !virus.showBack;
        return Card;
      } else {
        return virus;
      }
    });
    this.setState({
      viruses: newArray
    });
  };
  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    });
  };
  render () {
  return (
    <>
    <Container>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/About' component={About} />
      <Route exact path="/Virus" component={Virus} />
      <Route component={NoMatch} />
    </Switch>
    </Container>
    
    </>
  );
  }
}

