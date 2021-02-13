var React = require('react')
var CanvasJS = require('./canvasjs.min')
CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS

class CanvasJSChart extends React.Component {
  static _cjsContainerId = 0
  constructor(props) {
    super(props)
    this.options = props.options ? props.options : {}
    this.containerProps = props.containerProps
      ? props.containerProps
      : { width: '100%', position: 'relative' }
    this.containerProps.height =
      props.containerProps && props.containerProps.height
        ? props.containerProps.height
        : this.options.height
          ? this.options.height + 'px'
          : '400px'
    this.chartContainerId =
      'canvasjs-react-chart-container-' + CanvasJSChart._cjsContainerId++
  }
  componentDidMount() {
    //Create Chart and Render
    this.chart = new CanvasJS.Chart(this.chartContainerId, this.options)
    // var point = this.datasets[0].points[this.options.lineAtIndex]
    // var scale = this.scale
    // this.chart.ctx.beginPath()
    // this.chart.ctx.moveTo(point.x, scale.startPoint + 24)
    // this.chart.ctx.strokeStyle = '#ff0000'
    // this.chart.ctx.lineTo(point.x, scale.endPoint)
    // this.chart.ctx.stroke()

    // // write TODAY
    // this.chart.ctx.textAlign = 'center'
    // this.chart.ctx.fillText("TODAY", point.x, scale.startPoint + 12)
    this.chart.render()

    if (this.props.onRef) this.props.onRef(this.chart)
  }
  shouldComponentUpdate(nextProps, nextState) {
    //Check if Chart-options has changed and determine if component has to be updated
    return !(nextProps.options === this.options)
  }
  componentDidUpdate() {
    //Update Chart Options & Render
    this.chart.options = this.props.options
    this.chart.render()
  }
  componentWillUnmount() {
    //Destroy chart and remove reference
    this.chart.destroy()
    if (this.props.onRef) this.props.onRef(undefined)
  }
  handleMouseDown = (event) => {
    if (event.type === "mousedown") {
      this.chart.isMouseDown = true
    }
  }
  render() {
    //return React.createElement('div', { id: this.chartContainerId, style: this.containerProps })
    return <div id={this.chartContainerId} style={this.containerProps} onMouseDown={this.handleMouseDown} />
  }
}

var CanvasJSReact = {
  CanvasJSChart: CanvasJSChart,
  CanvasJS: CanvasJS,
}

export default CanvasJSReact
