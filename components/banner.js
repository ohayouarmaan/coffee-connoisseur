import styles from "../styles/Banner.module.css";
import Image from "next/image";

export default function () {
    return (
        <div className={styles.main__banner}>
            <div className={styles.main__text__container}>
                <h6 className={styles.main__text}>Coffee 
                   <span style={{ display: "block", color: "#532280" }}>Connoisseur.</span> 
                </h6>
                <p>Get coool Coffee Near You.</p>
                <div className={styles.line}></div>
                <button className={styles.button}>
                    <p>need me some drink </p>
                   <span>&#8594;</span> 
                </button>
            </div>
            <Image
             src={"/static/coffee-mug.png"} 
             width={400}
             className={styles.main__banner__image}
             height={400}
            />
        </div>
    );
};