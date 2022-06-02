import React from 'react'
import styles from "../CSS/InternTimeline.module.css"

export const ShowData = ({date, data}) => {
    return (
    <div className={styles.boxWrapper}>
        <p className={styles.date}>{date}</p>
        {data.map((data)=><div className={styles.box}>
            <img src={data.imgType} className={styles.taskImage} alt="Task Done"/>
            <p className={styles.task}>{data.task}</p>
            <p className={styles.doneDate}>{data.doneDate}</p>
        </div>)}
    </div>
  )
}
