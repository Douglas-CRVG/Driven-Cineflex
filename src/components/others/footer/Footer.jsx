import "./footer.css";
export default function Footer(props){
    const {
        posterURL,
        overview,
        title,
        session
    } = props;
    return(
        <footer>
            <div className="img">
                <img src={posterURL} alt={overview} />
            </div>
            <div className="info">
                <p>{title}</p>
                <p>{session !== undefined? session: ""}</p>
            </div>
        </footer>
    );
}