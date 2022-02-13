const app = require('express')();

app.get('/', async (req, res) => {
  res.send('hello');
});

app.listen(80, () => console.log('server started!'));
