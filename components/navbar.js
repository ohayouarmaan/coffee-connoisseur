import styles from "../styles/navbar.module.css";

export default function () {
    return (
        <nav className={styles.nav}>
            <p className={styles.title__line__underneath}>CCCC</p>
            <ul>
                <li>HOME</li>
                <li>MENU</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    )
}