const userId = document.getElementById("userId");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const age = document.getElementById("age");
const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const updateBtn = document.getElementById("updateBtn");

const database = new firebase.database();

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //const autoId = database.ref('users').push().key;
      database.ref('/users/' + userId.value).set({
    //database.ref('/users/' + autoId).set({})
        first_name: firstName.value,
        last_name: lastName.value,
        age: age.value
    })
    .then(() => {
        window.alert("Adição sucedida.");
        //window.location.replace("https://theuselessweb.com/");
    })
    .catch(error => {
        console.log(error);
        window.alert("ERRO");
    })
});

updateBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const newData = {
        first_name : firstName.value,
        last_name : lastName.value,
        age: age.value
    }
    
    database.ref('users').child(userId.value).update(newData)
    .then(() => {
        window.alert("Update realizado.");
    })
    .catch(error => {
        console.log(error);
        window.alert("ERRO");
    })
});

removeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    database.ref('users').child(userId.value).remove()
    .then(() => {
        window.alert("Remoção realizada.");
    })
    .catch(error => {
        console.log(error);
        window.alert("ERRO");
    })
});

database.ref('users').on('value', snapshot => {
    console.log("Houve uma mudança nos dados.");
    console.log("Novo dado: "+snapshot.val());
});

database.ref('users').orderByKey().on('value', snapshot =>{
    console.log(snapshot.val());
});