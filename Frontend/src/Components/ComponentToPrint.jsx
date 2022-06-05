import React, { useRef } from 'react'
import { render } from 'react-dom';
import { useReactToPrint } from 'react-to-print';
import { InternDiary } from './InternDiary';

export const ComponentToPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
      });
    return (
        <div>
            <button onClick={handlePrint}>Print this out!</button>
            <InternDiary ref = {componentRef} />
        </div>
  )
}

// render(<ComponentToPrint/>, document.getElementById("#root"))