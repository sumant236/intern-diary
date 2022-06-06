import React, { useEffect } from 'react'
import styles from "../CSS/InternTimeline.module.css"

export const ShowData = ({date, data}) => {
    const getPageMargins = () => {
        return `@page { page-break-before: auto !important }`;
      };
    return (
        <div>
                <div className="page-break">
                <style>{getPageMargins()}</style>
                <p className={styles.date}>{date}</p>
                {data.map((data)=><div>
                    <div className={styles.box}>
                        <img src={data.imgType} className={styles.taskImage} alt="Task Done"/>
                        <p className={styles.task}>{data.task}</p>
                        <p className={styles.doneDate}>{data.doneDate}</p>
                    </div>
                        <div className={data.task==="Your work for Day 5 is marked as complete"?styles.showBox:styles.hideBox}>
                            <div className={styles.user}>
                            <img className={styles.userImg} src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-user-circle-thin.png" alt="" />
                            <p>Your first week is over.</p>
                            </div>
                        </div>
                        <div className={data.task==="Your work for Day 10 is marked as complete"?styles.showBox:styles.hideBox}>
                            <div className={styles.user}>
                            <img className={styles.userImg} src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-user-circle-thin.png" alt="" />
                            <p>Your second week is over.</p>
                            </div>
                        </div><div className={data.task==="Your work for Day 15 is marked as complete"?styles.showBox:styles.hideBox}>
                            <div className={styles.user}>
                            <img className={styles.userImg} src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-user-circle-thin.png" alt="" />
                            <p>Your third week is over.</p>
                            </div>
                        </div><div className={data.task==="Your work for Day 20 is marked as complete"?styles.showBox:styles.hideBox}>
                            <div className={styles.user}>
                            <img className={styles.userImg} src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-user-circle-thin.png" alt="" />
                            <p>Your fourth week is over.</p>
                            </div>
                        </div>
                    </div>
                )}
                </div>
        </div>
  )
}
