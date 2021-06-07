import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, SignIn } from './components'
import './styles.css'
import reportWebVitals from './reportWebVitals';

//import for react routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//...Other imports above 

import { Provider } from 'react-redux';
import { store } from './redux/store';
// import for Firebase Auth
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig'

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}> {/* New Provider */}
    <Provider store = { store }> 
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home title='Nic Walker React Project'/>
        </Route>

        <Route path='/dashboard' component={Dashboard} />

        <Route path='/signin' component={SignIn} />
      </Switch>
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
