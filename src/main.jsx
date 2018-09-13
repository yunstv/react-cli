import 'src/assets/scss/common' 
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from 'src/routes'
import configureStore from 'src/redux/store'
const store = configureStore()

class App extends React.PureComponent {
  render() {
    return <Provider store={store}>
      <Routes />
    </Provider>
  }
}
ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

