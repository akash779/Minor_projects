
let URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json";
const currcodeFrom=document.querySelector(".From select");
const currcodeTo=document.querySelector(".To select");


let dropdowns = document.querySelectorAll("select");
for (let select of dropdowns)
{
    for(let currcode in countryList)
    {
        let newOption=document.createElement("option");
        newOption.innerText=currcode;
        newOption.value=currcode;
        select.append(newOption);
        if(select.name==="from" && currcode==="USD"){newOption.selected="selected";}
        if(select.name==="to" && currcode==="INR"){newOption.selected="selected";}
        
        
    }
    
    select.addEventListener("change",(evt)=>{updateFlag(evt.target,evt.srcElement);updateURL();});
}

//function to udate the flag according to the country selected for conversion.
function updateFlag(target,srcElement){
let currcode=target.value;
let countryCode=countryList[currcode];

let newSrc="https://flagsapi.com/"+countryCode+"/flat/64.png";
let element=document.querySelectorAll(".exchange_container img");
if(srcElement.name==="from")
{
    
    element[0].src=newSrc;
    console.log("From Flag Changing....");
}
else{element[1].src=newSrc;console.log("To Flag Changing....");}

console.log("Flag changed...");
}


//function return URL for currency rate
function updateURL()
{
    
 
    // console.log(currcodeFrom.value);
    // console.log(currcodeTo.value);

     URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/"+currcodeFrom.value.toLowerCase()+"/"+currcodeTo.value.toLowerCase()+".json";
     console.log("URL Updating...");
     console.log("URL Updated...");
     
     
    }



let convert_btn=document.querySelector("button");

convert_btn.addEventListener("click",async(evt)=>{
    evt.preventDefault();
    let response= await fetch(URL);
    let result =await response.json();
    console.log("getting exchange rate......");
    
    console.log(result[currcodeTo.value.toLowerCase()]);
   
    const fromAmount =document.querySelector(".Input input");
    const toAmount =document.querySelector(".Output input");
    let rateBoard=document.querySelector("#exchange_rate");

    rateBoard.innerText="1 "+currcodeFrom.value+" = " +result[currcodeTo.value.toLowerCase()]+" "+currcodeTo.value;
    console.log(rateBoard.innerText);
    
    console.log("Update Exchage Rate......");


    


   console.log("Converting Data.....");
    if(fromAmount.value===""|| fromAmount.value<1)
    {fromAmount.value=1;toAmount.value=fromAmount.value*result[currcodeTo.value.toLowerCase()];}
    else{toAmount.value=fromAmount.value*result[currcodeTo.value.toLowerCase()];
        }
    
    console.log("Exchange successfull.........");
   
   

    })
