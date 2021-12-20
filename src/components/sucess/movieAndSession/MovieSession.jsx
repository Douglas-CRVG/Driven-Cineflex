export default function MovieSession({buyer}){
    const {
        movie,
        session
    } = buyer
    return(
        <div>
            <h1>Filme e sessão</h1>
            <p>{movie}</p>
            <p>{session}</p>
        </div>
    )
}