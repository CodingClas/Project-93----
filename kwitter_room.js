// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC1X4sAssbnDRTerSX62tV8NpZG0KTbamo",
  authDomain: "project-93-d9dc7.firebaseapp.com",
  databaseURL: "https://project-93-d9dc7-default-rtdb.firebaseio.com",
  projectId: "project-93-d9dc7",
  storageBucket: "project-93-d9dc7.appspot.com",
  messagingSenderId: "737918583673",
  appId: "1:737918583673:web:eb70897e84703abb83a5a8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();
