import BotonAtomico from "@/components/atoms/boton";
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
  const [lista, setLista] = useState([""]);
  const actualizar = (event:any) => { setTextoDinamico(event.currentTarget.value)}
  const elseIf = () =>{

    if(textoDinamico =="Hola"){
        return <p>El texto es hola</p>
    }else if(textoDinamico == "clave"){
      return <p>Clave secreta correcta</p>

    }else{
      return <p>Clave incorrecta</p>
    }
  }

   /*
      {
    const objeto = {
     nombre:  juan
     apellido: perez 
     } 

     const objeto2 ={
     nombre: objeto.nombre
     apellido: objeto.apellido
     direccion: "...."
     }

     .-> EJEMPLLO deconstruccion 

      const objeto2 ={
     ...objeto
     direccion: "...."
     }
      */
      
  return (
    <center>
    <h1>{textoDinamico}</h1>
    <input type ="text"  onChange={actualizar}
     />
    <button onClick={()=>{setLista([...lista, textoDinamico])}}> Agregar</button>
    {/* Render condicional */}
    {/* if(){
    } else{
     }  */}
     <h1> Render condicional</h1>
    { textoDinamico.length <5 ? <p> El texto es menor a 5</p> : <p> El texto es mayor a 5</p>}

    {/* if(){
    }
     */}
     { textoDinamico.length%2 ==0 && <p>  Multiplo de dos</p>}

     {elseIf()}

    <h1> Render dinamico</h1>
    {
       lista.map((item)=>{
        return <BotonAtomico  texto={item} color ="rojo" />
      }) // Mapeo != Casteo. 
      
      /*
      for item in lista :

         funcion(item);
         
      */
    }
    <MoleculaBotones />
    </center>
  );
}
