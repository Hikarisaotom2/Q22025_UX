import React from "react";

interface botonProps {
    texto:string;
    color:string;
}
const BotonAtomico = ({texto,color}:botonProps) =>{

    return <button> {texto}</button>;
}

export default BotonAtomico;