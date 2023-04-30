// import React from 'react';

// import { API } from '../config/Constant'

export let apiAction = {};

apiAction.setCSRFToken = () => {
	const token = Math.random().toString(36).substring(2);
	document.cookie = `CSRF-Token=${token};`;
	return token;
};


apiAction.handleErrorResponse = (error) => {
    console.error('apiAction error', error);

	// Log the error on external service, if used
    let errStr = error.toString();
    console.log('Error: ', errStr);
};

apiAction.validateResponse = (response) => {
	if (!response) {
		throw new Error('No response');
	}
	if (response.error) {
		throw new Error(response.error);
	}
	return response;
};
