import Vue from 'vue'
import {
  Modal,
  Button,
  Layout,
  Menu,
  Icon,
  Breadcrumb
} from 'ant-design-vue'

const {
  Sider,
  Header,
  Content,
  Footer,
} = Layout


Vue.component(Layout.name, Layout)
Vue.component(Sider.name, Sider)
Vue.component(Header.name, Header)
Vue.component(Content.name, Content)
Vue.component(Footer.name, Footer)

Vue.component(Menu.name, Menu)
Vue.component(Menu.Item.name, Menu.Item)
Vue.component(Menu.SubMenu.name, Menu.SubMenu)

Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item)

Vue.component(Icon.name, Icon)
Vue.component(Button.name, Button)
Vue.component(Modal.name, Modal)