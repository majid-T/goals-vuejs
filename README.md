# goals-vuejs

This is sample project to add/delete goals to e mongoDb back end using Vue.js as front end. We will be using Express to expose endpoints and communicate by HTTP REST API protocol.

 <div align="center" >
      <img
        src="./screenShot.gif"
        alt="screenShot"
        width="75%"
        height="75%"
      />
  </div>

### Technologies and tools used in this project

- [MongoDB-Atlas](https://www.mongodb.com/cloud/atlas) - Cloud noSQL document based DB
- [Express.js](http://expressjs.com/) - Web application framework for handling REST requests and responses
- [Vue.js](https://vuejs.org/) - Frontend javascript framework
- [NodeJs](https://nodejs.org/) - Javascript runtime environment
- [axios](https://www.npmjs.com/package/axios) For sending different HTTP method requests
- [Font awsome](https://fontawesome.com/) - CDN for Online icons and fonts
- [config](https://www.npmjs.com/package/config) - Node-config organizes hierarchical configurations for your app deployments

### To run this project

1. git clone this repo

```
git clone https://github.com/majid-T/goals-vuejs.git
```

1. Cd to server folder, npm install to get dependencies and run the backend dev server

```
cd server
npm install
npm run dev
```

1. Open new terminal and cd to client folder, npm install to get dependencies and run the front end dev server

```
cd client
npm install
npm run serve
```

1. Important note. I am using config to keep my mongoDb URI which will be missing form this code for you. YOu need to add your own mongoDB URI. to do that make a config folder in your root directory, then create a default.json file like example below.

```
{
  "mongoURI": "YOUR OWN MONGODB URI"
}

```
