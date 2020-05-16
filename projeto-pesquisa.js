function pesquisa_projeto() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("projeto-pesquisa");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}

function toggleMenuAboutMe() {
  var menu = document.getElementById("menu-lateral");
  var barra = document.getElementById("barra-lateral");
  var conteudo = document.getElementById("about-me");

  if (menu.style.display.toString() != "block") {
    conteudo.style.marginLeft = "316px";
    barra.style.width = "316px";
    menu.style.display = "block";
  } else {
    conteudo.style.marginLeft = "132px";
    barra.style.width = "132px";
    menu.style.display = "none";
  }
}

function toggleMenuCoverMe() {
  var menu = document.getElementById("menu-lateral");
  var barra = document.getElementById("barra-lateral");
  var conteudo = document.getElementById("cover-me");

  if (menu.style.display.toString() != "block") {
    conteudo.style.marginLeft = "316px";
    barra.style.width = "316px";
    menu.style.display = "block";
  } else {
    conteudo.style.marginLeft = "132px";
    barra.style.width = "132px";
    menu.style.display = "none";
  }
}

function toggleMenuLoop() {
  var menu = document.getElementById("menu-lateral");
  var barra = document.getElementById("barra-lateral");
  var conteudo = document.getElementById("loop");

  if (menu.style.display.toString() != "block") {
    conteudo.style.marginLeft = "316px";
    barra.style.width = "316px";
    menu.style.display = "block";
  } else {
    conteudo.style.marginLeft = "132px";
    barra.style.width = "132px";
    menu.style.display = "none";
  }
}

function toggleMenuNameless() {
  var menu = document.getElementById("menu-lateral");
  var barra = document.getElementById("barra-lateral");
  var conteudo = document.getElementById("nameless");

  if (menu.style.display.toString() != "block") {
    conteudo.style.marginLeft = "316px";
    barra.style.width = "316px";
    menu.style.display = "block";
  } else {
    conteudo.style.marginLeft = "132px";
    barra.style.width = "132px";
    menu.style.display = "none";
  }
}

function toggleMenuOverAgain() {
  var menu = document.getElementById("menu-lateral");
  var barra = document.getElementById("barra-lateral");
  var conteudo = document.getElementById("over-again");

  if (menu.style.display.toString() != "block") {
    conteudo.style.marginLeft = "316px";
    barra.style.width = "316px";
    menu.style.display = "block";
  } else {
    conteudo.style.marginLeft = "132px";
    barra.style.width = "132px";
    menu.style.display = "none";
  }
}

function toggleMenuPaisana() {
  var menu = document.getElementById("menu-lateral");
  var barra = document.getElementById("barra-lateral");
  var conteudo = document.getElementById("paisana-container");

  if (menu.style.display.toString() != "block") {
    conteudo.style.marginLeft = "316px";
    barra.style.width = "316px";
    menu.style.display = "block";
  } else {
    conteudo.style.marginLeft = "132px";
    barra.style.width = "132px";
    menu.style.display = "none";
  }
}

function toggleMenuProjects() {
  var menu = document.getElementById("menu-lateral");
  var barra = document.getElementById("barra-lateral");
  var conteudo = document.getElementById("grid-projetos");

  if (menu.style.display.toString() != "block") {
    conteudo.style.marginLeft = "316px";
    barra.style.width = "316px";
    menu.style.display = "block";
  } else {
    conteudo.style.marginLeft = "132px";
    barra.style.width = "132px";
    menu.style.display = "none";
  }
}

function toggleMenuPesquisa() {
  var menu = document.getElementById("menu-lateral");
  var barra = document.getElementById("barra-lateral");
  var conteudo = document.getElementById("pesquisa");

  if (menu.style.display.toString() != "block") {
    conteudo.style.marginLeft = "316px";
    barra.style.width = "316px";
    menu.style.display = "block";
  } else {
    conteudo.style.marginLeft = "132px";
    barra.style.width = "132px";
    menu.style.display = "none";
  }
}

function toggleMenuContacts() {
  var menu = document.getElementById("menu-lateral");
  var barra = document.getElementById("barra-lateral");
  var conteudo = document.getElementById("contactos");

  if (menu.style.display.toString() != "block") {
    conteudo.style.marginLeft = "316px";
    barra.style.width = "316px";
    menu.style.display = "block";
  } else {
    conteudo.style.marginLeft = "132px";
    barra.style.width = "132px";
    menu.style.display = "none";
  }
}
