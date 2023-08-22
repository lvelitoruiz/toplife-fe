import axios from "axios";
import React from "react";

const queryFunctions = async (urlQuery: string, params?: any) => {
  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: urlQuery + "?populate=*",
    headers: {},
  };

  let data: any;
  await axios
    .request(config)
    .then((response: any) => {
      data = JSON.stringify(response.data);
    })
    .catch((error: any) => {
      console.log(error);
    });

  return data;
};

export default queryFunctions;
