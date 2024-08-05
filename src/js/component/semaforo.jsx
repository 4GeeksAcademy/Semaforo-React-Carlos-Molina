import React, { useState } from "react";

function Semaforo(props) {
    const [color, setColor] = useState("red");
    return (
        <div id="home">
            <div id="container">
                <button className={color === "rojo" ? "botonRojoEncendido" : "botonRojo"} onClick={() => {
                    setColor("rojo");
                }}>
                </button>
                <button className={color === "amarillo" ? "botonAmarilloEncendido" : "botonAmarillo"} onClick={() => {
                    setColor("amarillo");
                }}>
                </button>  
                <button className={color === "verde" ? "botonVerdeEncendido" : "botonVerde"} onClick={() => {
                    setColor("verde");
                }}>
                </button>
            </div>
        </div>
    )
}

export default Semaforo;
