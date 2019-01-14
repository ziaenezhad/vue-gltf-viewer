<template>
  <div id="app">
	  <div class="column">
		  <gltf-viewer url="http://localhost:8080/models/monster_energy_drink/scene.gltf"></gltf-viewer>
	  </div>		
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
.column {
	width: 100%;
	height: 100vh;
}
</style>
