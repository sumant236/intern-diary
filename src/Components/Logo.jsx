import React from 'react'
import styles from "../CSS/Logo.module.css"
export const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
        <div className={styles.imgDiv}>
            <img src="https://demo.internset.com/img/company-logo/Air-India-Limited.jpg" alt="Company Logo" className={styles.logoImg}/>
            <div className={styles.titleWrapper}>
                <h5 className={styles.title}>Aeronautical Engineering Internship</h5>
                <p className={styles.subTitle}>Air India Ltd.</p>
            </div>
        </div>
        <div className={styles.topic}><h4>Internship Diary</h4></div>
    </div>
  )
}
