import styles from "./Container.module.css";
function Container({ children }){
    return(
        <section className={styles.container}>
            {children}
        </section>
    );

}

export default Container;

//Tudo o que tiver dentro da tag container la no App.js
//sera passado via parametro {children}
// sao chamados de props children