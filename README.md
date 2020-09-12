# Goals-vuejs

This is sample project to add/delete goals to a mongoDb back end using Vue.js as front end. We will be using Express to expose endpoints and communicate by HTTP REST API protocol.

 <div align="center" >
      <img
        src="./screenShot.gif"
        alt="screenShot"
        width="80%"
        height="80%"
      />
  </div>

### Technologies and tools used in this project

- [MongoDB-Atlas](https://www.mongodb.com/cloud/atlas) - Cloud noSQL document based DB
- [Express.js](http://expressjs.com/) - Web application framework for handling REST requests and responses
- [Vue.js](https://vuejs.org/) - Frontend javascript framework
- [NodeJs](https://nodejs.org/) - Javascript runtime environment
- [axios](https://www.npmjs.com/package/axios) For sending different HTTP method requests
- [Font awsome](https://fontawesome.com/) - CDN for Online icons and fonts
- [Config](https://www.npmjs.com/package/config) - Node-config organizes hierarchical configurations for your app deployments

### exposed REST API endpoints details:

| HTTP Method | path           | input        | output                        |
| ----------- | -------------- | ------------ | ----------------------------- |
| + GET       | /api/goals     | N/A          | retrun all goals as json List |
| + POST      | /api/goals     | goal(string) | create a new goal             |
| + PUT       | /api/goals/:id | id(int)      | deletes a goal from database  |

### To run this project

- git clone this repo

```
git clone https://github.com/majid-T/goals-vuejs.git
```

- Cd to server folder, npm install to get dependencies and run the backend dev server and keep it running

```
cd server
npm install
npm run dev
```

- Open new terminal and cd to client folder, npm install to get dependencies and run the front end dev server and keep it running

```
cd client
npm install
npm run serve
```

- Important note. I am using config to keep my mongoDb URI which will be missing form this code for you. You need to add your own mongoDB URI. To do that make a config folder in your root directory, then create a default.json file like example below.

```
{
  "mongoURI": "YOUR OWN MONGODB URI"
}
```
