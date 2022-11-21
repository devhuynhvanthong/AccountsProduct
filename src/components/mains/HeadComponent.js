import Image from 'next/image'
import styles from '../../../styles/globals.module.scss'
export default function HeadComponent(){
    return(
        <>
            <div className={styles.headGroup}>
                <div className={styles.head}>
                    <img src='images/logo_horizontal.png' className={styles.logoHead} />
                </div>
            </div>
        </>
    )
}