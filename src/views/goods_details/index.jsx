import React from 'react'
import AppLink from 'src/component/AppLink'

class ViewsGoodsDetails extends React.Component {
  render() {
    return <div>
        <AppLink />
        <h1>hello, word! --- ViewsGoodsDetails</h1>
        <img src={require('@/assets/images/webpack.svg')} style={{ width: "100px", height: "100px" }} />
    </div>
  }
}

export default ViewsGoodsDetails