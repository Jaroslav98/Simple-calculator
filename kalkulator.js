var POLE_1 = document.getElementById('pole_1');
            var POLE_2 = document.getElementById('pole_2');
            var POLE_3 = document.getElementById('pole_3');
            var POLE_4 = document.getElementById('pole_4');
             
            function Addition(a, b){
                return a + b;
            }
            function Subtraction (a, b){
                return a - b;
            }
            function Multiplication (a, b){
                return a * b;
            }
            function Division (a, b){
                return a / b;
            }
            
            function Result(){
                var w1 = Number(POLE_1.value);
                var w2 = Number(POLE_3.value);
                var cos = String(POLE_2.value);
             
                if (cos == "") POLE_4.value = "No data";
                else if (cos == "+") POLE_4.value = Addition(w1, w2);
                else if (cos == "-") POLE_4.value = Subtraction(w1, w2);
                else if (cos == "*") POLE_4.value = Multiplication(w1, w2);
                else if (cos == "/") POLE_4.value = Division(w1, w2);
               
            }