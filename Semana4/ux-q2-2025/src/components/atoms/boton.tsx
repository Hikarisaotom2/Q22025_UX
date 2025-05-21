import React from "react";

interface botonProps {
    texto:string;
    color:string;
    estilo?:boolean;
    // sorpresaMultiple: string | number;  podemos tener que una variable sea de mas de un tipo de dato
    // sorpresaOpcional?: string; el atributo puede venir o no 
    // sorpresaSorpresa:any; forzar que el atributo reciba cualquier tipo de dato, se comporta similar a JS
}
                     // deconstrucción 
const BotonAtomico = ({texto,color}:botonProps) =>{

    return <button> {texto}</button>;
}

export default BotonAtomico;