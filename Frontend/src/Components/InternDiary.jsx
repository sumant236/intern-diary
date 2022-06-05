import React, { useEffect, useState } from 'react'
import { InternTimeline } from './InternTimeline'
import { Logo } from './Logo'
import { Signature } from './Signature'
import { TableContent } from './TableContent'
import axios from "axios"

export const InternDiary = React.forwardRef((props, ref) => {
  const [userData, setUserData] = useState([]);
  useEffect(()=>{
    const config = {
      url: "http://localhost:8000/",
      method: "get"
    }
    axios(config)
    .then((res)=>{
      setUserData(res.data)
    })
    .catch((err)=>console.log(err));
  },[])
  return (
      <div ref={ref}>
          <Logo/>
          <hr/>
          <TableContent/>
          <InternTimeline userData = {userData}/>
          <Signature/>
      </div>
    )
  }
)