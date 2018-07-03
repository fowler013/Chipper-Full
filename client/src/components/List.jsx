import React, {Component, Fragment} from 'react'
import Chirps from './Chirps'


class List extends Component {
    render() {
        return (
           <Fragment>
                {this.props.chirps.map((chirp) => {
                    return (
                        <Chirps key={chirp.id} user={chirp.user} text={chirp.text} />
                    );
                })}
           </Fragment> 
        );
    }
} export default List





































// import React, { Component, Fragment } from 'react';
// import Chirp from './chirp';

// class ChirpList extends Component {
//     render() {
//         return (
//             <Fragment>
//                 {this.props.chirps.map((chirp) => {
//                     return (
//                         <Chirp key={chirp.id} text={chirp.text} />
//                     );
//                 })}
//             </Fragment>
//         );
//     }
// }

// export default ChirpList;