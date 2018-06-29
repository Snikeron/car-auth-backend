# Car-Auth Backend
Practicing Express server and JWT authentication/authorization

## Installation
1. clone this repo (backend)
2. clone the [front-end repo](https://github.com/Snikeron/car-auth-frontend)
3. In car-auth-backend, run 'npm install'
4. In car-auth-frontend, run 'yarn install'

## Running
1. BACKEND: run 'npm run dev' (will run on localhost:3000)
2. FRONTEND: run 'yarn start' (will most likely run on localhost:3001)

## Notes
1. The hardcoded login details are:
    - email: test1@mail.com
    - password: password123
2. Experimenting with JWTs:
    1. In Chrome dev-tools, you can check that the token is being saved to browser local-storage
        1. Dev-Tools > Application > Storage > Local Storage
    2. The code logs the token sent back by the express server on successful authentication
    3. Play around with changing the login details and observe the errors provided
3. In index.js, cors options must be configured to EXPOSE the "Authorization" header
4. Contains a rough mongoose connection template for seeding to MongoDB Atlas -- will be updated as the lesson continues!