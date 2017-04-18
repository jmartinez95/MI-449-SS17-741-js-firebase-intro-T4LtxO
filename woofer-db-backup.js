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
  var woofAdd = firebase.database().ref('woofs').push({
    woof
  })
  console.log(woofAdd)
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  var div = document.getElementById('woofs')
  div.innerHTML = ''
  firebase.database().ref('woofs')
  .on('value', function (allWoofsSnapshot) {
    //console.log(allWoofsSnapshot.val())
    createWoof()
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  firebase.database().ref('woofs/'+woofkey).remove()
  readWoofsInDatabase()
}

// Load all of the data
readWoofsInDatabase()

var woofButton = document.getElementById('woof-button')
woofButton.addEventListener('onclick', function () {
  var woofText = document.getElementById('woof-text').value
  createWoofInDatabase(woofText)
})


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
  readWoofsInDatabase()
}

function addWolfToDiv (woofkey, woof) {
  // console.log(woofkey)
  var div = document.getElementById('woofs')
  div.innerHTML += '<div class="row" id="' + woofkey + '">' +
        '<span class="pull-right">' +
          '<button type="button" class="close btn-delete" aria-label="Delete">' +
            '<small><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></small>' +
          '</button>' +
          '<button type="button" class="close btn-edit" aria-label="Edit">' +
            '<small><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></small>' +
          '</button>' +
        '</span>' +
        '<span class="woof">' +
          '<div class="text show">' + woof['text'] + '</div>' +
          '<div class="hidden">' +
            '<input type="text" class="form-control">' +
            '<small>Press Enter to save or Escape to cancel.</small>' +
          '</div>' +
          '<span class="created-at">' + woof['created_at'] + '</span>' +
        '</span>' +
      '</div>'
}

// READ from Firebase when woofs are added, changed, or removed
// Call addWoofRow, updateWoofRow, and deleteWoofRow to update the page
function readWoofsInDatabase () {
  var div = document.getElementById('woofs')
  div.innerHTML = ''
  firebase.database().ref('woofs')
  .on('value', function (allWoofsSnapshot) {
    //console.log(allWoofsSnapshot.val())
    for (var object in allWoofsSnapshot.val()) {
      addWolfToDiv(object, allWoofsSnapshot.val()[object])
    }
  })
}

// UPDATE the woof in Firebase
function updateWoofInDatabase (woofKey, woofText) {
  // TODO update the record in Firebase
}

// DELETE the woof from Firebase
function deleteWoofFromDatabase (woofKey) {
  firebase.database().ref('woofs/'+woofkey).remove()
  readWoofsInDatabase()
}

// Load all of the data
readWoofsInDatabase()

var woofButton = document.getElementById('woof-button')
woofButton.addEventListener('onclick', function () {
  var woofText = document.getElementById('woof-text').value
  createWoofInDatabase(woofText)
})

var editButton = document.getElementById('')
