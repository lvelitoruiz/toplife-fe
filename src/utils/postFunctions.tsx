import axios from "axios";
import React from "react";

const postFunctions = async (data: any) => {
    const headers = {
        'Content-Type': 'application/json',
      }

  await axios
    .post("https://top-life-backend-805c2a56b99a.herokuapp.com/api/reclamations", data, { headers: headers})
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export default postFunctions;
