const button = document.querySelector("button");
const container = document.getElementById("container");
let columns = 4;
let rows = 4;

for (let i = 0; i < rows; i++) {
    const container2 = document.createElement("div");
    container2.classList.add("container2");
    container.appendChild(container2);

    for (let i = 0; i < columns; i++) {
        const div = document.createElement("div");
        div.addEventListener("mouseover", highlight);
        div.classList.add("grid");
        container2.appendChild(div);

        function highlight() {
            div.style.backgroundColor = "black";
        }
    }
    
}



button.addEventListener("click", () => {

    columns = prompt("How many columns?");
    rows = prompt("How many rows?");

    while (container.firstChild) {

        container.removeChild(container.firstChild);
        
    }

    for (let i = 0; i < rows; i++) {

        const container2 = document.createElement("div");
        container2.classList.add("container2");
        container.appendChild(container2);

        for (let i = 0; i < columns; i++) {
            const div = document.createElement("div");
            div.addEventListener("mouseover", highlight);
            div.classList.add("grid");
            container2.appendChild(div);

            function highlight() {
                div.style.backgroundColor = "black";
            }
        }

    }

});