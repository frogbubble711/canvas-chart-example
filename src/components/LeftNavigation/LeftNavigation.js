import React from 'react'

import './LeftNavigation.scss'

const LEFT_NAV_MENUS = [
  { value: 'Overview' },
  { value: 'Grow' },
  { value: 'Burn' },
  { value: 'Raise' },
  { value: 'Analyze' },
]

const LeftNavigation = ({ children }) => {
  return (
    <div className="window">
      <div className="menu">
        {LEFT_NAV_MENUS.map((item, key) => {
          return <div key={key}>{item.value}</div>
        })}
      </div>
      {children}
    </div>
  )
}

export default LeftNavigation
