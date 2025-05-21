import MoleculaBotones from "@/components/molecules/moleculaBotones";
import { useState } from "react";

/*
  Componenete funcional.
  Functional componenet
*/ 
export default function Home() {
  
  //useState: crear variables (estado), actualizarlo y a hacer que react reaccion a esto
  // const [/*nombre de la variable, nombre de la funcion para actualizar la variable*/] = useState(/*valor inicial de la variable*/);
  const [textoDinamico, setTextoDinamico] = useState("");
  /*
  PREGUNTA PENDIENTE!:
  ingeniera, no seria mejor siempre hacer el método aparte por si lo queremos usar mas de una vez
  
  */
  return (
    <center>
    <h1>{textoDinamico}</h1>
    <input type ="text"  onChange={
      (event) => { setTextoDinamico(event.currentTarget.value)}
    } />

    {/* Render condicional */}
    { textoDinamico.length <2 ? <p> El texto es menor a 2</p> : <p> El texto es mayor a dos</p>}
    <MoleculaBotones />
    </center>
  );
}
