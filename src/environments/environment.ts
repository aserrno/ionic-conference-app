// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAplkw_78u7118bU-LyjwoU4YThDTMuDhc",
    authDomain: "skinart-e9d40.firebaseapp.com",
    databaseURL: "https://skinart-e9d40.firebaseio.com",
    projectId: "skinart-e9d40",
    storageBucket: "skinart-e9d40.appspot.com",
    messagingSenderId: "536040505334",
    appId: "1:536040505334:web:7db80dfa07df0dd01fd1d7",
    measurementId: "G-1LCGXCSBYW"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
