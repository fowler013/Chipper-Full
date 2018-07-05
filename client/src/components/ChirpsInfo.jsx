import React, { Component, Fragment } from 'react'

class ChirpInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chirpUser: '',
            chirpText: ''
        };
    }

    componentDidMount() {
        this.getChirps();
    }

    getChirps() {

        fetch("http://localhost:3000/api/chirps")
        .then((res)=> res.json())
        .then((data) =>  {
            console.log(data)
            // this is a test//
            let indexs = Object.keys(data);
            let info = Object.values(data);
            console.log(indexs,info);
            // info.forEach(element => {
            //   if (!isNaN(indexs[info.indexOf(element)])) {
            //     createChirp(indexs[info.indexOf(element)], element)
            //   }
            // });
        
        
        
          });
    }

    handleInputChange(chirpUser) {
        this.setState({ chirpUser })
    };

    handleInputChange2(chirpText) {
        this.setState({ chirpText })
    };

    addChirp(a,b) {
        console.log({a,b})
        // console.log(chirps)
        // fetch("http://localhost:3000/api/chirps", {
        //     method: "POST",
        //     data: JSON.stringify(chirps),
        //     contentType: 'application/json',
        //     dataType: "json",
        //     success: (result) => {
        //       console.log(result)
        //       createChirp(result, chirps)
        //     }
        // })
    }
    

    render() {
        console.log(this.state.chirpUser)
        console.log(this.state.chirpText)
        return (
            <Fragment>
               <form>
                <div class="text-center bg-info">

                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input value={this.state.chirpUser} onChange={(event) => { this.handleInputChange(event.target.value) }} id="name" type="text" name="name" class="form-control float" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div>
                        <textarea value={this.state.chirpText} onChange={(event) => { this.handleInputChange2(event.target.value) }} id="text" class="form-input float" type="text" name="message" placeholder="text"></textarea>
                    </div>
                    <div>
                        <input onClick={() => { this.addChirp({this.state.chirpUser, this.state.chirpText}) }} id="btn" class="btn btn-danger p-2" type="button" value="Add Chirp" name="btn" />
                    </div>
                </div>
                <div class="row p-3" id="box">

                </div>
                <div>
                    <div class="modal fade" id="editmodal" tabindex="-1" role="dialog" aria-labelledby="editmodalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="editmodalLabel">New message</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <form>
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Message:</label>
                                            <textarea class="form-control" id="message-text"></textarea>
                                        </div>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" id="edit" class="btn btn-primary" data-dismiss="modal">Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form> 
            </Fragment>
            

        );
    }
}

export default ChirpInfo






























// import React, { Component } from 'react';

// class ChirpForm extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             chirp: ''
//         };
//     }

//     handleInputChange(chirp) {
//         this.setState({ chirp });
//     };

//     render() {
//         return (
//             <form className="card p-3 m-1">
//                 <label
//                     htmlFor="chirp-input"
//                     className="d-block m-2">Create a Chirp:
//                 </label>
//                 <input
//                     value={this.state.chirp}
//                     onChange={(event) => { this.handleInputChange(event.target.value) }}
//                     className="form-control w-70 m-2 d-inline"
//                     placeholder="What's happening?"
//                 />
//                 <button
//                     onClick={() => { this.props.postChirp(this.state.chirp) }}
//                     type="button"
//                     className="btn btn-primary m-2">Post!
//                 </button>
//             </form>
//         );
//     };
// }

// export default ChirpForm;