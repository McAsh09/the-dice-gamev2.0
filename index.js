var randomValue;

function onLoader() {
    setTimeout(()=>{       
        let beforeLoading = document.querySelector('.instruction-container__before-loading');
        beforeLoading.style.display = 'none';   

        setInterval(()=>{    
            randomValueGenerator();
    },5000)
     
     function randomValueGenerator(){
         randomValue = Math.floor((Math.random() * 6) + 1); 
         console.log(randomValue); 
    }
     
        redirectToDicecall();
    },4000)   
}

function redirectToDicecall(){
    let afterLoading = document.querySelector('.instruction-container__after-loading');
    afterLoading.style.display = 'initial';


    var counter = 6;
    setInterval(()=>{
        document.querySelector('.time-change').innerHTML = 'Time till next shuffle: ' + --counter + ' seconds';
            if(counter === 0){
                counter = 6;
                }
    },1000)


    setInterval(()=>{
        diceCaller();
    }, 6000)
}

var numberOfButtons = document.querySelectorAll('.numbers').length;



var scoreCounter = 1;
document.querySelector('.score h2').innerHTML = 'Score: 0';

for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(event){      
        var buttonClicked = Number(event.target.value);
        
        // console.log(buttonClicked);      
        document.querySelector('.selection h2').innerHTML = 'Selected Variable: ' + buttonClicked;

        if(buttonClicked === randomValue){
            
            var guessAnswer = document.querySelector('.guess-inner');
            guessAnswer.innerHTML = 'Your guess was Right!';
            guessAnswer.style.display = 'initial';

            setTimeout(() => {
                guessAnswer.innerHTML = '';
            }, 1000);
        }


        if(buttonClicked != randomValue){
           
            var guessAnswer = document.querySelector('.guess-inner');
            guessAnswer.innerHTML = 'Your guess was Wrong!';
            guessAnswer.style.display = 'initial';

            setTimeout(() => {
                guessAnswer.innerHTML = '';
            }, 1000);
        }
        
        switch(buttonClicked){
            case 1: if(randomValue === 1){
                console.log('It is 1');
                document.querySelector('.score h2').innerHTML = 'Score: ' + scoreCounter++;               
            }
            break;
            
            case 2: if(randomValue === 2){
                console.log('It is 2');
                document.querySelector('.score h2').innerHTML = 'Score: ' + scoreCounter++;
            }
            break;
            
            case 3: if(randomValue === 3){
                console.log('It is 3');
                document.querySelector('.score h2').innerHTML = 'Score: ' + scoreCounter++;
            }
            break;
            
            case 4: if(randomValue === 4){
                console.log('It is 4');
                document.querySelector('.score h2').innerHTML = 'Score: ' + scoreCounter++;
            }
            break;
            
            case 5: if(randomValue === 5){
                console.log('It is 5');
                document.querySelector('.score h2').innerHTML = 'Score: ' + scoreCounter++;
            }
            break;

            case 6: if(randomValue === 6){
                console.log('It is 6');
                document.querySelector('.score h2').innerHTML = 'Score: ' + scoreCounter++;
            }
            break;
            
            default: console.log(buttonClicked);
        }
                
        
    })    
}

function diceCaller(){
    
    if(randomValue === 1){
        var img = document.createElement("img");
        img.src = "images/dice-six-faces-one.png";
        img.style.height = "100px";
        
        var x = document.querySelector(".dice-result");
        x.appendChild(img);


        setTimeout(()=>{
            if(x){
                x.removeChild(img)
            }
        },1000)

    }

    else 
    if(randomValue === 2){
        var img = document.createElement("img");
        img.src = "images/dice-six-faces-two.png";
        img.style.height = "100px";
        
        var x = document.querySelector(".dice-result");
        x.appendChild(img);

        setTimeout(()=>{
            if(x){
                x.removeChild(img)
            }
        },1000)
    }

    else 
    if(randomValue === 3){
        var img = document.createElement("img");
        img.src = "images/dice-six-faces-three.png";
        img.style.height = "100px";
        
        var x = document.querySelector(".dice-result");
        x.appendChild(img);
        
        setTimeout(()=>{
            if(x){
                x.removeChild(img)
            }
        },1000)
    }

    else 
    if(randomValue === 4){
        var img = document.createElement("img");
        img.src = "images/dice-six-faces-four.png";
        img.style.height = "100px";
        
        var x = document.querySelector(".dice-result");
        x.appendChild(img);             
        setTimeout(()=>{
            if(x){
                x.removeChild(img)
            }
        },1000)
    }

    else 
    if(randomValue === 5){
        var img = document.createElement("img");
        img.src = "images/dice-six-faces-five.png";
        img.style.height = "100px";
        
        var x = document.querySelector(".dice-result");
        x.appendChild(img);
        setTimeout(()=>{
            if(x){
                x.removeChild(img)
            }
        },1000)
       
    }

    else 
    if(randomValue === 6){
        var img = document.createElement("img");
        img.src = "images/dice-six-faces-six.png";
        img.style.height = "100px";
        
        var x = document.querySelector(".dice-result");
        x.appendChild(img);

        setTimeout(()=>{
            if(x){
                x.removeChild(img)
            }
        },1000)
    }
}


function restartGame(){
    window.location.reload();
}