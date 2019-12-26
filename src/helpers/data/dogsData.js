import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getDogs = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/dogs.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allDogsObj = result.data;
      const dogs = [];
      if (allDogsObj !== null) {
        Object.keys(allDogsObj).forEach((fbId) => {
          const newDog = allDogsObj[fbId];
          newDog.id = fbId;
          dogs.push(newDog);
        });
      }
      resolve(dogs);
    })
    .catch((error) => reject(error));
});

export default { getDogs };
