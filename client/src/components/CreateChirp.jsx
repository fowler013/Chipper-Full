import React, { Component } from 'react';
import ChirpInfo from './ChirpsInfo';
import List from './List';









class CreateChirp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirps: [
                ,
            ]
        };
    }

    componentDidMount() {
        this.getChirps();
    }

    getChirps() {
        fetch("http://localhost:3000/api/chirps")
        .then(function (data) {
            console.log(data)
            // this is a test//
            let indexs = Object.keys(data);
            console.log(indexs);
            let info = Object.values(data);
            console.log(info);
            info.forEach(element => {
              console.log(element)
              console.log(indexs[info.indexOf(element)])
              if (!isNaN(indexs[info.indexOf(element)])) {
                createChirp(indexs[info.indexOf(element)], element)
              }
        
        
            });
        
        
        
          });
    }

    addChirp(chirps) {
        fetch("http://localhost:3000/api/chirps", {
            method: "POST",
            data: JSON.stringify(chirps),
            contentType: 'application/json',
            dataType: "json",
            success: (result) => {
              console.log(result)
              createChirp(result, chirps)
            }
        })
    }

    render() {
        return (
            <div className="box">
                <ChirpInfo postChirp={(chirps) => { this.addChirp(chirps); }} />
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
