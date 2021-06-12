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
    firebase.analytics();

function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
})
localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room Name - " + Room_names);
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+",</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}