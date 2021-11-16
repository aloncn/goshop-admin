<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <span>前往伟大的颠峰之路，必定崎岖。</span>
    </template>
    <template v-slot:copyright>
      <a>Tiny Store Managerment System</a>
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@ant-design-vue/pro-layout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
}
</script>
