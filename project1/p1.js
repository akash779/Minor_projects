let mach_score=0;
let user_score=0;

const u=document.querySelector("#user_score");
const m=document.querySelector("#comp_score");

const choices=document.querySelectorAll(".image");
const msg = document.querySelector("#msg");


const getmachchoice=()=>{
    const randIdx=Math.floor(Math.random()*3)
    /*Random function genrate value from 0 upto 1 so, 
    when the random value is multiply by n then result of that is always less than n 
    floor function of math class is to take only integer value not float value from random result
    here n=3 so the random result number is 0 , 1 or 2  */

    const options=["stone","paper","scissor"];
    return options[randIdx];
 };
const show_winner=(user_win, user_choice , mach_choice)=>{
    if(user_win==true){
        console.log("You Win");msg.innerText="You Won ! "+user_choice+" Beats "+mach_choice;
        msg.style.backgroundcolor="green";
        user_score++;u.innerText=user_score;}
        else{console.log("You Lose");msg.innerText="You Lose ! "+mach_choice+" Beats "+user_choice ;
             msg.style.backgroundcolor="red";
                m.innerText=++mach_score;}
    }
 const draw_game=()=>{console.log("Draw");msg.innerText="Draw !";msg.style.backgroundcolor="#081b31";};

const playgame=(user_choice)=>{
    
    const mach_choice=getmachchoice();
    console.log("machine choice "+mach_choice);
    
    if(user_choice===mach_choice){draw_game();}
    else{ 
        let user_win=true;
        if(user_choice=="stone"){user_win=mach_choice ==="paper"?false:true;
        
        }
        else if(user_choice=='paper'){
            user_win=mach_choice==="scissor"?false:true;
           
        }
        else {
            user_win=mach_choice==='stone'?false:true;}
            
            show_winner(user_win, user_choice, mach_choice);
            }
    };

choices.forEach(choice => {
    
    choice.addEventListener("click",()=>
    {
        const user_choice=choice.getAttribute('id');
        console.log("User choice "+user_choice);    
        playgame(user_choice);
    })

});






