
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login';
import Home from './components/Home';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Register/>
        </Route>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Home" component={Home}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
