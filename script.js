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
  const inputSurname = document.getElementById("inputSurname");
  const inputEmail = document.getElementById("inputEmail");
  const inputAddress = document.getElementById("inputAddress");
  const inputCity = document.getElementById("inputCity");
  const inputZip = document.getElementById("inputZip");
  const inputPhone = document.getElementById("inputPhone");
  const submitButton = document.getElementById("submitButton");

  submitButton.addEventListener("click", e => {
    if (inputName.value == "") {inputName.value = "zzdefault";}
    if (inputSurname.value == "") {inputSurname.value = "zzdefault";}
    if (inputEmail.value == "") {inputEmail.value = "zzdefault@zzdefault";}
    if (inputAddress.value == "") {inputAddress.value = "zzdefault";}
    if (inputCity.value == "") {inputCity.value = "zzdefault";}
    if (inputZip.value == "") {inputZip.value = "zzdefault";}
    if (inputPhone.value == "") {inputPhone.value = "zzdefault";}
    if (submitButton.value == "") {submitButton.value = "zzdefault";}
    var tempo = new Date();
    inputUser.value = inputSurname.value +"_"+ inputName.value +"_"+ tempo.getMonth()+ tempo.getDate()+ tempo.getHours()+tempo.getMinutes()+tempo.getSeconds();

    path = "users/"+inputUser.value+"/";

    database.ref(path).set({
      name: inputName.value,
      surname: inputSurname.value,
      email: inputEmail.value,
      address: inputAddress.value,
      surname: inputSurname.value,
      city: inputCity.value,
      zip: inputZip.value,
      phone: inputPhone.value

    });
    alert("submitted");
  });
