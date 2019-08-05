const express = require('express');
const app = express();
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const portNumber = process.env.PORT || 3000;
const sourceDir = 'dist';

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(sourceDir));
app.get('/categories', (req, res) => {
  res.send({
    payload: [
      {
        id: 1,
        img_url: 'https://ui-ex.com/images/sale-vector-3.png',
        title: 'Flash Sale',
        desc: '',
      },
      {
        id: 2,
        img_url:
          'https://cdn.iconscout.com/icon/free/png-256/confetti-79-662999.png',
        title: 'New Product',
        desc: '',
      },
      {
        id: 3,
        img_url: 'https://png.pngtree.com/svg/20170218/4b2cce929d.png',
        title: 'Trending Item',
        desc: '',
      },
      {
        id: 4,
        img_url:
          'https://cdn.freebiesupply.com/logos/thumbs/2x/facebook-haha-logo.png',
        title: 'Most Loved',
        desc: '',
      },
      {
        id: 5,
        img_url:
          'https://dumielauxepices.net/sites/default/files/ribbon-clipart-recognition-741073-9777567.png',
        title: 'Findless Pick',
        desc: '',
      },
      {
        id: 6,
        img_url:
          'https://giteinlombardia.it/wp-content/themes/midway-gite/images/icons-diventasocio.png',
        title: 'Discount & Promo',
        desc: '',
      },
    ],
  });
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
