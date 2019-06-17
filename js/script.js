// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBEMsSffsu2_Rex1mKshOIDb-kJYvFqutc",
  authDomain: "farmazon-a2fae.firebaseapp.com",
  databaseURL: "https://farmazon-a2fae.firebaseio.com",
  projectId: "farmazon-a2fae",
  storageBucket: "farmazon-a2fae.appspot.com",
  messagingSenderId: "513177430863",
  appId: "1:513177430863:web:c4e8c4c37d58264b"
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
    document.getElementById("modal-body").innerHTML =
    '<div class="modal-title">\r'+
    '<h2 class="text-center">Grazie per esserti registrato!</h2>\r'+
    '</div>\r'
    ;

    if (inputName.value == "") {inputName.value = "zzdefault";}
    if (inputAddress.value == "") {inputAddress.value = "zzdefault";}
    if (inputEmail.value == "") {inputEmail.value = "zzdefault@zzdefault";}
    var tempo = new Date();
    inputUser.value = inputName.value +"_"+ tempo.getMonth()+ tempo.getDate()+ tempo.getHours()+tempo.getMinutes()+tempo.getSeconds();

    path = "users/"+inputUser.value+"/";

    database.ref(path).set({
      name: inputName.value,
      address: inputAddress.value,
      email: inputEmail.value

    });
    document.getElementById("submitButton").classList.add("hide");
    document.getElementById("exampleModalLabel").innerHTML = "Registrazione completata";
    console.log("submitted");

    setTimeout(function() {
      document.getElementById("submitButton").setAttribute("data-dismiss","modal");
      document.getElementById("exampleModal").classList.remove("show");
    },3000);

  });
