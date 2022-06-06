import React, { useState } from 'react'
import styles from "../CSS/TableContent.module.css"

export const TableContent = () => {
    const [name, setName] = useState("Ashwini Dogre");
    const [address, setAddress] = useState("9/37 Artist Village, Sector 9, Nerul, Navi Mumbai, Maharashtra, India");
    const [email, setEmail] = useState("ashwini.dongre@gmail.com");
    const [duration, setDuration] = useState("One month");
    const [startDate, setStartDate] = useState("August 03, 2021");
    const [endDate, setEndDate] = useState("September 14, 2021");
    const [supervisor, setSupervisor] = useState("Mr. Nitin Revandkar");
    const [designation, setDesignation] = useState("Team Lead - Aeronautical Department")
    const [edit, setEdit] = useState(false);

    const handleClick = () => {
        if(edit)
            setEdit(false);
        else
            setEdit(true);
    }

  return (
    <>
        {!edit?<button onClick={handleClick}>Edit Details</button>:<button onClick={handleClick}>Done</button>}
        <div className={styles.titleWrapper}>
        <tr>
            <td className={styles.tableColumn1}>Intern's Name</td>
            <td className={styles.tableColumn2}>{edit?<input type="text" value={name} onChange={(e)=>setName(e.currentTarget.value)}/>:<div>{name}</div>}</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Intern's address</td>
            <td className={styles.tableColumn2}>{edit?<input type="text" value={address} onChange={(e)=>setAddress(e.currentTarget.value)}/>:<div>{address}</div>}</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Intern's email</td>
            <td className={styles.tableColumn2}>{edit?<input type="text" value={email} onChange={(e)=>setEmail(e.currentTarget.value)}/>:<div>{email}</div>}</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Duration of internship</td>
            <td className={styles.tableColumn2}>{edit?<input type="text" value={duration} onChange={(e)=>setDuration(e.currentTarget.value)}/>:<div>{duration}</div>}</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Start date of internship</td>
            <td className={styles.tableColumn2}>{edit?<input type="text" value={startDate} onChange={(e)=>setStartDate(e.currentTarget.value)}/>:<div>{startDate}</div>}</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>End date of internship</td>
            <td className={styles.tableColumn2}>{edit?<input type="text" value={endDate} onChange={(e)=>setEndDate(e.currentTarget.value)}/>:<div>{endDate}</div>}</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1}>Work supervisor</td>
            <td className={styles.tableColumn2}>{edit?<input type="text" value={supervisor} onChange={(e)=>setSupervisor(e.currentTarget.value)}/>:<div>{supervisor}</div>}</td>
        </tr>
        <tr>
            <td className={styles.tableColumn1} style={{borderBottom: "1px solid grey"}}>Supervisor's Designation</td>
            <td className={styles.tableColumn2} style={{borderBottom: "1px solid grey"}}>{edit?<input value={designation} onChange={(e)=>setDesignation(e.currentTarget.value)}/>:<div>{designation}</div>}</td>
        </tr>
        </div>

    </>
  )
}
