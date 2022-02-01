var firebaseConfig = {
    apiKey: "AIzaSyC9Tkc9SGC_Kt8vCjLM857e5PaYsdICPhY",
    authDomain: "project---94-79173.firebaseapp.com",
    projectId: "project---94-79173",
    storageBucket: "project---94-79173.appspot.com",
    messagingSenderId: "25809030869",
    appId: "1:25809030869:web:36c4634e31b200917d5c5c"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

 function addRoom()
 {
     user_name = document.getElementById("user_room").value;
     firebase.database().ref("/").room(user_room).update({
         purpose : "adding room"
     });
 }