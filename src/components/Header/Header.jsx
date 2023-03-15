import logo from '../../images/svg/Group.png'
import vector from '../../images/svg/Vector.svg'
import exit from '../../images/svg/exit.svg'

import styles from './Header.module.scss'


const Header = () => {
    

    return (
        
        <header class = "container">
            <div className={styles.container}>
                <div className={styles.logoBox}>
                    <img src={logo} alt="" />
                    <p className={styles.wallet}>WALLET</p>
                </div>
                <div className={styles.exitBox}>
                    <p className={styles.name}>Name</p> 
                    <img className={styles.vector} src={vector} height="30" alt="" />
                     <img className={styles.exit} src={exit} alt="" />
                    <button className={styles.button} type="sybmit">Exit</button>
                </div>
            </div>
        </header>)

}

export default Header