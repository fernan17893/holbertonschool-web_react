import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <Notifications />
      <div className='App'>
        <Header />
        <Login />
        <Footer />
      </div>
    </Fragment>
  );
}

export default App;
