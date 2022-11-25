/* teste */
var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

document.getElementById('subtrair').addEventListener("click", function decrement(){
    if(currentNumber==0){
        document.getElementById("currentNumber").style.color = "red";
    }else{
        currentNumber = currentNumber - 1;
        currentNumberWrapper.innerHTML = currentNumber;
        document.getElementById("currentNumber").style.color = "black";
    }
});
document.getElementById('adicionar').addEventListener("click", function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    document.getElementById("currentNumber").style.color = "black";
});




