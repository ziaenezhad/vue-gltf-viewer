<template>
  <div id="app">
		<gltf-viewer></gltf-viewer>
  </div>
</template>

<script>
import GltfViewer from './components/GltfViewer';

export default {
	name: 'app',
	components: {
		GltfViewer,
	}
}
</script>

<style lang="scss">
</style>
