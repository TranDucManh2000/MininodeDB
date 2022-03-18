var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'test'
});
 
connection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("kn thanh cong");
    }
});

module.exports = connection;
 
// connection.query('SELECT * from category2', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
 
// connection.end();