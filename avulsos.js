function calcularavulsos(){
  let cp = Number(document.getElementById("cp").value)
  let kits = Number(document.getElementById("kits").value)
  let sup = Number(document.getElementById("sup").value)
  let arroz = Number(document.getElementById("arroz").value)
  let feijao = Number(document.getElementById("feijao").value)
  let afo = Number(document.getElementById("afo").value)
  let mac = Number(document.getElementById("mac").value)

  let pontos = (cp*50) + (kits*25) + (sup*10) + (arroz*5) + (feijao*2) + (afo*1) + (mac*0.5)

  document.getElementById("pontos").innerHTML = "A equipe fez " + pontos + " pontos adicionais"
}