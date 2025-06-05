import BotonAtomico from "@/components/atoms/boton";
import MoleculaBotones from "@/components/molecules/moleculaBotones";
import { useEffect, useState } from "react";
import axios from "axios";
/*
  Componenete funcional.
  Functional componenet
*/ 
export default function Home() {
  
  //useState: crear variables (estado), actualizarlo y a hacer que react reaccion a esto
  // const [/*nombre de la variable, nombre de la funcion para actualizar la variable*/] = useState(/*valor inicial de la variable*/);
  const [textoDinamico, setTextoDinamico] = useState("");
  const [lista, setLista] = useState([""]);
  const [listaPeliculas, setListaPeliculas] = useState([{}]);
  const url = "http://localhost:3001";
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
      ejecutarPromise();
    },[]);
      /*
      1) async/await 
      2) then, catch 
      */

    const ejecutarPromise = async ()=>{
      // async/await : metodo (async) y de linea (await)
      const resp = await axios.get(url+"/infoPrincipal");
      setListaPeliculas(resp.data.informacion);
    }


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
    }

    {
      listaPeliculas.map((item:any)=>{
        return <BotonAtomico  texto={item.titulo} color ="green" />
      }) 
    }
    <MoleculaBotones />
    </center>
  );
}
