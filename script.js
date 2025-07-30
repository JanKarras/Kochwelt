let headerLoaded = false; // Variable zur Verfolgung, ob der Header bereits geladen wurde
let footerLoaded = false; // Variable zur Verfolgung, ob der Footer bereits geladen wurde

async function includeHTML(callback) {
  let includeElements = document.querySelectorAll('[w3-include-html]');
  for (let i = 0; i < includeElements.length; i++) {
    const element = includeElements[i];
    file = element.getAttribute("w3-include-html");

    if ((file === "header.html" && headerLoaded) || (file === "footer.html" && footerLoaded)) {
      continue;
    }

    let resp = await fetch(file);
    if (resp.ok) {
      element.classList.add("transition"); // Füge die CSS-Klasse hinzu
      element.innerHTML = await resp.text();

      // Warte kurz, damit der Browser die Änderungen verarbeiten kann
      await new Promise(resolve => setTimeout(resolve, 100));

      element.style.opacity = 1; // Erhöhe die Opazität auf 1, um den Übergangseffekt auszulösen

      if (file === "header.html") {
        headerLoaded = true;
      } else if (file === "footer.html") {
        footerLoaded = true;
      }
    } else {
      element.innerHTML = 'Page not found';
    }
  }

  // Callback-Funktion aufrufen, wenn vorhanden
  if (typeof callback === "function") {
    callback();
  }
}

//mobile menu
function showMenu(){
  document.getElementById('m-mobile').classList.add('show');
}


function closeMenu(){
  document.getElementById('m-mobile').classList.remove('show');
}


function start() {
  document.getElementById('body').innerHTML = '<div class="transition" w3-include-html="recipesoftheday.html"></div>';
  includeHTML();
  changecolor(1);
  closeMenu();
}

function imp() {
  document.getElementById('body').innerHTML = '<div class="transition" w3-include-html="impressum.html"></div>';
  includeHTML();
  changecolor(2);
  closeMenu();
}

function kont() {
  document.getElementById('body').innerHTML = '<div class="transition" w3-include-html="contact.html"></div>';
  includeHTML();
  changecolor(3);
  closeMenu();
}

function rotd() {
  document.getElementById('body').innerHTML = '<div class="transition" w3-include-html="recipe.html"></div>';
  includeHTML(function(){portion(4)});
  changecolor(4);
  closeMenu();
}
function rtah() {
  document.getElementById('body').innerHTML = '<div class="transition" w3-include-html="recipeAlexej.html"></div>';
  includeHTML(function(){portion(3)});
}

function rtmo() {
  document.getElementById('body').innerHTML = '<div class="transition" w3-include-html="recipeMeran.html"></div>';
  includeHTML(function(){portion(2)});
}

function rtjk() {
  document.getElementById('body').innerHTML = '<div class="transition" w3-include-html="recipeJan.html"></div>';
  includeHTML(function(){portion(1)});
}

function changecolor(x) {
  if (x == 1) {
    document.getElementById('start').classList.add('linksclicked');
    document.getElementById('imp').classList.remove('linksclicked');
    document.getElementById('kont').classList.remove('linksclicked');
    document.getElementById('rotd').classList.remove('linksclicked');
  }
  if (x == 2) {
    document.getElementById('start').classList.remove('linksclicked');
    document.getElementById('imp').classList.add('linksclicked');
    document.getElementById('kont').classList.remove('linksclicked');
    document.getElementById('rotd').classList.remove('linksclicked');
  }
  if (x == 3) {
    document.getElementById('start').classList.remove('linksclicked');
    document.getElementById('imp').classList.remove('linksclicked');
    document.getElementById('kont').classList.add('linksclicked');
    document.getElementById('rotd').classList.remove('linksclicked');
  }
  if (x == 4) {
    document.getElementById('start').classList.remove('linksclicked');
    document.getElementById('imp').classList.remove('linksclicked');
    document.getElementById('kont').classList.remove('linksclicked');
    document.getElementById('rotd').classList.add('linksclicked');
  }
}

