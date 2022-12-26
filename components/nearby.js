import styles from "../styles/Nearby.module.css";
import Card from "./neaby.card";

export default function () {
    return (
        <div className={styles.main}>
            <div className={styles.grid}>
                <Card 
                    image={'https://images.unsplash.com/photo-1518057111178-44a106bad636?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'}
                    text={'Hot Coffee with an espresso shot with the smoking flavor of charchoal and the viscous grey texture that of a coal.'}
                    name={"Charcoal Latte"} />
                <Card
                    image={'https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}
                    text={`Coffee with Whipped Cream (hot and cold) is a sweet and creamy way to enjoy coffee. Your favorite coffee topped with fluffy, homemade vanilla whipped cream!`}
                    name={"Whipped Cream Coffee"} />
                <Card 
                    image={'https://images.unsplash.com/photo-1507133750040-4a8f57021571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}
                    text={`Cold coffee is a really cool drink made with dazzling hot brown coffee beans and milk.`}
                    name={"Cold Coffee"} />
            </div>
        </div>
    )
}