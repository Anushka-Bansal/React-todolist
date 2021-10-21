import './App.css';
import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration'
import Navii from './Components/Navii';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/registration' exact component={Registration} />
          <Route path='/homepage' component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