let ingredientsjk = [' Stk Eier', ' g Magerquark', ' g Eiweißpulver, Vanille', ' g Beeren, frisch', ' EL Öl', ' Prise Erythrit'];
let ingredientsmo = [' g Lachssteaks', ' Limetten, Saft davon', ' reife Mangos', ' rote Zwiebel', ' rote Paprika', ' Gurke', ' Bund frischer Koriander', ' EL Olivenöl', ' Prise Salz und Pfeffer', ' g Quinoa', ' ml Gemüsebrühe'];
let ingredientsah = [' g Hackfleisch', ' g Nudeln', ' Zwiebel, gehackt', ' Knoblauchzehe, gehackt', ' Paprika, gewürfelt', ' EL Dose gehackte Toamten', ' TL Tomatenmark', ' TL getrocknete italienische Kräuter', ' Prise Salz und Pfeffer', ' TL Olivenöl', ' g Parmesan-Käse', ' Handvoll Frische Petersilie'];
let ingredientsak = [' g Woknudeln', ' Handvoll Karotten', ' Handvoll Lauch', ' El Zwiebeln gehakt', ' Ei(er) verquirlt', ' g Hänchenfleisch', ' TL Zucker', ' prise Salz', ' prise Pferffer, weiß', ' ml Sesamöl', ' ml Öl zum Braten'];
let amountjk = ['2', '50', '27.5', '100', '0.5', '0.5']
let amountmo = ['600', '2', '2', '1', '1', '1', '1', '3', '1', '250', '500']
let amountah = ['100', '100', '1', '0.5', '0.5', '1', '0.5', '1', '1', '1', '100', '1']
let amountak = ['125', '1', '1', '1', '1', '80', '0.25', '1', '1', '15', '35']

function portion(x) {
  if(document.getElementById('persons').value>=1)
  {
    if (x == 1) {
      let persons = +document.getElementById('persons').value;
      let list = document.getElementById('listjan');
      list.innerHTML = '';
      for (let i = 0; i < ingredientsjk.length; i++) {
        let totalamountjk = persons * amountjk[i];
        list.innerHTML += `<li>${totalamountjk}${ingredientsjk[i]}</li>`;
      }
    }
    if (x == 2) {
      let persons = +document.getElementById('persons').value;
      let list = document.getElementById('listmeran');
      list.innerHTML = '';
      for (let i = 0; i < ingredientsmo.length; i++) {
        let totalamountmo = persons * amountmo[i];
        list.innerHTML += `<li>${totalamountmo}${ingredientsmo[i]}</li>`;
      }
    }
    if (x == 3) {
      let persons = +document.getElementById('persons').value;
      let list = document.getElementById('listalexej');
      list.innerHTML = '';
      for (let i = 0; i < ingredientsah.length; i++) {
        let totalamountah = persons * amountah[i];
        list.innerHTML += `<li>${totalamountah}${ingredientsah[i]}</li>`;
      }
    }
    if (x == 4) {
      let persons = +document.getElementById('persons').value;
      let list = document.getElementById('listathur');
      list.innerHTML = '';
      for (let i = 0; i < ingredientsak.length; i++) {
        let totalamountak = persons * amountak[i];
        list.innerHTML += `<li>${totalamountak}${ingredientsak[i]}</li>`;
      }
    }
  }
  else
  {
    alert('Bittes mindestens eine Portion angeben!')
  }
}
function BackToStartTimer() {
  var countdownText = document.getElementById("timer");
  var seconds = 10; 
  countdownText.innerText = "Sie werden in " + seconds + " Sekunden zurück zur Startseite geleitet.";

  var timer = setInterval(function() {
    seconds--;
    countdownText.innerText = "Sie werden in " + seconds + " Sekunden zurück zur Startseite geleitet.";

    if (seconds <= 0) {
      clearInterval(timer);
      window.location.href = "index.html";
    }
  }, 1000);
}
