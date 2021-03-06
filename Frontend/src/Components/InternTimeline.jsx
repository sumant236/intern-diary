import { ShowData } from './ShowData'
import styles from "../CSS/InternTimeline.module.css"

export const InternTimeline = ({userData}) => {
  return (
    <div className={styles.container}>
        <h4>Internship Timeline</h4>
        {userData.map((internDetail)=><div key={internDetail._id}><ShowData date={internDetail.date} data={internDetail.data}/></div>)}
        <div>
            <h5>You've completed you internship</h5>
        </div>
    </div>
  )
}
