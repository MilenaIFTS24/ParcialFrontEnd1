let tabla = document.getElementById("tabla");
let marca = document.getElementById("marca");
let modelo = document.getElementById("modelo");
let anio = document.getElementById("año");
let color = document.getElementById("color");
let form = document.getElementById("formAuto");
let alerta = document.getElementById("alerta");

let agregar = document.getElementById("agregarAuto");

agregar.addEventListener('click', () => 
{
    let anioInt = parseInt(anio.value);
    if (marca.value.trim() === "" || modelo.value.trim() === "" || anio.value.trim() === "" || color.value === "" || anioInt < 1886 || anioInt > 2025) {
        alerta.textContent = "Revisar Formulario";
    }
    else
    {
        alerta.textContent = "";

        let nuevaFila = document.createElement("tr");

        let marcaTd = document.createElement("td");
        marcaTd.textContent = marca.value;
        let modeloTd = document.createElement("td");
        modeloTd.textContent = modelo.value;
        let anioTd = document.createElement("td");
        anioTd.textContent = anioInt;
        let colorTd = document.createElement("td");
        colorTd.textContent = color.value;

        let colorEspecifico = color.value;
        colorTd.addEventListener('mouseover', () =>  
        {
            colorTd.style.backgroundColor = colorEspecifico;
        });
        colorTd.addEventListener('mouseout', () => 
        {
            colorTd.style.backgroundColor = "";
        });
        
        nuevaFila.appendChild(marcaTd);
        nuevaFila.appendChild(modeloTd);
        nuevaFila.appendChild(anioTd);
        nuevaFila.appendChild(colorTd);
        
        tabla.appendChild(nuevaFila);

        form.reset();
    }    
});