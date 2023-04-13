function calculardoacao(){
  let kits = Number(document.getElementById("kits").value)
  let pontos = kits * 15
  document.getElementById("pontos").innerHTML = "A equipe fez " + pontos + " pontos"
}