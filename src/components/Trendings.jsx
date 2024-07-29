import styles from './Trendings.module.css'
import fire from '../assets/fire 1.png'
import IceCard from './IceCard'

const Trendings = () =>{

    const DESSERTS = [
        {"name":'Banana Soft Cream','cost':'22','img':'ice (1).png'},
        {"name":'Chocolate Cream','cost':'12','img':'ice (2).png'},
        {"name":'Strawberry Cream','cost':'7','img':'ice (3).png'},
        {"name":'Blackberry Cream','cost':'15','img':'ice (4).png'},
    ]
    return(
        <div className={styles.trendings}>
            <div className={styles.hed}>
                <div className={styles.title}>
                    <p>Trending</p> 
                    <img src={fire} alt=''/>
                </div>

            </div>
            <div className={styles.list}>
                {DESSERTS.map(m=>{
                    return(
                        <IceCard img={m.img} cost={m.cost} name={m.name}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Trendings