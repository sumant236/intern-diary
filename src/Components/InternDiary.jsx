import React from 'react'
import { InternTimeline } from './InternTimeline'
import { Logo } from './Logo'
import { Signature } from './Signature'
import { TableContent } from './TableContent'

export const InternDiary = () => {
  return (
    <div>
        <Logo/>
        <hr/>
        <TableContent/>
        <InternTimeline/>
        <Signature/>    
    </div>
  )
}
