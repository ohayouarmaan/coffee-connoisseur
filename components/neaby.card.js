import style from "../styles/Nearby.card.module.css";
import Image from "next/image";
import { useRef } from "react";

export default function({ name, image, text }) {
    const title = useRef({});

    function handleHover() {
        title.current.classList.remove(style.removeAnimateTitle)
        title.current.classList.add(style.animateTitle)
    }

    function handleMouseLeave() {
        title.current.classList.remove(style.animateTitle)
        title.current.classList.add(style.removeAnimateTitle)
    }

    return (
        <div className={style.main}>
            <div className={style.image__container}>
                <Image src={image} width={300} height={300} className={style.image} alt="coffee-image" layout="responsive" />
                <div onMouseEnter={handleHover} onMouseLeave={handleMouseLeave} className={style.text}>
                    <p>{ text ? text : 'lorem ipsum dolor sit amet.' }</p>
                </div>
            </div>
            <h1 className={style.title} ref={title}>{name}</h1>
        </div>
    )
}