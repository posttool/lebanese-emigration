const firebaseConfig = {
    apiKey: "AIzaSyDjyUtq9b6SCfaDZfEWBSFlW06O3ZokxPw",
    authDomain: "lebanese-emigration.firebaseapp.com",
    databaseURL: "https://lebanese-emigration-default-rtdb.firebaseio.com",
    projectId: "lebanese-emigration",
    storageBucket: "lebanese-emigration.appspot.com",
    messagingSenderId: "24983920236",
    appId: "1:24983920236:web:1432e11ae40090974dc249",
    measurementId: "G-2R94KMZ3MF"
  };

  export function getFirebaseConfig() {
    if (!firebaseConfig || !firebaseConfig.apiKey) {
      throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
    } else {
      return firebaseConfig;
    }
  }