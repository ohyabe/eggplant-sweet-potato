<script >
import { RouterLink, RouterView } from 'vue-router'
export default{
components:{
    RouterLink
}
}
</script>

<template>
  
  <div class="headerArea">
  <RouterLink to="/fetch">fetch</RouterLink>
  <RouterLink to="/Activity">Activity</RouterLink>
  <RouterLink to="/tainanMap">tainanMap</RouterLink>
  
</div>
</template>


<style scoped>
</style>
