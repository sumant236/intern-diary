import React from 'react'
import { ShowData } from './ShowData'
import styles from "../CSS/InternTimeline.module.css"

export const InternTimeline = () => {
  return (
    <div className={styles.container}>
        <h4>Internship Timeline</h4>
        <div>
            
            <ShowData date={"Jul 1"} data={[{imgType: "https://demo.internset.com/img/icons/ID-document-submited.svg", task: "You submitted the required ID documents", doneDate: "Jul 18, 11:19 AM"}, {imgType: "https://demo.internset.com/img/icons/sign-offer-letter.svg", task: "You signed the offer letter", doneDate: "Jul 18, 11:25 AM"}, {imgType: "https://demo.internset.com/img/icons/Internship-Start-Date.svg", task: "Your internship start date was updated to August 03", doneDate: "Jul 18, 11:25 AM"}]}/>
            
            <ShowData date= {"Aug 12"} data={[{imgType: "https://demo.internset.com/img/icons/week-started.svg", task: "First week: Started", doneDate: "Aug 12 10:30 AM"}]}/>
            
            <ShowData date={"Aug 14"} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 1", doneDate: "Aug 14, 5:30 PM"}]}/>
            
            <ShowData date={"Aug 15"} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 2", doneDate: "Aug 15, 5:30 PM"}]}/>
            
            <ShowData date={"Aug 16"} data={[{imgType: "https://demo.internset.com/img/icons/Resubmission-request.svg", task: "Your supervisor requested resubmission for Day 1", doneDate: "Aug 16, 8:30 PM"}]}/>
            
            <ShowData date={"Aug 17"} data={[{imgType: "https://demo.internset.com/img/icons/Resubmission-request.svg", task: "You resubmitted the work for Day 1", doneDate: "Aug 17, 4:12 PM"}]}/>
            
            <ShowData date={"Aug 18"} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 2 is marked as complete", doneDate: "Aug 18, 8:21 PM"}]}/>
            
            <ShowData date={"Aug 18"} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 3", doneDate: "Aug 19, 2:05 PM"},{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 4", doneDate: "Aug 19, 4:36 PM"}, {imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 5", doneDate: "Aug 19, 7:16 PM"}]}/>
            
            <ShowData date={"Aug 20"} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 1 is marked as complete", doneDate: "Aug 20, 6:11 PM"},{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 3 is marked as complete", doneDate: "Aug 20, 6:29 PM"}, {imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 4 is marked as complete", doneDate: "Aug 20, 6:51 PM"}, {imgType: "https://demo.internset.com/img/icons/Resubmission-request.svg", task: "Your supervisor requested resubmission for Day 5", doneDate: "Aug 20, 6:51 PM"}, {imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You resubmitted the work for Day 5", doneDate: "Aug 20, 9:08 PM"}]}/>
            
            <ShowData date={"Aug 21"} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 5 is marked as complete", doneDate: "Aug 21, 10:11 AM"}]}/>
        </div>
        <div className={styles.user}>
                <img className={styles.userImg} src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-user-circle-thin.png" alt="" />
                <p>Your first week is over.</p>
        </div>
        <div>
        
        <ShowData date={"Aug 25"} data={[{imgType: "https://demo.internset.com/img/icons/Resubmission-request.svg", task: "Your supervisor requested resubmission for Day 7", doneDate: "Aug 25, 8:05 AM"}]}/>
        
        <ShowData date={"Aug 26"} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You resubmitted the work for Day 7", doneDate: "Aug 26, 7:58 PM"}]}/>
        
        <ShowData date={"Aug 28"} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 8", doneDate: "Aug 28, 3:18 PM"}]}/>
        
        <ShowData date={"Aug 29"} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 7 is marked as complete", doneDate: "Aug 29, 1:55 PM"}, {imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 9", doneDate: "Aug 29, 4:47 PM"}]}/>

        
        <ShowData date={"Aug 30"} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 8 is marked as complete", doneDate: "Aug 30, 11:21 AM"}, {imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 10", doneDate: "Aug 30, 3:12 PM"}, {imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 9 is marked as complete", doneDate: "Aug 30, 3:12 PM"}]}/>

        
        <ShowData date={"Aug 31"} data={[{imgType: "https://demo.internset.com/img/icons/Resubmission-request.svg", task: "Your supervisor requested resubmission for Day 10", doneDate: "Aug 31, 11:23 AM"}]}/>
        
        <ShowData date={"Sep 1"} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "You resubmitted the work for Day 10", doneDate: "Sep 1, 10:30 AM"}]}/>
        
        <ShowData date={"Sep 2"} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 10 is marked as complete", doneDate: "Sep 2, 8:22 PM  "}]}/>
        </div>
        <div className={styles.user}>
                <img className={styles.userImg} src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-user-circle-thin.png" alt="" />
                <p>Your second week is over.</p>
        </div>
        <div>
            
            <ShowData date={"Sep 2"} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 11", doneDate: "Sep 2, 9:12 PM"}, {imgType: "https://demo.internset.com/img/icons/Resubmission-request.svg", task: "Your supervisor requested resubmission for Day 11", doneDate: "Sep 2, 10:11 PM"}]}/>
            
            <ShowData date={"Sep 3"} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You resubmitted the work for Day 11", doneDate: "Sep 3, 6:30 AM"}, {imgType: "", taks: "You submitted the work for Day 12", doneDate: "Sep 3, 4:44 PM"}]}/>
            
            <ShowData date={"Sep 4"} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 11 is marked as complete", doneDate: "Sep 4, 2:38 PM"}, {imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", taks: "You submitted the work for Day 13", doneDate: "Sep 4, 9:11 AM"}]}/>
            
            <ShowData date={"Sep 5"} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 14", doneDate: "Sep 5, 3:19 PM"}]}/>
            
            <ShowData date={"Sep 6"} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 15", doneDate: "Sep 6, 11:24 AM"}]}/>
            
            <ShowData date={"Sep 7"} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 12 is marked as complete", doneDate: "Sep 7, 11:16 AM"}, {imgType: "https://demo.internset.com/img/icons/Day-completed.svg", taks: "Your work for Day 13 is marked as complete", doneDate: "Sep 7, 11:25 AM"}, {imgType: "https://demo.internset.com/img/icons/Day-completed.svg", taks: "Your work for Day 14 is marked as complete", doneDate: "Sep 7, 12:12 PM"}, {imgType: "https://demo.internset.com/img/icons/Day-completed.svg", taks: "Your work for Day 15 is marked as complete", doneDate: "Sep 7, 12:40 PM"}]}/>
        </div>
        <div className={styles.user}>
                <img className={styles.userImg} src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-user-circle-thin.png" alt="" />
                <p>Your third week is over.</p>
        </div>
        <div>
            
            <ShowData date={'Sep 8'} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 16", doneDate: "Sep 8, 4:20 PM"}]}/>
            
            <ShowData date={'Sep 9'} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 17", doneDate: "Sep 9, 9:55 AM"}, {imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 16 is marked as complete", doneDate: "Sep 9, 6:32 PM"}, {imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 17 is marked as complete", doneDate: "Sep 9, 6:59 PM"}]}/>
            
            <ShowData date={'Sep 10'} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 18", doneDate: "Sep 10, 1:49 PM"}]}/>
            
            <ShowData date={'Sep 11'} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 19", doneDate: "Sep 11, 8:02 PM"}]}/>
            
            <ShowData date={'Sep 12'} data={[{imgType: "https://demo.internset.com/img/icons/submitted-work-for-the-Day.svg", task: "You submitted the work for Day 20", doneDate: "Sep 12, 12:35 PM"}]}/>
            
            <ShowData date={'Sep 13'} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 18 is marked as complete", doneDate: "Sep 13, 4:59 PM"}, {imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 19 is marked as complete", doneDate: "Sep 13, 5:21 PM"}]}/>
            
            <ShowData date={'Sep 14'} data={[{imgType: "https://demo.internset.com/img/icons/Day-completed.svg", task: "Your work for Day 20 is marked as complete", doneDate: "Sep 14, 3:33 PM"}]}/>
        </div>
        <div className={styles.user}>
                <img className={styles.userImg} src="https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-user-circle-thin.png" alt="" />
                <p>Your fourth week is over.</p>
        </div>
        <div>
            <h5>You've completed you internship</h5>
        </div>
    </div>
  )
}
