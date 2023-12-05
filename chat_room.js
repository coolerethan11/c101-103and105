const firebaseConfig = {
    apiKey: "AIzaSyByYMQu-tR0XJ4YZNKyrItvmH7FzGyjHpQ",
    authDomain: "c100kwitter.firebaseapp.com",
    databaseURL: "https://c100kwitter-default-rtdb.firebaseio.com",
    projectId: "c100kwitter",
    storageBucket: "c100kwitter.appspot.com",
    messagingSenderId: "765868407153",
    appId: "1:765868407153:web:1a5b3cc16211a53af4ded0"
  };

    firebase.initializeApp(firebaseConfig);
    
user_name = document.getElementById("user_name").value;

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "chat_room.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
   document.getElementById("output").innerHTML += row;
   });});}
getData();