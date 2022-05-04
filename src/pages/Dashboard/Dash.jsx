import NotificationBar from "../../components/NotificationBar/NotificationBar";
import styles from './Dash.module.css';

const Dash = () => {
    const dummyData = {
        // replace this with actual data later, this is just for display purposes
        'waterFiltersSold': 75,
        'stovesSold': 43,
        'notifications': ['You need to order more water filters!', 'You need to order more stoves!']
    }
    
    return (
        <div className={styles.containerx}>
            <div className={styles.boxcontainer}>
            <div className={styles.box}> 
                <p className={styles.quantity}>{dummyData.waterFiltersSold}</p>
                <p className={styles.type}>Water Filters</p>
                <p className={styles.text}>sold this month</p>
            </div>
            <div className={styles.box}> 
                <p className={styles.quantity}>{dummyData.stovesSold}</p>
                <p className={styles.type}>Stoves</p>
                <p className={styles.text}>sold this month</p>
            </div>
            </div>

            <div className={styles.bar}>
                <NotificationBar notifications={dummyData.notifications} />
            </div>

            
        </div>
    )
}

export default Dash;