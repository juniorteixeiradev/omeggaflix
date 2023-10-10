import styles from "./Card.module.css";
function Card ({urlFilme, movieName}){
    return (
        <div className={styles.card}>
            {/* <h3>{movieName}</h3> */}
        <a 
            href={`https://www.youtube.com/watch?v=${urlFilme}`}
            target="_blank">
            <img alt="Capa" src={`https://img.youtube.com/vi/${urlFilme}/default.jpg`}/>
        </a>
        </div>
    );
}

export default Card;