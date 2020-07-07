const container = document.getElementById('container');

function grid16() {
	for(let i = 0; i < 256; i++){
		let div = document.createElement("div");
		div.classList.add("divs")
		div.setAttribute("style", "background-color: white; border: 0.2px solid rgba(0,0,0.9)")
		container.appendChild(div);
		container.setAttribute("style", "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16,1fr);")
	}
}

function grid20() {
	for(let i = 0; i < 400; i++){
		let div = document.createElement("div");
		div.classList.add("divs")
		div.setAttribute("style", "background-color: white; border: 0.2px solid rgba(0,0,0.9)")
		container.appendChild(div);
		container.setAttribute("style", "grid-template-columns: repeat(20, 1fr); grid-template-rows: repeat(20,1fr);")
	}
}

function grid64() {
		for(let i = 0; i < 4096; i++){
		let div = document.createElement("div");
		div.classList.add("divs")
		div.setAttribute("style", "background-color: white;border: 0.2px solid rgba(0,0,0.9)")
		container.appendChild(div);
		container.setAttribute("style", "grid-template-columns: repeat(64, 1fr); grid-template-rows: repeat(64,1fr);")
	}
}


function mousehover() {
	let divs = document.querySelectorAll(".divs");
	for (let div of divs) {
		let black = 0.1	
		div.addEventListener("mouseenter", () => {
			div.style.backgroundColor = "rgba(0,255,0,0.8)";
		})
		div.addEventListener("mouseleave", () => {
			black += 0.1
			div.style.backgroundColor = `rgba(0,0,0,${black})`;
		})
    }
}

const reset = document.querySelector("#reset");
reset.addEventListener("click", () =>{
	let divs = document.querySelectorAll(".divs");
	divs.forEach((div) => {
		div.style.backgroundColor = "White";
	})
	mousehover();
})

const unoseis = document.getElementById("unoseis")
unoseis.addEventListener("click", () => {
	container.innerHTML="";
	grid16();
	mousehover();
})

const veinte = document.getElementById("veinte");
veinte.addEventListener("click", () => {
	container.innerHTML="";
	grid20();
	mousehover();
})

const seiscuatro = document.getElementById("seiscuatro")
seiscuatro.addEventListener("click", () => {
	container.innerHTML="";
	grid64();
	mousehover();
})

grid16();
mousehover();