let circle = document.querySelectorAll(".circle");
let taskPC = document.querySelector(".task-pc");
let taskUser = document.querySelector(".task-user");
let userName = document.querySelector(".user-name");
let userNameEdit = document.querySelector(".user-name-edit");
let balance = document.querySelector(".balance");
let timerSec = document.querySelector(".timer-sec");
let timer = document.querySelector(".timer-time");
let editImg = 'pen'

// - - - - - - - - - - - -
let minNumber = 1
let maxNumber = 1250

let levels = [
  "super easy level",
  "easy level",
  "normal level",
  "hard level",
  "super hard level",
]
// - - - - - - - - - - - -


let level = +localStorage.getItem ('level')
$ ('.range').val(level)

if ($('.range').val() == '1') {
  $ ('.user-status').text( levels[0]  )
  minNumber = 1
  maxNumber = 1000
}
if ($('.range').val() == '2') {
  $ ('.user-status').text( levels[1]  )
  minNumber = 1000
  maxNumber = 2500

}
if ($('.range').val() == '3') {
  $ ('.user-status').text( levels[2]  )
  minNumber = 2500
  maxNumber = 5000
}
if ($('.range').val() == '4') {
  $ ('.user-status').text( levels[3]  )
  minNumber = 5000
  maxNumber = 7500
}
if ($('.range').val() == '5') {
  $ ('.user-status').text( levels[4]  )
  minNumber = 7500
  maxNumber = 10000
}



let sec = +timerSec.textContent

setInterval(
  
  function () {
    sec--
    timerSec.textContent = sec;
    if (sec == 45) {
      timer.style.background = 'yellow'
    }
    if (sec == 30) {
      timer.style.background = 'orange'
    }
    if (sec == 10) {
      timer.style.background = 'red'
    }
    if (sec == 0) {
      youLose()
    }
  },
  1000

)

if (localStorage.getItem("money") == null) {
    localStorage.setItem("money", 100);
} 
if (localStorage.getItem("name") == null) {
  localStorage.setItem("name", 'Taras Bulba');
} 
let name = localStorage.getItem("name");
userName.textContent = name;

let money = localStorage.getItem("money");
balance.textContent = money;

userNameEdit.addEventListener('click', function () {
  if (editImg == 'pen') {
    editImg = "save";
    userNameEdit.src =     "./assets/img/" + editImg + ".svg";
    userName.contentEditable = true;
    userName.focus()
  }
  else {
     editImg = "pen";
     userNameEdit.src = "./assets/img/" + editImg + ".svg";
     userName.contentEditable = false;
     localStorage.setItem('name', userName.textContent)
  }

})

function getRandomNumber() {
    let randomNumber = ((Math.random()*(maxNumber-minNumber)) + minNumber).toFixed(0)
    return randomNumber;



}
function showRandomNumber() {
  taskPC.textContent = getRandomNumber();
}

showRandomNumber();

function changeBalance (sign, number) {
    let money = +localStorage.getItem("money");

    if (sign == '+') {
        money += number;
        
    }
    else if (sign == '-') {
        money -= number;
    }

    localStorage.setItem("money", money);
    balance.textContent = money;
}


function moveElement(el) {
  let width = el.offsetWidth;
  let height = el.offsetHeight;
  let maxX = window.innerWidth - width -100;
  let maxY = window.innerHeight - height;
  let posX = ((Math.random() * maxX) / window.innerWidth * 100).toFixed(2) + '%';
  let posY = ((Math.random() * maxY) / window.innerHeight * 100).toFixed(2) + '%';
  el.style.position = 'absolute';
  el.style.top = posY;
  el.style.left = posX;
}




let colors = ['red', 'yellow', 'pink', 'purple', 
'green', 'lime', 'white', 'orange', 'darkred', 'grey', 'skyblue',
'aqua', 'biuge'
]

function changeColorElement(el) {
  let n = +(Math.random() * (colors.length - 1)).toFixed(0);
  
  el.style.background = colors[n];
}

function checkUserNumber(number) {
  if (number == +taskPC.textContent) {
    changeBalance('+', 50);
    alert('You win')
    window.location.reload();
    
  }
  else if (number > +taskPC.textContent) {
    youLose()
  }
  
}



function youLose() {
  changeBalance("-", 20);
    alert('You lose')
    window.location.reload();
}

function addNumberToUser(number) {
    taskUser.textContent = +taskUser.textContent + number;
    checkUserNumber(+taskUser.textContent);
}
for (let i = 0; i < circle.length; i++) {
    moveElement(circle[i])
    changeColorElement(circle[i])
    circle[i].addEventListener('click', () => {moveElement(circle[i]);}  )
    circle[i].addEventListener('click', () => {changeColorElement(circle[i]);}  )
    circle[i].addEventListener('click', () => {addNumberToUser(+circle[i].textContent);}  )
}





$('.range').on('input',
  function () {
    localStorage.setItem('level', $('.range').val())
    
if ($('.range').val() == '1') {
  $ ('.user-status').text( levels[0]  )
  minNumber = 1
  maxNumber = 1000
}
if ($('.range').val() == '2') {
  $ ('.user-status').text( levels[1]  )
  minNumber = 1000
  maxNumber = 2500

}
if ($('.range').val() == '3') {
  $ ('.user-status').text( levels[2]  )
  minNumber = 2500
  maxNumber = 5000
}
if ($('.range').val() == '4') {
  $ ('.user-status').text( levels[3]  )
  minNumber = 5000
  maxNumber = 7500
}
if ($('.range').val() == '5') {
  $ ('.user-status').text( levels[4]  )
  minNumber = 7500
  maxNumber = 10000
}

  }
)