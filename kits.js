function calcularKits(){
    // recupera a qtde de kits
    let kits = Number(document.getElementById("kits").value)
    // calcula qts pontos a equipe conseguiu
    let pontos
    if (kits >= 80){
        pontos = 5000
    }
    else if ((kits >= 64) && (kits < 80)){
        pontos = 4000
    }
    else if ((kits >= 40) && (kits < 64)){
        pontos = 2500
    }
    else if ((kits >= 16) && (kits < 40)){
        pontos = 1000
    }
    else if ((kits >=0) && kits < 16){
        pontos = 0
    }
    else {
        pontos = -1 
    }
    if (pontos == -1){
        document.getElementById("pontos").innerHTML = "Impossível calcular"
    }
    else {
        document.getElementById("pontos").innerHTML = "A pontuação foi de " + pontos
    }
}