function makePlz(){
	// очистка меню с ползунками перед добавлением новых 
	var menu = document.getElementById("polz"); 
	menu.innerHTML = ""; 
	// берём все трансформаторы на странице 
	var transforms = document.getElementsByTagName("Transform"); 
	// определяем количество тел по числу трансформаторов 
	var num = transforms.length; 
	var N = document.getElementsByTagName("g").length-1;
	// для каждого тела генерируем ползунок управления 
	for(var i=1; i<num; i++){ 
		var inp = document.createElement("input"); 
		inp.type = "range"; 
		inp.id = "polz"+i; 
		// минимальное и максимальное значения перемещений должны находиться в X3D-разметке 
		inp.min = transforms[i].getAttribute("min"); 
		inp.max = transforms[i].getAttribute("max"); 
		inp.step = (inp.max - inp.min) / 10; 
		// добавление inp на страницу 
		menu.appendChild(inp); 
		// добавление функции-слушателя к inp 
		inp.addEventListener("input",setTransform); 
	} 
	makePolz();
	// функция срабатывает при изменении значения ползунка 
	function setTransform(){ 
		// метод slice() отрезает строку с символа в скобках 
		var num = this.id.slice(4); 
		// вид кинематической пары содержится в разметке 
		var KP = transforms[num].getAttribute("kp"); 
		var axis = transforms[num].getAttribute("axis"); 
		if(KP=="ПКП"){ // если пара поступательная 
			// метод split() разбивает строку на массив, например, "0 1 0" станем массивом [0,1,0] 
			var translate = transforms[num].translation.split(/,?\s*/); 
			
			switch(axis){ 
				// свойство value содержит значение ползунка, метод join() объединяет массив в строку, используя разделитель в скобках 
				case "X": translate[0] = this.value; transforms[num].translation = translate.join(" "); break; 
				case "Y": translate[1] = this.value; transforms[num].translation = translate.join(" "); break; 
				case "Z": translate[2] = this.value; transforms[num].translation = translate.join(" "); break; 
			} 
		} else { // если пара вращательная 
			var rotate = transforms[num].rotation.split(/,?\s*/); 
			var val = "";
			switch(axis){ 
				case "X": val = "1 0 0 " + this.value; break; 
				case "Y": val = "0 1 0 " + this.value; break; 
				case "Z": val = "0 0 1 " + this.value; break; 
			} 
			transforms[num].rotation = val; 
		} 
	} 
	
	
	function move(){
		var n = this.id.replace(/\D/g,"");
		var value = this.value;
		var telo = document.getElementById("тело_"+n);
		var trans = telo.getAttribute("transform");
		var axis = telo.getAttribute("осьКП");
		if(telo.getAttribute("видКП")=="ВКП"){
			if(axis==="Z"){
				telo.setAttribute("transform", trans.replace(/rotate\(-?\d+\)/,"rotate("+value+")"));
			}
		} else {
			var t = trans.match(/translate\((.*?)\)/)[1].split(",");
			switch(axis){
				case "X": t[0] = value; break;
				case "Y": t[1] = value; break;
				case "Z": ; break;
			}
			telo.setAttribute("transform", trans.replace(/translate\(.*?\)/,"translate("+t.join(",")+")"));
		}
		//document.getElementById("info").innerHTML = value;
	}
	
	function makePolz(){
		for(var i=0; i< N; i++){
			var inp = document.createElement("input");
			inp.id="polz_"+(i+1);
			inp.type = "range";
			inp.step="10";
			inp.min="-100"; inp.max="260";
			
			menu.appendChild(inp);
			inp.addEventListener("input", move);
			
		}
	}
	
	
	
}