import React, { Component } from 'react';
import ChirpInfo from './ChirpsInfo';
import List from './List';









class CreateChirp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [
                { text: 'FIRST TWEE-- ERR, I MEAN CHIRP!', id: 0 },
                { text: 'SECOND CHIRP OMG', id: 1 },
                { text: 'SUCH CHIRP! MUCH WOW!', id: 2 },
            ]
        };
    }

    componentDidMount() {
        this.getChirps();
    }

    getChirps() {
        fetch('/api/chirps/')
            .then((response) => {
                return response.json();
            }).then((chirps) => {
                let keys = Object.keys(chirps);
                let chirpsArray = [];

                for (let key of keys) {
                    if (key !== 'nextid') {
                        chirpsArray.push({
                            text: chirps[key].text,
                            id: key
                        });
                    }
                }

                this.setState({
                    chirps: chirpsArray
                });
            }).catch((err) => {
                //console.log(err);
            });
    }

    addChirp(text) {
        fetch('/api/chirps/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text
            })
        }).then(() => {
            this.getChirps();
        }).catch((err) => {
            //console.log(err);
        });
    }

    render() {
        return (
            <div className="box">
                <ChirpInfo postChirp={(text) => { this.addChirp(text); }} />
                <List chirps={this.state.chirps} />
            </div>
        );
    }
}

export default CreateChirp;

























//class CreateChirp extends Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             chirps: []
//         }
//     }

//     componentDidMount() {
//         this.getChirps()
//     }


//     getChirps() {
//     fetch("http://localhost:3000/api/chirps")
//     .then(function (data) {
//         console.log(data)
//         // this is a test//
//         let chirpsArray = []
//         let indexs = Object.keys(data);
//         console.log(indexs);
//         let info = Object.values(data);
//         console.log(info);
//         info.forEach(element => {
//           console.log(element)
//           console.log(indexs[info.indexOf(element)])
//           if (!isNaN(indexs[info.indexOf(element)])) {
//             createChirp(indexs[info.indexOf(element)], element)
//           }
    
    
//         });
    
    
    
//       });
