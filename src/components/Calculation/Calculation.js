import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

import './Calculation.scss'

const Calculation = () => {
  return (
    <div className='container'>
      <div className='calculationCard'>
        <div className='title'>$31660</div>
        <div>BURN RATE</div>
      </div>
      <div className='calculationCard'>
        <div className='title'>Aug 12, 2022</div>
        <div>RUNWAY</div>
      </div>
      <Button positive size="big">
        Recalculate
        <Icon name="refresh" size="small" className="iconPadding"></Icon>
      </Button>
    </div>
  )
}

export default Calculation
