import React from 'react'
import { Link } from 'react-router-dom'

export default class componentAppLink extends React.PureComponent {
  render() {
    return <div>
      <Link to="/">首页</Link>
      ---
      <Link to="/goods">商品页</Link>
    </div>
  }
}
