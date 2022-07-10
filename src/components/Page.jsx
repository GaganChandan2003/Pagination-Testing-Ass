import React from 'react'

const Page = ({children,next,prev,disableNext,disablePrev}) => {
  return (
    <div>
        <button data-testid="btn" disabled={disableNext||disablePrev} onClick={next||prev}>{children}</button>
    </div>
  )
}

export default Page