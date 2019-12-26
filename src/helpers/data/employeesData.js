import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getEmployees = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/employees.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allEmployeesObj = result.data;
      const employees = [];
      if (allEmployeesObj !== null) {
        Object.keys(allEmployeesObj).forEach((fbId) => {
          const newEmployee = allEmployeesObj[fbId];
          newEmployee.id = fbId;
          employees.push(newEmployee);
        });
      }
      resolve(employees);
    })
    .catch((error) => reject(error));
});

export default { getEmployees };
