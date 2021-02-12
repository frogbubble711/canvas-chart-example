import React, { useRef } from 'react'
import CanvasJSReact from 'assets/canvasjs.react'
import Calculation from '../../components/Calculation'
import ContextMenu from '../../components/ContextMenu'

import './GraphicView.scss'

var CanvasJSChart = CanvasJSReact.CanvasJSChart

const GraphicView = () => {
  const caseInArray = [
    { x: new Date(2020, 11), y: 10000, toolTipContent: "${y}" },
    { x: new Date(2021, 0), y: 10000, toolTipContent: "${y}" },
    { x: new Date(2021, 1), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2021, 2), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2021, 3), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2021, 4), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2021, 5), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2021, 6), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2021, 7), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2021, 8), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2021, 9), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2021, 10), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2021, 11), y: 20000, toolTipContent: "${y}" },

    { x: new Date(2022, 0), y: 10000, toolTipContent: "${y}" },
    { x: new Date(2022, 1), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2022, 2), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2022, 3), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2022, 4), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2022, 5), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2022, 6), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2022, 7), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2022, 8), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2022, 9), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2022, 10), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2022, 11), y: 20000, toolTipContent: "${y}" },

    { x: new Date(2023, 0), y: 10000, toolTipContent: "${y}" },
    { x: new Date(2023, 1), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2023, 2), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2023, 3), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2023, 4), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2023, 5), y: 15000, toolTipContent: "${y}" },
    { x: new Date(2023, 6), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2023, 7), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2023, 8), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2023, 9), y: 15200, toolTipContent: "${y}" },
    { x: new Date(2023, 10), y: 15200, toolTipContent: "${y}" },
  ]

  const options = {
    animationEnabled: true,
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
    contextMenu: {
      selector: "div",
      items: {
        print: {
          name: "Print",
        },
        saveAsJPEG: {
          name: "Save as JPEG",
        },
        saveAsPNG: {
          name: "Save as PNG",
        },
      },
    },
    data: [
      {
        name: "Cash in",
        type: "spline",
        showInLegend: true,
        dataPoints: caseInArray
      },
      {
        name: "Cash out",
        type: "spline",
        showInLegend: true,
        axisYType: "secondary",
        dataPoints: [
          { x: new Date(2020, 11), y: 12000, toolTipContent: "${y}" },
          { x: new Date(2021, 4), y: 13000, toolTipContent: "${y}" },
          { x: new Date(2021, 5), y: 16000, toolTipContent: "${y}" },
          { x: new Date(2021, 11), y: 22000, toolTipContent: "${y}" },
          { x: new Date(2023, 10), y: 23000, toolTipContent: "${y}" },
        ],
      },
      {
        name: "Cash in Bank",
        type: "spline",
        showInLegend: true,
        dataPoints: [
          { x: new Date(2020, 11), y: 58000, toolTipContent: "${y}" },
          { x: new Date(2021, 4), y: 46000, toolTipContent: "${y}" },
          { x: new Date(2021, 5), y: 35000, toolTipContent: "${y}" },
          { x: new Date(2021, 7), y: 0, toolTipContent: "${y}" },
          { x: new Date(2023, 10) },
        ],
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
