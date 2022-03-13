import styles from '../styles/Button.module.css'

const Button = ({ clickAction, label }) => {
    return (
        <div onClick={clickAction} className={styles.button}>{label}</div>
    )
}

export default Button

