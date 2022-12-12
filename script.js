var database = [
  {
    username: "andrei",
    password: "supersecret",
  },

  {
    username: "maheen",
    password: "mm",
  },
  {
    username: "ingrid",
    password: "777",
  },
]

var newsfeed = [
  {
    username: "bobby",
    timeline: "so tired from all that learning",
  },
  {
    username: "Sally",
    timeline: "javascript is pretty cool",
  },
  {
    username: "Mitch",
    timeline: "javascript is pretty cool",
  },
]
function isUserValid(username, password) {
  for (var i = 0; i < database.length; i++) {
    if (
      database[i].username === username &&
      database[i].password === password
    ) {
      return true
    }
  }
  return false
}
function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed)
  } else {
    alert("sorry, wrong username and password")
  }
}

var userNamePrompt = prompt(" what's your username?")
var passwordPrompt = prompt("what's your password?")

signIn(userNamePrompt, passwordPrompt)
