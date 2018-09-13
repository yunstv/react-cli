import connect from 'src/redux/connect'

const VIEW = Comp => {
  @connect
  class VIEWComponent extends Comp {
    constructor(props) {
      super(props)
    }
    render() {
      return super.render(this.props, this.state)
    }
  }
  return VIEWComponent
}

export default VIEW
