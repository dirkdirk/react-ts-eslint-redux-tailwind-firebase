# About this Project

React-TS-ESLint-Redux-Tailwind-Firebase is a template to quickly start a React app with ... it's all in the name:

### Packages

React 17
Router 6
TypeScript 4.6 - with various type libraries
ESLint 8.15 - with several plugins
React-Redux 8.0 - with Toolkit 1.8
Tailwind 3 - with Tailwind forms

### Firebase 9

- Authentication
- Login - email/password and Google
- Hosting
- Realtime database
- Set up locked down for devs only (see Setup below)

### Other packages:

- React Icons 4.3
- React Tooltip 4.23

See package.json for complete details.

This template has a basic header body footer layout and also includes a light/dark theme changer.

# Setup

### 1. Repo or download this project to your machine.

- Rename the folder to your app's name.
- Remember to git your own versions from here forward!

### 2. Setup Firebase

- Create a project at Firebase with hosting and realtime database.

### 3. Install dependencies and init firebase.

- At the command line:
  `npm install`
  `npm install firebase`
  `firebase init`
  Select Hosting, Realtime database.
  Use an existing project.
  Use database.rules.json but do not overwrite it.
  File name for hosting is: `build`

### 4. Add your Firebase credentials to the app.

- Create a file: `src/firebaseInit.js` and update it with your Firebase keys as copied from your Firebase console as below:

```
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: ,
  AND OTHER VALUES FROM FIREBASE
};

initializeApp(firebaseConfig);
```

### 5. Enable sign-in providers at Firebase.

- Turn on Email/Password and Google as Sign-In providers at:
  Authentication > Sign-in method > Sign-in providers

### 6. Set up locked down for devs only.

(Skip this step and modify `database.rules.json` to not lock down or unlock for production.)

- Start the local dev server: `npm start`
- Log in. This will create an Authentication User with an id.
- Copy your user id from: Firebase Console > Authentication > Users
- Go to: Firebase Console > Realtime Database > Data
- Create an "admins" node.
- Create a node in "admins" with your id as the `key` and `true` as the value.
- Either publish your app to Firebase hosting (see below) or make sure your database rules as like the ones in `firebase.rules.json` by:
  - Copy the content of `firebase.rules.json`.
  - Go to Firebase Console > Realtime Database > Rules
  - Delete the rules and paste the new rules.
  - Click on `Publish`.

### 7. Final step! Populate Realtime database with default user settings:

- Log out and back in at your dev servers page. Most likely: `localhost:3000`.
- This final step is only required when setting up new devs. Remember to add dev's ids to the "Admins" node in the Realtime Database first.

## Start Reacting!

Obviously update: `public/index.html`
Also the favicons and logo.jpg in: `src/assets`

- I like [Favic-o-matic](https://favicomatic.com) to generate all the favicons and code.

Set your base colors in: `tailwind.config.js`
Go through the rest of the code base and build you app.

&nbsp;

# Build, Publish and Production Version

### Build your react app

At the command prompt: `npm run build`

### Publish to firebase

At the command prompt: `firebase deploy`

### Production Version

Remember to change your database rules to allow registered users (and not only `admins`) to access the database.

&nbsp;

---

---

&nbsp;

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

No tests are written for the template. Add them if you need them.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
