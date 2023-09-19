const express = require('express');
const router = express.Router();
const petfinder = require('@petfinder/petfinder-js');

const apiKey = process.env.PETFINDER_API_KEY;
const apiSecret = process.env.PETFINDER_API_SECRET;
const client = new petfinder.Client({ apiKey: apiKey, secret: apiSecret })



router.post('/cats', async (req, res) => {
  const zipCode = req.query.zipCode;

  try {
    // Use the Petfinder SDK to fetch cats based on the zipCode
    client.animal.search({
      type: 'cat',
      location: zipCode
    })
    .then(function(response) {
      res.send(response.data);
    })
    .catch(function(error) {
      console.error('Error fetching cats:', error);
      res.status(500).send({ message: 'Failed to fetch cats.' });
    });
  } catch (error) {
    console.error('Error fetching cats:', error);
    res.status(500).send({ message: 'Failed to fetch cats.' });
  }
});

module.exports = router;




