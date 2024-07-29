import styles from './Banner.module.css'
import gamer from  '../assets/gamer 1.png';
import group6 from '../assets/Group 6.png'
import ice1 from '../assets/ice-cream-cup(1) (1).png'
import ice2 from '../assets/ice-cream-cup(1).png'
import ice3 from '../assets/ice-cream-cup(2).png'
import add from '../assets/add(1) 1.png'

const Banner = () =>{
    return(
        <div className={styles.banner}>
            <div className={styles.left}>
                <h1>Red Flower
                    Ice-cream</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna 
                    aliqua.
                </p>
                <div className={styles.btns}>
                    <a href="" className={styles.glassBtn}>
                        Order Now
                    </a>
                    <a href="" className={styles.glassBtn}>
                        Book Table
                    </a>
                </div>
            </div>

            <div className={styles.right}>
                <div className={styles.comment}>
                    <div className={styles.author}>
                        <img src={gamer}/>
                        <div>
                            <h3>Uzi Nexus</h3>
                            <img src={group6}/>

                        </div>

                    </div>
                    <p>
                        Indulge in frozen bliss with our irresistible ice cream delights!
                    </p>
                </div>
                <div className={styles.types}>
                    <p>Choose Type:</p>
                    <div>
                        <a href="" className={styles.typeBtn} >
                            <img src={ice1}/>
                        </a>
                        <a href="" className={styles.typeBtn}>
                            <img src={ice2}/>
                        </a>
                        <a href="" className={styles.typeBtn}>
                            <img src={ice3}/>
                        </a>
                        <a href="" className={styles.typeBtn}>
                            <img src={add}/>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner