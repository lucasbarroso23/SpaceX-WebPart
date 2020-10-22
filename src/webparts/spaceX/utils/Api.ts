import axios from "axios";

const apiCall = (reactHandler) => {
  axios
    .get(`https://api.spacexdata.com/v3/ships`)
    .then((response) => {
      // handle success
      reactHandler.setState({
        items: response.data,
      });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

const apiNameCall = (reactHandler, query) => {
  axios
    .get(`https://api.spacexdata.com/v3/ships?ship_name=${query}`)
    .then((response) => {
      // handle success
      reactHandler.setState({
        items: response.data,
      });
    })
    .catch((error) => {
      // handle error
      console.log(error);
    });
};

export default { apiCall, apiNameCall };
