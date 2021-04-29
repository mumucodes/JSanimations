const buttons = document.querySelectorAll('button');
const turbulence = document.querySelector('feTurbulence');
let verticalFrequency = 0.012;
turbulence.setAttribute('baseFrequency', verticalFrequency, '0.0001');
const steps = 30;
const interval = 10;

buttons.forEach(function(button){
    button.addEventListener('mouseover', function(){
        verticalFrequency = 0.0001;
        for (i = 0; i < steps; i++){
            setTimeout(function(){
                verticalFrequency += 0.1;
                turbulence.setAttribute('baseFrequency', verticalFrequency, '0.0001');
            }, i * interval); 
        }
        setTimeout(function(){
            verticalFrequency = 0.012;
            turbulence.setAttribute('baseFrequency', verticalFrequency, '0.0001');
        }, steps * interval);
    });
});