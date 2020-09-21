<template>
  <nav>
    <a-button type="primary" @click="showModal"
      class="btn"
    >
      快速定位
    </a-button>
    <a-modal v-model="visible" title="基于routes/router.js路由配置，用于快速定位路由对应组件" @ok="handleOk">
      <p v-for="(item, index) in routerList"
        :key="index"
        @click="handleOk"
      >
        <router-link :to="item.path">[{{item.name}}]{{item.path}}</router-link>
      </p>
    </a-modal>
  </nav>
</template>

<script>
import { RouterConfig } from '@/routes/router'
const unidimensionalArr = (arr, newArr = [], parentPath) => {
  arr.forEach(({ name, path, children }) => {
    if (name && path) {
      newArr.push({ name, path: `${parentPath ? (parentPath === '/' ? parentPath : [parentPath, '/'].join('') ) :  ''}${path}` })
    }
    if (Array.isArray(children) && children.length > 0) {
      unidimensionalArr(children, newArr, path)
    }
  })
  return newArr
}
const routerList = unidimensionalArr(RouterConfig)
console.log(routerList);
export default {
  name: 'DevNav',
  data () {
    return {
      visible: false,
      routerList
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    handleOk() {
      this.visible = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn{
    position: absolute;
    right: 20px;
    top: 20px;
    z-index: 666;
  }
</style>
