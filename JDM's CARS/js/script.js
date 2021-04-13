// Los Santos Custom Build
const paintyPaint = document.getElementById("paintyPaint");
const color = document.getElementById("inputColor");

color.addEventListener("input", changeBackground);

function changeBackground() {
  paintyPaint.style.background = color.value;
}

// // Random Los Santos Fotix
function randomImgPaint() {
  const paths = [
    `<img src="IMG/paint/torqueGT.png">`,
    `<img src="IMG/paint/supra.png">`,
    `<img src="IMG/paint/nissanGTR.png">`,
  ];
  const randomNumber = Math.floor(Math.random() * 3);
  // let img = document.createElement("img");
  // img.setAttribute("src", paths[0])
  const divImage = document.getElementById("divImage");
  divImage.innerHTML = paths[randomNumber];
}

// Login

const users = [
  {
    username: "eddy",
    password: "1234",
  },
  {
    username: "Valentin Sanchez",
    password: "bestprof",
  },
];


const buttonLogin = document.getElementById("buttonLogin");
buttonLogin.addEventListener("click", e=>{
	e.preventDefault();
	
	const user = document.getElementById("inputUser").value;
	const pass = document.getElementById("inputPassword").value;
  if (user.length > 1 && pass.length > 1) {
    for (let i = 0; i < users.length; i++) {
      if (user === users[i].username && pass === users[i].password) {
        alert("Usted se ha logeado correctamente.");
		location.href="/JDM's CARS/html/Index.html"
		break;
      } else {
        let c = 3;
        alert(`Usuario o contraseña incorrecta, le quedan ${c} intentos...`);
        c--;
        
      }
    }
  } else{
    alert("Ingrese su usario y contraseña correctamente...");
  }
});

console.log(users[0].username)
console.log("perro")
