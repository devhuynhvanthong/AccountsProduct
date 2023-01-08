import Image from 'next/image'
import styles from '../../../styles/globals.module.scss'
export default function FooterComponent(props){
    return(
        <>
            <div className={props.className}>
                <img src='images/logo_horizontal.png' className={styles.logoFooter} />
            </div>
        </>
    )
}