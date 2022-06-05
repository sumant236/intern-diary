import React from 'react'
import styles from "../CSS/TableContent.module.css"

export const TableContent = () => {
  return (
    <>
        <div className={styles.titleWrapper}>
        <tr>
            <td className={styles.tableColumn1}>Intern's Name</td>
            <td className={styles.tableColumn2}>Ashwini Dogre</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Intern's address</td>
            <td className={styles.tableColumn2}>9/37 Artist Village, Sector 9, Nerul, Navi Mumbai, Maharashtra, India</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Intern's email</td>
            <td className={styles.tableColumn2}>ashwini.dongre@gmail.com</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Duration of internship</td>
            <td className={styles.tableColumn2}>One month</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Start date of internship</td>
            <td className={styles.tableColumn2}>August 03, 2021</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>End date of internship</td>
            <td className={styles.tableColumn2}>September 14, 2021</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Work supervisor</td>
            <td className={styles.tableColumn2}>Mr. Nitin Revandkar</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1} style={{borderBottom: "1px solid grey"}}>Supervisor's Designation</td>
            <td className={styles.tableColumn2} style={{borderBottom: "1px solid grey"}}>Team Lead - Aeronautical Department</td>
        </tr>
        </div>

    </>
  )
}
