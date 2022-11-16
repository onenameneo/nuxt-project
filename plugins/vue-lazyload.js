import VueLazyLoad  from 'vue-lazyload'

export default defineNuxtPlugin(({ vueApp }) => {
	vueApp.use(VueLazyLoad , {
		lazyComponent: true,
		filter: {
			progressive(listener, options) {
				// 实现渐近式加载图片（先加载模糊的图）
				listener.el.setAttribute('lazy-progressive', 'true')
				// 先加载模糊的图（这个地方是替换图片中的宽度与高度大小）
				let loadingUrl = listener.src.replace(/w_[0-9]+/g, 'w_5')
				loadingUrl = loadingUrl.replace(/h_[0-9]+/g, 'h_5')
				listener.loading = loadingUrl
			}
		}
	})
})
