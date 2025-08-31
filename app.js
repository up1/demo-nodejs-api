const express = require('express');
const app = express();

app.get('/products/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (id === 1) {
    return res.status(200).json({
      id: 1,
      name: 'product 01',
      price: 100.50
    });
  } else if (id === 2) {
    return res.status(404).json({
      message: 'Product is=2 not found in system'
    });
  } else if (id === 3) {
    return res.status(500).json({
      message: 'System error'
    });
  } else {
    return res.status(404).json({
      message: `Product is=${id} not found in system`
    });
  }
});

module.exports = app;
