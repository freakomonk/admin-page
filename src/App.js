import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <body>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/register" component={RegisterForm}/>
          <Route path="/login" component={LoginForm}/>
        </Switch>
      </body>
    </div>
  );
}

export default App;
