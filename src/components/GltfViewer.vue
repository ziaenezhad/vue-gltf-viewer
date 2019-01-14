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
		if (this.url) {
			this.viewer.load(this.url);
		}
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


