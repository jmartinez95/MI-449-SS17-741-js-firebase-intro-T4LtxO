var config = {
  apiKey: 'AIzaSyAq5ouQ9vXtlzgOCiL1sdmct21qGh6SUlU',
  authDomain: 'woofer-project.firebaseapp.com',
  databaseURL: 'https://woofer-project.firebaseio.com',
  projectId: 'woofer-project',
  storageBucket: 'woofer-project.appspot.com',
  messagingSenderId: '884446666627'
}
firebase.initializeApp(config)

firebase.auth().signInAnonymously()

// CREATE a new woof in Firebase
function createWoofInDatabase (woof) {
  firebase.database().ref('woofs').push({
    created_at: woof['created_at'],
    text: woof['text']
  })
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  firebase.database().ref('woofs')
  .on('child_added', function (newWoofSnapshot) {
    //console.log(newWoofSnapshot.val())
    addWoofRow(newWoofSnapshot.key, newWoofSnapshot.val())
  })
  firebase.database().ref('woofs/')
  .on('child_changed', function (updateWoofSnapshot) {
    //console.log(updateWoofSnapshot.val())
    updateWoofRow(updateWoofSnapshot.key, updateWoofSnapshot.val())
  })
  firebase.database().ref('woofs/')
  .on('child_removed', function (deleteWoofSnapshot) {
    //console.log(deleteWoofSnapshot.val())
    deleteWoofRow(deleteWoofSnapshot.key)
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  firebase.database().ref('woofs').child(woofKey).set({
    created_at: new Date().getTime(),
    text: woofText
  })
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  var Key = woofKey
  firebase.database().ref('woofs/'+Key).remove()
  //deleteWoofRow(Key)
}

// Load all of the data
readWoofsInDatabase()

var woofButton = document.getElementById('woof-button')
woofButton.addEventListener('onclick', function () {
  var woofText = document.getElementById('woof-text').value
  createWoofInDatabase(woofText)
})
