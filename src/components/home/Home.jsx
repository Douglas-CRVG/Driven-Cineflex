import { useEffect } from "react";
import TitlePage from "../others/titlePage/TitlePage";
import Movies from "./movies/Movies";

export default function Home({setBuyer}){
    useEffect(()=>{setBuyer({})},[]);
    return (
        <main>
            <TitlePage text="Selecione o Filme" />
            <Movies />
        </main>
    );
}