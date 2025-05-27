
import React from "react";
import BotonAtomico from "../atoms/boton";

const MoleculaBotones = ()=> {
    return <div>
        <BotonAtomico  texto="Eliminar" color ="red"  funcionParametro= {()=>{
            console.log("simular que estamos eliminando...");
            // llamados a BDD 

        }}/>
        <BotonAtomico  texto="Mostrar" color ="blue"  funcionParametro={
            ()=>{
                console.log("simular que estamos mostrando nuevas cosas en la pantalla")
                // ejecutando una query en la bdd 
            }
        }/>
        <BotonAtomico  texto="ALERTA" color ="green"  funcionParametro={
            ()=>{
                alert("Otra funcionalidad!")
            }
        }/>

    </div>
};

export default MoleculaBotones;