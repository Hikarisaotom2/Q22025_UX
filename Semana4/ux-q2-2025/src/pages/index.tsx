import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import BotonAtomico from "@/components/atoms/boton";


/*
  Componenete funcional.
  Functional componenet
*/ 
export default function Home() {
  let variable1 = "HO";
  // condicion ? resultado verdadero : resultado falso
  return (
    <>
    {BotonAtomico({
      texto:"ELIMINAR ",
      color:"Rojo",
    })}
    <BotonAtomico texto="AGREGAR" color="rojo"/>
    </>
  );
}
