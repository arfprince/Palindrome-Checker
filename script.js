const inputText=document.querySelector("#text-input");
const checkButton=document.querySelector("#check-btn");
const result=document.querySelector("#result");
function ispelinDrome(str){
    let temp="";
    for(let char of str){
        if(char>='0' && char<='9')
            temp+=char;
        if(char>='a' && char<='z')
            temp+=char;
        if(char>='A' && char<='Z')
            temp+=char.toLowerCase();
    }
    console.log(temp);
    for(let i=0,j=temp.length-1;i<(temp.length)/2;i++,j--){
        if(temp[i]!==temp[j])
            return false;
    }
    return true;
}
const outPut=document.createElement("h3");
checkButton.addEventListener("click",(e)=>{
    outPut.innerText=``;
    let str=inputText.value;
    if(str===""){
        alert("Please input a value");
    }
    else{
        if(ispelinDrome(str)){
            outPut.innerText=`${str}, is a palindrome`;
        }
        else{
            outPut.innerText=`${str}, is not a palindrome`;
        }

        result.appendChild(outPut);
    }
});