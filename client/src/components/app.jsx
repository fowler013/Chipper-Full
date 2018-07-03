import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom';
import Header from './header';
//import List from './List';
import Goodbye from './goodbye';
//import ChirpsInfo from './ChirpsInfo'
import CreateChirp from './CreateChirp';

class Navigation extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    
                    <Link to="/goodbye">Goodbye</Link>
                    <Switch>
                        <Route exact path="/" component = {CreateChirp} />
                        <Route />
                        <Route exact path = "/goodbye" component = {Goodbye}/>
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;





















// import React, { Component, Fragment } from 'react';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import Header from './header';
// import Chirps from './chirps';
// import GoodbyeWorld from './goodbye';

// class Navigation extends Component {
//     render() {
//         return (
//             <Router>
//                 <Fragment>
//                     <Header />
//                     <Link to="/goodbye">Goodbye</Link>
//                     <Switch>
//                         <Route exact path="/" component={Chirps} />
//                         <Route path="/goodbye" component={GoodbyeWorld} />
//                     </Switch>
//                 </Fragment>
//             </Router>
//         )
//     }
// }

// export default Navigation;
