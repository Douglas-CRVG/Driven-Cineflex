import TitlePage from "../others/titlePage/TitlePage";
import Movies from "./movies/Movies";

export default function Home(){
    return (
        <main>
            <TitlePage text="Selecione o Filme" />
            <Movies />
        </main>
    );
}