const passwordDisplay=document.querySelector("[password-display]");
const copyBtn=document.querySelector("[copy-btn]");
const passLength=document.querySelector("[pass-length]");
const  slider=document.querySelector("[slider]");
const upperCase=document.querySelector("#uppercase");
const lowerCase=document.querySelector("#lowercase");
const numbers=document.querySelector("#numbers");
const symbols=document.querySelector("#symbols");
const strength=document.querySelector("[strength-indicator]")
const passGenBtn=document.querySelector('.pass-gen')
const allCheckBox=document.querySelectorAll('input[type=checkbox]')
const symbolsStr="`~!@#$%^&*(){}[]='./?<>,"
let passWordLenght=10;
let count=0;
handleSlider();
function handleSlider(){
    passLength.innerHTML=passWordLenght;    
};
slider.addEventListener('input',()=>{
    
    passWordLenght=slider.value;
    handleSlider();    
});
function randomInt(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
};
function upperletter(){
   return String.fromCharCode(randomInt(65,90));
     
};
function lowerletter(){
     return String.fromCharCode(randomInt(97,122));
};
 function randoNumber(){
    return randomInt(0,9);
 };
function randomsybols(){
     let randomIdex=Math.floor(Math.random()*symbolsStr.length);
     return symbolsStr[randomIdex];
};
function setIndicator(color){
     strength.style.backgroundColor=color;
     strength.style.shadow=color;
     colourindicator();
} 
 function updateSlider() {
    const value =
      ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

    slider.style.background = `
      linear-gradient(
        to right,
        #10b981 ${value}%,
        #022c22 ${value}%
      )
    `;
  }

  slider.addEventListener("input", updateSlider);
  updateSlider();

function colourindicator(){
    let selectUpper=false;
    let selectLower=false;
    let selectNumber=false;
    let selectSybols=false;
    if(upperCase.checked)selectUpper=true;
    if(lowerCase.checked)selectLower=true;
    if(numbers.checked)selectNumber=true;
    if(symbols.checked)selectSybols=true;
    
    if (selectUpper && selectLower && selectNumber && selectSybols){
        setIndicator("#00ff00");
    }
    
    else if( (selectUpper||selectLower) && selectSybols && selectNumber){
        setIndicator("#0000ff");
    }
    else {
        setIndicator("#ff0000");
    }
};

function handleCheckbox(){
    count=0;
    allCheckBox.forEach((checkbox)=>{
        if(checkbox.checked){
            count++;
        }
        
    })
};
allCheckBox.forEach((checkbox)=>{
    checkbox.addEventListener("change",handleCheckbox);
})
  function shufflePassword(password) {
    let arr = password.split("");

    for (let i = arr.length - 1; i > 0; i--) {
        let j = randomInt(0, i);
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr.join("");
}


passGenBtn.addEventListener("click",()=>{
    if(count==0){
        return;
    } ;
   let password=""
 if( passWordLenght<count){
            passWordLenght=count;
            slider.value=passWordLenght;
            handleSlider();
        };
    let funarr=[];
    if (upperCase.checked){
        funarr.push(upperletter);
    }
    if(lowerCase.checked)   { 
        funarr.push(lowerletter);
    }
    if(numbers.checked){
        funarr.push(randoNumber);
    }
    if(symbols.checked){
        funarr.push(randomsybols);
    } ;
    for(let i=0; i<funarr.length;i++){
        password+=funarr[i]();
    };
    for(let i = 0; i < passWordLenght-funarr.length; i++){
    let randIndex = randomInt(0, funarr.length - 1);
    password += funarr[randIndex]();
}
       password=shufflePassword(password) ;
    passwordDisplay.value=password;
    setIndicator();

})