import React from 'react'

const Chirps = (props) => {
    return ( 
        <div class="col"><div class="card m-auto text-center mt-5" style="width: 230px" id="${id}">
            <h5 class="card-header">New Chirp</h5>
            <div class="card-body">
                <h5 class="card-title" id="user${id}">{props.user}</h5>
                <p class="card-text" id="text${id}">{props.text}</p>
                <a href="#" id="btndelete${id}" class="btndelete btn btn-danger">goodbye</a>
                <button type="button" class="btn btn-primary" id="editmodal${id}" data-toggle="modal" data-target="#editmodal" data-whatever="${id}">edit</button>
            </div>
        </div></div>
    )
}

export default Chirps
























// import React from 'react';

// const Chirp = (props) => {
//     return (
//         <div className="card m-1">
//             <div className="card-body text-left">
//                 <p className="card-text">
//                     {props.text}
//                 </p>
//             </div>
//         </div>
//     );
// };

// export default Chirp;