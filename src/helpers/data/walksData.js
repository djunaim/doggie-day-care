import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getWalks = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/walks.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allWalksObj = result.data;
      const walks = [];
      if (allWalksObj !== null) {
        Object.keys(allWalksObj).forEach((fbId) => {
          const newWalk = allWalksObj[fbId];
          newWalk.id = fbId;
          walks.push(newWalk);
        });
      }
      resolve(walks);
    })
    .catch((error) => reject(error));
});

const getSingleWalk = (walkId) => axios.get(`${baseUrl}/walks/${walkId}.json`);

const addWalks = (walkInfo) => axios.post(`${baseUrl}/walks.json`, walkInfo);

const deleteWalks = (walkId) => axios.delete(`${baseUrl}/walks/${walkId}.json`);


export default {
  getWalks,
  getSingleWalk,
  addWalks,
  deleteWalks,
};
