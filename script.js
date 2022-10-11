const button = document.querySelector("button");
const container = document.getElementById("container");
let squares = 4;
let userAns;
let divColor;
let surpriseColor;

for (let i = 0; i < squares; i++) {
    const container2 = document.createElement("div");
    container2.classList.add("container2");
    container.appendChild(container2);

    for (let i = 0; i < squares; i++) {
        const div = document.createElement("div");        
        div.classList.add("grid");
        div.addEventListener("mouseover", function(){
            div.style.backgroundColor = "black";
        });

        container2.appendChild(div);        

    }
   
}

button.addEventListener("click", () => {

    dimensions();  
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        }

    if (userAns === "black") {

        alert("User answered " + userAns);
            
        for (let i = 0; i < squares; i++) {
            const container2 = document.createElement("div");
            container2.classList.add("container2");
            container.appendChild(container2);

            for (let i = 0; i < squares; i++) {
                const div = document.createElement("div");
                    div.classList.add("grid");
                    div.addEventListener("mouseover", function(){
                        div.style.backgroundColor = "black";
                    });
                        
                container2.appendChild(div);

            }
        }    

    } else if (userAns === "grayscale") {
            
        for (let i = 0; i < squares; i++) {
            const container2 = document.createElement("div");
            container2.classList.add("container2");
            container.appendChild(container2);
        
            for (let i = 0; i < squares; i++) {
                const div = document.createElement("div");
                    div.classList.add("grid");

                    div.addEventListener("mouseover", function(){
                        div.style.backgroundColor = "#0000001A";
                    }, { once: true });                
                    
                    grayscale("grid");
                    

                container2.appendChild(div);

            }          

        }
        
    }  else if (userAns === "colorful") {

        for (let i = 0; i < squares; i++) {
            const container2 = document.createElement("div");
            container2.classList.add("container2");
            container.appendChild(container2);

            for (let i = 0; i < squares; i++) {
                const div = document.createElement("div");
                    div.classList.add("grid");
                    div.addEventListener("mouseover", function(){
                        randomColor();
                        div.style.backgroundColor = surpriseColor;
                    });
                        
                container2.appendChild(div);

            }
        }    
    }
    
});


function dimensions() {
    let gStyle = prompt("Black, grayscale, or colorful?");

    userAns = gStyle.toLowerCase();

    if (userAns === "black" || userAns === "grayscale" || userAns === "colorful") {

        squares = prompt("How many squares long and wide should the grid be?");

        if (squares > 100) {
            alert("Grid size limited to 100 x 100 squares.");
            dimensions();
        }

    } else {

        alert("Please respond with either 'black', 'grayscale', or 'colorful'.")
        
        dimensions();

    }

}


function grayscale(x) {

    const gridDiv = document.querySelectorAll(`div.${x}`);

	gridDiv.addEventListener("mouseover", function(){

		gridDiv.style.opacity += 0.1;
		
		if (gridDiv.style.opacity < 1) {
		    grayscale(x);
		}

	});		
	
}


function randomColor() {
	let a = Math.random()*8;
	
	if (a <= 1) {
		surpriseColor = "red";
	} else if (a <= 2) {
		surpriseColor = "orange";
	} else if (a <= 3) {
		surpriseColor = "yellow";
	} else if (a <= 4) {
		surpriseColor = "green";
	} else if (a <= 5) {
		surpriseColor = "blue";
	} else if (a <= 6) {
		surpriseColor = "indigo";
	} else if (a <= 7) {
		surpriseColor = "chartreuse";
	} else if (a <= 8) {
		surpriseColor = "violet";
	}	

}