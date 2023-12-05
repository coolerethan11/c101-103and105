// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyAB7nLjl0Jp6W0WtZWHWdefX8_AQf9BBfQ",
    authDomain: "c100-103.firebaseapp.com",
    projectId: "c100-103",
    storageBucket: "c100-103.appspot.com",
    messagingSenderId: "129668187475",
    appId: "1:129668187475:web:6f9c642198304a073f8da6",
    measurementId: "G-J1NE7YW0WE"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;

    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
}



