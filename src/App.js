import React, { Component } from 'react';
import MoviePage from './context/MoviePage';
import UserContext from './context/userContext';
import CartContext from "./context/cartContext";
import Login from './context/Login';

class App extends Component {
  state = { currentUser : null }

  handleLoggedIn = username => {
    console.log("Getting the user: " + username);

    const user = { name: "Agosh" }
    this.setState({ currentUser: user });
  }

  render() {
    return (
      <CartContext.Provider value={{ cart: []}}>
        <UserContext.Provider
          value={[this.state.currentUser, this.handleLoggedIn]}
        >
          <div>
            <MoviePage />
            <Login />
          </div>
        </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;