import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];


const dominios = [
  { extension: ".com", color: "#007bff", descripcion: "Comercial" },
  { extension: ".info", color: "#17a2b8", descripcion: "Información" },
  { extension: ".net", color: "#ffc107", descripcion: "Redes / Proveedores" },
  { extension: ".org", color: "#6f42c1", descripcion: "Organizaciones" },
  { extension: ".biz", color: "#e83e8c", descripcion: "Negocios" },
  { extension: ".edu", color: "#28a745", descripcion: "Educación" }
];

const resultado = document.querySelector("#resultado");
const boton = document.querySelector("#generar-btn");

boton.addEventListener("click", () => {
  let output = "<div class='row justify-content-center'>";

  pronoun.forEach(p => {
    adj.forEach(a => {
      noun.forEach(n => {
        dominios.forEach(d => {
          const nombre = `${p}${a}${n}${d.extension}`;
          output += `
            <div class="col-6 col-md-3 mb-4">
              <div class="card shadow-sm p-3">
                <div class="domain-circle" style="background-color: ${d.color}">${d.extension}</div>
                <p class="fw-bold mb-1">${nombre}</p>
                <small class="text-muted">${d.descripcion}</small>
              </div>
            </div>
          `;
        });
      });
    });
  });

  output += "</div>";
  resultado.innerHTML = output;
});
