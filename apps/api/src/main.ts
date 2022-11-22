/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as path from 'path';

import { ApiResponse, API_URL } from '@integrated-poc1/api-interface';

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

const response: ApiResponse[] = [
  {
     "id": 1,
     "title": "Broadband Deals",
     "price": 109.95,
     "description": "Learn more about Broadband Deals",
     "category": "telecom",
     "image": "/assets/Broadband_1.jpeg",
     "rating": {
        "rate": 3.9,
        "count": 120
     }
  },
  {
     "id": 2,
     "title": "Broadband & Phone",
     "price": 22.3,
     "description": "Learn more about Broadband & Phone Deals",
     "category": "men's clothing",
     "image": "/assets/Broadband and phone.png",
     "rating": {
        "rate": 4.1,
        "count": 259
     }
  },
  {
     "id": 3,
     "title": "Home Landline",
     "price": 55.99,
     "description": "Learn more about Home Phone Deals",
     "category": "men's clothing",
     "image": "/assets/Landline.jpeg",
     "rating": {
        "rate": 4.7,
        "count": 500
     }
  }];

app.get(API_URL, (req, res) => {
  res.send(response);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
