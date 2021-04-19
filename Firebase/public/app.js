document.addEventListener("DOMContentLoaded", event =>{
    const app = firebase.app();
});

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then((result) =>{
            const user = result.user;
            document.write("Hello user!");
            window.location.assign("https://theuselessweb.com/");
            console.log(user);
        })
        .catch(console.log)
}

function microsoft(){
    const provider = new firebase.auth.OAuthProvider('microsoft.com');

    firebase.auth().signInWithPopup(provider)
        .then((result) =>{
            document.write("Hello, user!");
            window.location.assign("https://www.microsoft.com/en-gb");
            console.log(user);
        })
        .catch(console.log)
}

function anonimous(){
    firebase.auth().signInAnonymously()
    .then((result) => {
    document.write("Anonimous, huh?...");
    window.location.assign("https://theuselessweb.com/");
    console.log(user);
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}