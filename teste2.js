function verificar(string){
    if(!string) return "Não existe";

    return string.split("").reverse().join("") === string;
}


function verifica2(string){
    if(!string) return "Não existe";
    
    for(let i = 0; i < string.length/2; i++){
        if(string[i]!== string[string.length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(verifica2("abbbbaa"))