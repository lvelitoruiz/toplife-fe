import axios from "axios";
import React from "react";
import { backendUrl } from "../consts";

const postFunctions = async (data: any) => {
    const headers = {
        'Content-Type': 'application/json',
      }

  await axios
    .post(backendUrl + "reclamations", data, { headers: headers})
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
};

export default postFunctions;
