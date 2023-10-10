import styles from "./Banner.module.css"
function Banner ({ imageName }){
    return(
        <div 
        className={styles.banner}
        style={{backgroundImage: `url('/images/${imageName}.png')`}} //style inline injetado com js
        >
        </div>
    );
}

export default Banner;