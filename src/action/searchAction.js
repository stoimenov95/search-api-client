// import React from 'react'
import { API } from "../config/constant";
import { apiAction } from "./apiAction";

export let searchAction = {};

searchAction.search = (keyword) => {
    console.log(API.API_URL);
	return fetch(`${API.API_URL}/search?searchParam=${keyword}`, {
        credentials: 'same-origin',
        headers: {
            'X-CSRF-TOKEN': document.cookie,
            'Content-Type': 'application/json'
        },
        method: 'GET',
    })
		.then(response => response.json())
        .then(response => apiAction.validateResponse(response))
        .then(response => {

            return response;
        })
        .catch(error => apiAction.handleErrorResponse(error));
};