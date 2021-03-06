import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AddClient from './AddClient';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => {
    return(
        <div>
            <Router>
            <Switch>
                <Route path="/" exact component={SignUp}/>
                <Route path="/signUp" component={SignUp}/>
                <Route path="/signIn" component={SignIn}/>
                <Route path="/addClient" component={AddClient}/>
            </Switch>
            </Router>
        </div>
        
    )
}

export default App;