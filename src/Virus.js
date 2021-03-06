import React from "react";
import { Container, Header } from "semantic-ui-react";
import VirusForm from "./VirusForm";
import VirusCards from "./VirusCards";



export default class Virus extends React.Component {
  
  state = {
    viruses: [
      {
        id: this.getID(),
        name: "ebola",
        description: "The Ebola virus causes an acute, serious illness which is often fatal if untreated. EVD first appeared in 1976 in 2 simultaneous outbreaks, one in what is now Nzara, South Sudan, and the other in Yambuku, DRC. The latter occurred in a village near the Ebola River, from which the disease takes its name. The 2014–2016 outbreak in West Africa was the largest Ebola outbreak since the virus was first discovered in 1976. The outbreak started in Guinea and then moved across land borders to Sierra Leone and Liberia. The current 2018-2019 outbreak in eastern DRC is highly complex, with insecurity adversely affecting public health response activities. The virus family Filoviridae includes three genera: Cuevavirus, Marburgvirus, and Ebolavirus. Within the genus Ebolavirus, six species have been identified: Zaire, Bundibugyo, Sudan, Taï Forest, Reston and Bombali. The virus causing the current outbreak in DRC and the 2014–2016 West African outbreak belongs to the Zaire ebolavirus species.",
        showBack: false,
      },
      {
        id: this.getID(),
        name: "Covid-19",
        description: "Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death. ",
        showBack: false,
      }],
    showForm: false,
    editing: false,
    currentVirus: {}
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
  resetFormInputs = () => {
    this.setState({
      name: "",
      description: ""
    })
  }


  editVirus = v => {
    console.log('editVirus start')
    const viruses = this.state.viruses.map(virus => {
      if (virus.id === v.id) {
        return virus
      } else {
        return virus;
      }
    });
    console.log('editvirus stop')
    this.setState({ viruses: viruses });
  };
  toggleEdit = (vID) => {
    const {viruses} =this.state
    const virus = viruses.filter(virus => {
      return virus.id === vID;
    });
    const v = {...virus}
    const v2 = v[0]
   
    this.setState({ 
      currentVirus: v2,
      editing: !this.state.editing,
      name: virus.name,
      description: virus.description
    });
    ;
    console.log(v2);
  }

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
  const { showForm, editing } = this.state;
  return (
    <>
      <Container>
        <Header as="h1">Viruses</Header>

        {/* a way to add more flash cards */}
        <div onClick={this.toggleForm}>{showForm ? "hide" : "add virus"}</div>
        {showForm ? (
          <VirusForm
            currentVirus={this.currentVirus}
            addVirus={this.addVirus}
            toggleForm={this.toggleForm}
            reset={this.resetFormInputs}
          />
        ) : null}
        {editing ? (
          <VirusForm
            editing={true}
            currentVirus={this.state.currentVirus}
            edit={this.editVirus}
            toggleForm={this.toggleForm}
            reset={this.resetFormInputs}
            toggleEdit={this.toggleEdit}
          />
        ) : null}
        {/* bunch of flash cards */}
        <VirusCards
          viruses={this.state.viruses}
          delete={this.deleteVirus}
          editVirus={this.editVirus}
          reset={this.resetFormInputs}
          toggleEdit={this.toggleEdit}
          toggleAnswer={this.toggleAnswer}
          renderEditForm={this.renderEditForm}
          currentVirus={this.currentVirus}
        />
      </Container>
    </>
  );
  }
  }
