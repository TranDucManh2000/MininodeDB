const connection = require('./connection-example');

const express = require('express')
const cors = require('cors') // sql
const app = express()
const port = 3001
// mogan
const morgan = require('morgan')
app.use(morgan('combined')) // sql
app.use(cors())
// lay dl body
bodyParser = require('body-parser');
app.use(bodyParser.json() );
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  connection.query('SELECT * from category2', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  const vl = JSON.stringify(results)
  res.json(results);
  });
})

// app.get('/:id', (req, res) => {
    
//   connection.query(`SELECT * from category2 where Id = ` + req.params.id, function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
//   res.json(results);
//   });
// })

app.delete('/:id', (req, res) => {
    
  connection.query(`delete from category2 where Id = ` + req.params.id, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  res.json(results);
  });
  
})

app.post('/post/', (req, res) => {
  // console.log('body','(req.body.Id,req.body.name)')
  // var sql = 'INSERT INTO category2 (Id, name) VALUES';
  // var values = (`(John ,${req.body.name})`)
  // console.log('cc',sql+values);
  // res.send('')
  connection.query(`INSERT INTO category2 (Id, name) VALUES ('${req.body.Id}','${req.body.name}')`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  res.json(results);
  });
})
app.post('/put/', (req, res) => {
  connection.query(`UPDATE category2 SET name='MMMMMMm' WHERE id=1`, function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  res.json(results);
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
