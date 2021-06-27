import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ForgotPassword from './components/ForgotPassword';
import { useDispatch } from 'react-redux';
import { loginSuccess } from './redux/auth/signupAction';
import Notification from './components/Notification';
import RecoverPassword from './components/RecoverPassword';

function App() {
  const dispatch = useDispatch();
  const currentUser = localStorage.getItem('currentUser');
  if (currentUser) {
    dispatch(loginSuccess(JSON.parse(currentUser)));
  }
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/signup' component={SignUp} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/recover-password/:token' component={RecoverPassword} />
        </Switch>
        <Notification />
      </div>
    </BrowserRouter>
  );
}

export default App;
