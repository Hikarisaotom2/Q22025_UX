import BotonAtomico from "@/components/atoms/boton";
import MoleculaBotones from "@/components/molecules/moleculaBotones";
import { useEffect, useState } from "react";

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
    1) ejecuta  acciones en cada render. 
    2) ejecuta una accion en el primer render.
    3) ejecuta una accion cada que un state/ valor cambie.
      useEffect(Accion, observando);
    */
   //1 todos los renders
    // useEffect(()=>{
    //   console.log("ejecutandose en cada render");
    // });
    
    //2 primer render 
    useEffect(()=>{
      console.log("Primer render !!!");
    },[]);

    useEffect( ()=>{
      console.log("Agregamos un elemento a la lista!");

    }, [lista]);
      

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
