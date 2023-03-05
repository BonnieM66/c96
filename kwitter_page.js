const firebaseConfig = {
      apiKey: "AIzaSyBQCtTREniY8u9RCIoGEB2_mhQBWWHN_FM",
      authDomain: "kwitter-fc1be.firebaseapp.com",
      databaseURL: "https://kwitter-fc1be-default-rtdb.firebaseio.com",
      projectId: "kwitter-fc1be",
      storageBucket: "kwitter-fc1be.appspot.com",
      messagingSenderId: "212532085778",
      appId: "1:212532085778:web:d557619d8ee515c84c44cb",
      measurementId: "G-59FF9M5M2Q"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    //const analytics = getAnalytics(app);
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();


function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}