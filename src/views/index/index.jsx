import React from 'react'
import AppLink from 'src/component/AppLink'

class ViewsIndex extends React.PureComponent {
  render() {
    return <div>
        <AppLink />
        <h1>hello, word!</h1>
        <img src={require('@/assets/images/webpack.svg')} style={{ width: "100px", height: "100px" }} />
    </div>
  }
}

export default ViewsIndex