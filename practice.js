var firebaseConfig = {
    apiKey: "AIzaSyAeTyATyff3ROa19uEXCQVOTslIXewlLUI",
    authDomain: "lets-chat-app-962bc.firebaseapp.com",
    projectId: "lets-chat-app-962bc",
    storageBucket: "lets-chat-app-962bc.appspot.com",
    messagingSenderId: "447800364913",
    appId: "1:447800364913:web:f095d8a5aca4ae671370d0",
    measurementId: "G-170RGNJZ9J"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function adduser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose:"adding user"});
}