import styles from "./Sections.module.css";

function Sections ({children, sectionName}){
    return (
        <div className={styles.sections}>
            {children}
        </div>
    );
}

export default Sections;