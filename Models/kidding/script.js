
 document.getElementById('start').addEventListener('click',anim);
function anim(){
	

    var inpVal = document.getElementById("inpal").value;
    
    var body_1 = document.getElementById("body_1");
    var body_2 = document.getElementById("body_2");
    var body_3 = document.getElementById("body_3");
    var t = 0;
    function frame(){t+=0.02;
       
        body_1.setAttribute("rotation", "0 1 0 "+t);
       body_2.setAttribute("rotation", "0 0 1 "+t);
body_3.setAttribute("rotation", "0 0 1 "+t);

//        console.log(i)
        if (t >= inpVal) {
          clearInterval(timer); // завершить анимацию
        }
    }
    var timer = setInterval(frame, 30) ;// рисовать каждые 10мс
 }//);
//}