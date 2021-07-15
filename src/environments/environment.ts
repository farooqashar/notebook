// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const firebaseConfig = {
  apiKey: "AIzaSyDNu1VRpdkwbjyCN0sUQN40vO7nbryLMSU",
  authDomain: "notebook-f9308.firebaseapp.com",
  projectId: "notebook-f9308",
  storageBucket: "notebook-f9308.appspot.com",
  messagingSenderId: "69640801487",
  appId: "1:69640801487:web:9c4992451c550de1587bba"
};

export const environment = {
  production: false,
  firebase: firebaseConfig
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
