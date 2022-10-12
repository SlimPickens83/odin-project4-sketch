//  Initial declarations.

const button = document.querySelector("button");
const container = document.getElementById("container");
let squares = 4;
let userAns;
let divColor;
let surpriseColor;

// This nested for loop creates the initial 4 x 4 grid of divs, including the ability to change color in reaction to mouse hovering.

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

// The button logic grants user option to select both the grid style ("black", "grayscale", or "colorful" and the grid dimensions, which are always square)

button.addEventListener("click", () => {

    dimensions();  
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
        }

    if (userAns === "black") {
       
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
//  This block of code is where the problem is.

    } else if (userAns === "grayscale") {
            
        for (let i = 0; i < squares; i++) {
            const container2 = document.createElement("div");
            container2.classList.add("container2");
            container.appendChild(container2);
        
            for (let j = 0; j < squares; j++) {
                const div = document.createElement("div");
                    div.classList.add("grid");
                    div.style.backgroundColor = "#000000";
                    div.style.opacity = 0;             
                    
                container2.appendChild(div);

            }          

        }

        grayscale("grid");

        
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


// List of functions utilized.

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

    const gridDivs = document.querySelectorAll(`div.${x}`);

	gridDivs.forEach((gridDiv) => {
        gridDiv.addEventListener("mouseover", function (event) {
            event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
		});

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