<template>
	<div id="vue-alert" ref="dalert">
		<div class="vue-alert-content">
			<div class="vue-alert-title">{{customer_title}}</div>
			<div class="vue-alert-body">{{customerBody}}</div>
			<div class="alert-btn">
				<button v-if="confirmBtn" v-on:touchstart="confirmBtn">确定</button>
				<button v-if="cancelmBtn" v-on:touchstart="cancelmBtn">取消</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default {  }
</script>

<style>
#vue-alert{width: 100%;height: 100%;background: rgba(0,0,0,0.5);position: fixed;left: 0;top: 0;z-index: 20;display: flex;/* 弹性盒子模型*/}
#vue-alert .vue-alert-content{width: 200px;height: 150px;background: white;border-radius: 5px;margin: auto;/* 配合盒子模型*/position: relative;}
#vue-alert .vue-alert-content .vue-alert-title{padding: 5px;border-bottom: 1px solid #ccc;}
#vue-alert .vue-alert-content .vue-alert-body{height: 50px;line-height: 50px;text-align: center;}
#vue-alert .vue-alert-button{position: absolute;/* 绝对定位之前必须给父容器相对定位*/right: 0;bottom: 0;}
#vue-alert .vue-alert-content button{margin: 25px;padding: 5px;bottom: 0px;}
</style>
