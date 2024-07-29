import styles from './IceCard.module.css'
const IceCard = (props)=>{
    return(
        <div className={styles.icecard}>
            
            <img src={require('../assets/'+props.img)} alt=''/>

            
            <div className={styles.icecontent}>
                <p className={styles.cardtitle}>
                    {props.name}
                </p>
                <p className={styles.icp}>Order type:</p>
                <div className={styles.ibtns}>
                    <button>On Table</button>
                    <button>Delivery</button>
                </div>
                <div className={styles.icecost}>
                    <p>{props.cost} zł</p>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default IceCard