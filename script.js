function toggleMOde() {
  const html= document.documentElement
  html.classList.toggle("light")

  //if(html.classList.contains('light')){
  //html.classList.remove('light')
  //} else{
  //html.classList.add('light')
  //}

  const img= document.querySelector("#profile img")
  if(html.classList.contains("light")){
  img.setAttribute("src","./assets/avatar-light.png")
  } else{
  img.setAttribute("src", "./assets/Avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "logo trote solidário 2")
  } else {
    img.setAttribute("alt", "logo trote solidário")
  }
}  