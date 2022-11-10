<template>
  <div>
    <div class="wrapper">
      <StartPart />
      <NearbyPart />
    </div>
    <DockerPart />
  </div>
</template>

<script>
import StartPart from './StaticPart.vue'
import DockerPart from './DockerPart.vue'
import NearbyPart from './NearbyPart.vue'
export default {
  name: 'HomePage',
  components: { StartPart, NearbyPart, DockerPart }
}
</script>

<style lang="scss">
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .1rem .18rem;
}
</style>
