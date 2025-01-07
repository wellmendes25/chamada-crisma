import Image from "next/image";
import Link from "next/link";
import estilos from './header.module.css';

import LogoCrisma from '../../../../public/logo.png'

export default function Header(){
    return(
        <header className={estilos.header}>
            <Link href={"/"}>
                <Image
                src={LogoCrisma}
                className={estilos.imagem}
                />
            </Link>

            
        </header>
    )
}