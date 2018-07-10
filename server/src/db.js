const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'innovatebham',
    database: 'Chirpr_full'
});

connection.connect()
let getUsers = () => {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM users", (err, results) => {
        if (err) {
          reject();
          connection.end();
          return console.log( err);
        }
        console.log(results)
        resolve(results);
      });
    });
  };
  let getUser = (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM users u WHERE u.id = ${id}`, (err, results,) => {
        if (err) {
          reject();
          connection.end();
          return console.log(err);
        }
        resolve(results);
  
      });
    });
  };
  
  let deleteUser = (id) => {
      console.log('removed')
    return new Promise((resolve, reject) => {
      connection.query(`DELETE FROM users WHERE userid = ${id};`, (err, results,) => {
        if (err) {
          reject();
          connection.end();
          return console.log(err);
        }
        resolve(results);
  
      });
    });
  };
  
  let updateUser = (id) => {
    console.log('working')
    return new Promise((resolve, reject) => {
        console.log(id)
      connection.query(`CALL spUpdateUsers(${id}, 'hello@gmail.com', null)`, (err, results,) => {
        if (err) {
            console.log(err)
          reject();
        //   connection.end();
          return console.log(err);
        }
        resolve();
  
      });
    });
  };
  
  let createUser = (userid, text, location) => {
    return new Promise((resolve, reject) => {
      connection.query(`insert into chirps (userid, text, location) values (${userid}, "${text}", "${location}");`, (err, results,) => {
        if (err) {
          reject();
          connection.end();
          return console.log(err);
        }
       
        resolve(results);
  
      });
    });
  };
  
   module.exports = {
    CreateUser: createUser,
    DeleteUser: deleteUser,
    GetUsers: getUsers,
    GetUser: getUser,
    UpdateUsers: updateUser,
  };
  
  
  
  
  
  

























//   let getMentions = (userid) => {
//     return new Promise((resolve, reject) => {
//       connection.query(`call spUserMentions(${userid})`, (err, results,) => {
//         if (err) {
//           reject();
//           connection.end();
//           return console.log(err);
//         }
//         resolve(results);
  
//       });
//     });
//   };
  
  
  
  
  
  
//   let checkMentions = (text, userid) => {
//     return new Promise((resolve, reject) => {
//       connection.query(`select * from chirps where userid = ${userid} and text = '${text}'`, (err, results, field) => {
//         if (err) {
//           reject();
//           connection.end();
//           return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
//         } else {
//           console.log('Checking for Mentions...',)
//           console.log(, results[0].text,);
//           let str = results[0].text.split(" ");
//           console.log( str);
//           let index;
//           for (let i = 0; i < str.length; i++) {
//             let check = str[i].includes('@');
//             if (check === true) {
//               index = i;
//             };
//           };
//           console.log(index);
//           let chirpid = results[0].id;
//           console.log(chirpid);
        
  
//           if (userHandle) {
//             prepareMentions(userHandle, chirpid)
//             console.log('\x1b[32m', '(>^.^)> Mention Found. Passing params to PrepareMention()', '\x1b[0m', '\n')
//           } else {
//             console.log('\x1b[32m', '(>^.^)> No Mention Found.', '\x1b[0m', '\n')
//           }
  
//           resolve();
//         };
//       });
//     });
//   };
  
  
  
  
  
  
//   let prepareMentions = (userHandle, chirpid) => {
//     return new Promise((resolve, reject) => {
//       connection.query(`SELECT * FROM users WHERE handle = '${userHandle}'`, (err, results, field) => {
//         if (err) {
//           reject();
//           connection.end();
//           return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
//         }
//         console.log('\x1b[32m', '(>^.^)> Preparing Mentions...', '\x1b[0m');
//         console.log('\x1b[32m', '(>^.^)> 1. results = ', results, '\x1b[0m');
//         if (results[0].id) {
//           console.log('\x1b[32m', '(>^.^)> User Found. Passing params to CreateMention().', '\x1b[0m', '\n');
//           createMention(results[0].id, chirpid)
//         } else {
//           console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", "User not found in database.", "\x1b[0m", '\n');
//         }
//         resolve();
//       });
//     });
//   };
  
  
  
  
  
  
//   let createMention = (userid, chirpid) => {
//     return new Promise((resolve, reject) => {
//       connection.query(`insert into mentions (userid, chirpid) values (${userid}, '${chirpid}');`, (err, results, field) => {
//         if (err) {
//           reject();
//           connection.end();
//           return console.log("\x1b[31m", "¯l_(ツ)_/¯ err: ", err, "\x1b[0m");
//         }
//         console.log('\x1b[32m', '(>^.^)> Creating Mention...', '\x1b[0m');
//         console.log('\x1b[32m', '(>^.^)> 1. chirpid = ', chirpid, '\x1b[0m');
//         console.log('\x1b[32m', '(>^.^)> 2. userid = ', userid, '\x1b[0m');
//         console.log('\x1b[32m', '(>^.^)> Mention Created.', '\x1b[0m', '\n')
  
//         resolve(results);
  
//       });
//     });
//   };
  
  
  
  
  
 