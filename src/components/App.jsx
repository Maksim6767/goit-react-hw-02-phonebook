import { createGlobalStyle } from 'styled-components';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';

const GlobalStyle = createGlobalStyle`
  ul,h1,h2,h3,h4,h5,h6,li{list-style:none; margin:0; padding:0;};
  body{
    height:100vh;
    display: flex;
    justify-content:center;
    align-items:center;
    color: '#010101'; 
  }
`;

export class App extends Component {
  state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    console.log(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="w-25" onSubmit={this.handleSubmit}>
        <h1>Phonebook</h1>
        {/* <ContactForm  /> */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <p>Name</p>
          </label>

          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">
            <p>Number</p>
            <input
              type="tel"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
        </div>

        <button className="btn btn-primary" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

{/* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */}