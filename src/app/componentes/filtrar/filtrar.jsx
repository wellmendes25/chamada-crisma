'use client'
import { useState } from "react";
import NomesALunos from "../listaChamada/lista";
import Mapear from "../mapear/mapear";
import estilos from './filtra.module.css';
import Link from "next/link";


export default function Filter(){

    const [nome, setNome] = useState ("")

    const filtraNome = NomesALunos.filter(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()))

    return(
        <section>
        <div className={estilos.searchbar}>
            <h1>Lista de Crismandos:</h1>

            <input className={estilos.botao}
            type="text"
            placeholder="Digite o nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            />
            
            </div>
           
       

        
         <div className={estilos.mapAlunos}>{<Mapear NomesALunos={filtraNome} />}</div>
           
       

        </section>
    )
}