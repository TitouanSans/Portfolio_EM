
import config from './config.js';

let database = firebase.database();

firebase.initializeApp(config);

$('#loginForm').on('submit', emailPasswordLogin)
$('#formulaire').on('submit', writeUserData)

function emailPasswordLogin() {
  event.preventDefault();
  
  const email = $('#emailField').val();
  const password = $('#passwordField').val();
  
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(function(result){
    
    console.log('ok');
    $("#loginForm").addClass('d-none');
    $("#formulaire").removeClass('d-none');
    
  }).catch(function(error) {
      console.log('entrée invalide');
    });

}

function writeUserData(userId, name, email, imageUrl) {
  database.ref('messages/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

