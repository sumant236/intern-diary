import React from 'react'
import styles from "../CSS/Signature.module.css"
import image from "../image/Signature.png"

export const Signature = () => {
  return (
    <div className={styles.signature}>
        <p className={styles.title}>For Air India Ltd.</p>
        <img className={styles.signatureImg} src={image} alt="" />
        <p><strong>Mr. Nitin Revandkar</strong></p>
        <p><strong>Team Lead - Aeronautical Department</strong></p>
        <footer className={styles.footerTxt}>
            <p className={styles.address}>Address: Air India Ltd., Chhatrapati Shivaji International Airport, T2, NIPTC Sahar, Andheri East, Mumbai, Maharashtra 400099</p>
            <p className={styles.website}>Website: <a className={styles.linkAdd} href="www.airindia.in">www.airindia.in</a></p>
        </footer>
    </div>
  )
}
