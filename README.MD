# search-api-client

For setting up this project, you will need `node v16.17.0` or greater.

1. First, run `npm install`, then run `npm run dev`. This will start up the development app at `localhost:5173`.
2. `npm run dev` uses the main .env so be sure to check the `API_URL` variable for the server API.
3. To create a production build and serve it statically from the server, you can run `npm run build` and copy the `./dist` content into the server's `public` folder.
