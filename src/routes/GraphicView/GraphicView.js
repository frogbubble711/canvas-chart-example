import React, { useRef, useState } from 'react'
import CanvasJSReact from 'assets/canvasjs.react'
import Calculation from '../../components/Calculation'
import ContextMenu from '../../components/ContextMenu'

import './GraphicView.scss'

var CanvasJSChart = CanvasJSReact.CanvasJSChart

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

let currentYear = 2020
const months = [11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const caseInStartValue = 11000
const caseOutStartValue = 12000
const caseInBankStartValue = 8000000

const handleMouseOut = (e) => {
  if (!e.chart.isMouseDown)
    e.chart.draggingDataPoint = null
}

const handleMouseOver = (e) => {
  e.chart.draggingDataPoint = e.dataPoint
}

const getViewport = (e) => {
  let currentAxisY = e.axisY[0]
  // e.chart.draggingDataPoint.axisYType ? e.axisY2[0] : e.axisY[0]
  let currentOptionsAxis = e.chart.options.axisY
  // e.chart.draggingDataPoint.axisYType ?
  // e.chart.options.axisY2 : e.chart.options.axisY
  if (e.chart.isMouseDown && e.chart.draggingDataPoint) {
    e.chart.draggingDataPoint.y = (currentAxisY.viewportMaximum - e.chart.draggingDataPoint.y) >
      (e.chart.draggingDataPoint.y - currentAxisY.viewportMinimum) ?
      currentAxisY.viewportMaximum : currentAxisY.viewportMinimum
  }

  if (!currentOptionsAxis)
    currentOptionsAxis = {}

  currentOptionsAxis.viewportMinimum = currentOptionsAxis.viewportMaximum = null
  e.chart.isMouseDown = false
  e.chart.draggingDataPoint = null
}

const GraphicView = () => {
  const [caseInGrowthRate, setCaseInGrowthRate] = useState(1.2)
  const [caseOutGrowthRate, setCaseOutGrowthRate] = useState(1.2)
  const [caseInBankGrowthRate, setCaseInBankGrowthRate] = useState(1.2)

  const caseInArray = months.map((item, key) => {
    if (item === 0) {
      currentYear++
    }
    return {
      x: new Date(currentYear, item),
      y: Math.floor(caseInStartValue * Math.pow(caseInGrowthRate, key + 1)),
      toolTipContent: "${y}"
    }
  })

  currentYear = 2020

  const caseOutArray = months.map((item, key) => {
    if (item === 0) {
      currentYear++
    }
    return {
      x: new Date(currentYear, item),
      y: Math.floor(caseOutStartValue * Math.pow(caseOutGrowthRate, key + 1)),
      axisYType: "secondary",
      toolTipContent: "${y}"
    }
  })

  currentYear = 2020

  const caseInBankArray = months.map((item, key) => {
    if (item === 0) {
      currentYear++
    }
    return {
      x: new Date(currentYear, item),
      y: Math.floor(caseInBankStartValue / Math.pow(caseInBankGrowthRate, key + 1)),
      toolTipContent: "${y}"
    }
  })

  const [caseIn, setCaseIn] = useState(caseInArray)
  const [caseOut, setCaseout] = useState(caseOutArray)
  const [caseInBank, setCaseInBank] = useState(caseInBankArray)

  const options = {
    animationEnabled: true,
    isMouseDown: false,
    axisX: {
      valueFormatString: "M",
      title: "2020",
      interval: 1,
      intervalType: "month",
    },
    axisY2: {
      prefix: "$",
      gridThickness: 0,
      stripLines: [
        {
          value: 0,
          showOnTop: true,
          color: "gray",
          thickness: 2,
        },
      ],
    },
    axisY: {
      prefix: "$ ",
      gridThickness: 0,
      stripLines: [
        {
          value: 0,
          showOnTop: true,
          color: "gray",
          thickness: 2,
        },
      ],
    },
    legend: {
      horizontalAlign: "center",
      verticalAlign: "top",
      fontSize: 15,
    },
    zoomEnabled: true,
    zoomType: "y",
    rangeChanging: getViewport,
    data: [
      {
        name: "Cash in",
        type: "spline",
        // mousedown: handleMouseDown,
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
        showInLegend: true,
        dataPoints: caseIn
      },
      {
        name: "Cash out",
        type: "spline",
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
        // axisYType: 'secondary',
        showInLegend: true,
        dataPoints: caseOut
      },
      {
        name: "Cash in Bank",
        type: "spline",
        mouseover: handleMouseOver,
        mouseout: handleMouseOut,
        showInLegend: true,
        dataPoints: caseInBank
      },
    ],
  }

  const containerRef = useRef(null)

  const menuItems = [
    {
      text: "Change Growth Rate",
      onClick: () => {
        console.log("clicked!")
      },
    },
    {
      text: "Change Values",
      onClick: () => {
        console.log("change values clicked!")
      },
    },
  ]

  return (
    <div className="chart" ref={containerRef}>
      <Calculation />
      <CanvasJSChart options={options} />
      <ContextMenu parentRef={containerRef} items={menuItems} />
    </div>
  )
}

export default GraphicView
