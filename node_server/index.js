const express = require('express');
const cors = require('cors');
const app = express();
// const data = require('./data.json');
const data = require('./emoji_data.json');

var result =[];

for(var i in data)
    result.push([i, data [i]]);

// Body parser
app.use(express.json({ extended: true }));
// app.use(cors());


// app.get('/:next?', (req, res) => {
//     console.log(data);
//     var start = req.params.next || 0;
//     console.log(start);
//     res.json(data.splice(start, start + 2));
// });

// app.get('/api', async (req, res) => {
//   const { page = 1 } = req.query;
//   const limit = 5;

//   const dataToSend = data.slice(((page - 1) * limit), limit);

//   const count = data.length;

//   res.json({
//     dataToSend,
//     totalPages: Math.ceil(count / limit),
//     currenPage: Number(page),
//   });

// });



app.get('/api', async (req, res) => {
  const { page = 1 } = req.query;
  const limit = 20;

  var start = (page - 1) * limit;

  const dataToSend = result.slice(start, (start + limit));
  const count = result.length;

  res.json({
    dataToSend,
    totalPages: Math.ceil(count / limit),
    currenPage: Number(page),
  });

});










app.get('/stream', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Transfer-Encoding', 'chunked');
  res.write("USERID,NAME,FBID,ACCOUNT,SUBSCRIPTION,PRICE,STATE,TIMEPERIOD\n");

  // for (var i = 0; i < 100; i++) {
  //     res.write("23,John Doe,1234,500,SUBSCRIPITON,100,ACTIVE,30\n");
  //     new Promise(resolve => setTimeout(resolve, 2000));  
  // }



  sendAndSleep(res, 1);
  // res.end();
});

// app.get('/stream', function (req, res, next) {
//     //when using text/plain it did not stream
//     //without charset=utf-8, it only worked in Chrome, not Firefox
//     res.setHeader('Content-Type', 'text/html; charset=utf-8');
//     res.setHeader('Transfer-Encoding', 'chunked');

//     res.write("Thinking...");
//     sendAndSleep(res, 1);
//   });


var sendAndSleep = function (response, counter) {
  if (counter > 100) {
    response.end();
  } else {
    response.write(" ;i=" + counter);
    counter++;
    setTimeout(function () {
      sendAndSleep(response, counter);
    }, 1000)
  };
};

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server Started at  PORT : ${PORT}`),);