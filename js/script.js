// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyArrRzKTRgXkLeVb1PIf09tNesAfB7PCL8",
    authDomain: "draggable-9f92b.firebaseapp.com",
    databaseURL: "https://draggable-9f92b.firebaseio.com",
    projectId: "draggable-9f92b",
    storageBucket: "draggable-9f92b.appspot.com",
    messagingSenderId: "1010593277055",
    appId: "1:1010593277055:web:1b729dc7368b8f6f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  database = firebase.database();

  var ref = database.ref('aaa' );
  console.log(ref.on);

  var inputUser = {value: "zzdefault"};
  const inputName = document.getElementById("inputName");
  const inputAddress = document.getElementById("inputAddress");
  const inputEmail = document.getElementById("inputEmail");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", e => {
    if (inputName.value == "") {inputName.value = "zzdefault";}
    if (inputAddress.value == "") {inputAddress.value = "zzdefault";}
    if (inputEmail.value == "") {inputEmail.value = "zzdefault@zzdefault";}
    var tempo = new Date();
    inputUser.value = inputName.value +"_"+ tempo.getMonth()+ tempo.getDate()+ tempo.getHours()+tempo.getMinutes()+tempo.getSeconds();

    path = "users/"+inputUser.value+"/";

    database.ref(path).set({
      name: inputName.value,
      name: inputAddress.value,
      email: inputEmail.value

    });
    console.log("submitted");
  });
