import logo from './logo.svg';
import './App.css';
import { getUser, removeUser, updateUser, getMuseums } from './methods'

import Navigation from './components/Navigation';
import Header from './components/Header';
import UserComponent from './components/UserComponent';

function App() {
  return (
    <div className="container">
      <h1>Museum </h1>
      <Navigation name='Kshitij'/> 
      <Header title = "Users"/>
      <UserComponent />

    </div>
  );
}

export default App; 

/**
 * users - current user, update(form), delete
 * museums - view all
 */