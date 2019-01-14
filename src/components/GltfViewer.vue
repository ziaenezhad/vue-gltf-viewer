<template>
    <div></div>
</template>
<script>
const Viewr = require('../../lib/viewer');
const dat = require('dat.gui');

export default {
	props: ['url'],
	mounted() {
		this.viewer = new Viewr(this.$el, {});
		dat.GUI.toggleHide();
		this.viewer.load(`http://localhost:8080/models/monster_energy_drink/scene.gltf`);
	},
	data() {
		return {
			viewer: null,
		};
	}
}
</script>
<style lang="scss" scoped>
div {
	min-height: 512px;
	min-width: 512px;
	width: 100%;
	height: 100%;
}
</style>


