import sendRequest from './send-request';


const petfinder = require('@petfinder/petfinder-js');

const apiKey = process.env.PETFINDER_API_KEY;
const apiSecret =process.env.PETFINDER_API_SECRET

const client = new petfinder.Client({ apiKey: apiKey, secret: apiSecret });


export const fetchCatsByZipCode = zipCode => {
  return sendRequest(`/api/petfinder/cats?zipCode=${zipCode}`);
};

export const fetchPetfinderToken = async () => {
  const response = await sendRequest('/api/petfinder/getToken');
  return response.token;
};