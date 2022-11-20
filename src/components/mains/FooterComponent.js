import Image from 'next/image'
import styles from '../../../styles/globals.module.scss'
export default function FooterComponent(){
    return(
        <>
            <div className={styles.footer}>
                <img src='images/logo_horizontal.png' className={styles.logoFooter} />
            </div>
        </>
    )
}