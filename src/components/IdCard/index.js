import styles from './styles.module.css'
export function IdCard(props){
    return(
        <div className={styles.divzona}>
            <h2>Full name: <span>{props.fullName}</span></h2>
            <h2>Gender: <span>{props.gender}</span></h2>
            <h2>Birth: <span>{props.birth}</span></h2>
            <img src={props.picture} alt="Imagem"/>
        </div>

    )

}