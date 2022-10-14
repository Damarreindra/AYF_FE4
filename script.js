
document.getElementById("submit").addEventListener("click", function(event){
    calc();
    event.preventDefault();

    function calc() {
        let parsedWeight = parseInt(document.getElementById("weight").value);
        let parsedHeight = parseInt(document.getElementById("height").value);
        let bmi = (parsedWeight/Math.pow((parsedHeight/100),2)).toFixed(1);
        let result = document.getElementById("result");
        function nanCheck(bmi) {
            if (isNaN(bmi)) {
                alert("Input Your Weight and Height First!");
                cat.hidden = true;
            }else{
                result.innerHTML = "Your BMI is " + bmi.bold();
            }
            return bmi;
          }
       
        if(nanCheck(bmi) < 18.5){
            category = "Underweight"
        }else if(nanCheck(bmi) >= 18.5 && nanCheck(bmi) <= 24.9){
            category = "Normal"
        }else if(nanCheck(bmi) >= 25 && nanCheck(bmi) <= 29.9){
            category = "Overweight" 
        }else{
            category = "Obesity"
        }
    
        let cat = document.getElementById("category");
        cat.innerHTML = category.bold()
        
        let txt = document.getElementById("txt");
        txt.innerText = "Which means You are"
    }
  });

  