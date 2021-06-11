import axios from 'axios';

const exportedObject = {
    getEmployeeList: () => {
        return axios.get('https://randomuser.me/api/?results=50&nat=us')
    }
};

export default exportedObject;











