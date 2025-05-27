import React from "react";

interface botonProps {
    texto:string;
    color:string;
    funcionParametro: () =>void;
    // sorpresaMultiple: string | number;  podemos tener que una variable sea de mas de un tipo de dato
    // sorpresaOpcional?: string; el atributo puede venir o no 
    // sorpresaSorpresa:any; forzar que el atributo reciba cualquier tipo de dato, se comporta similar a JS
}

/*
    Las funciones se tratan como un tipo de dato:
        (TIPO DE DATO PARAMETROS) => retorno;
    const num = ()=>{
        console.log();
    }
    () => void;

    -> declaración del codigo : definen la variable/ funciôn
    -> invocación del codigo: es el llamado del codigó , nombreFuncion(...)

*/
                     // deconstrucción 
const BotonAtomico = ({texto,color, funcionParametro}:botonProps) =>{

    return <button style={{background: color}} onClick={funcionParametro}> {texto}</button>;
}

export default BotonAtomico;