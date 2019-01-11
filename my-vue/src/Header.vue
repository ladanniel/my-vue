<template>
	<div id="header">
		<slot name='left'></slot>{{customer_title}}
		<slot name='right'></slot>
	</div>
</template>

<script>
	export default {
		name:'vue-header',
		props:{
			'customer_title':{
				type:String,
				default:'标题'
			}
		}
	}
</script>

<style>
#header{width: 100%;height: 40px;color: #FFFFFF;text-align: center;/* 左右居中*/background: #666;line-height: 40px;/* 上下居中*/position: fixed;z-index: 12;/* 提高header的有限级别*/}
#header button{height: 100%;padding: 1 5px;}
/* 两个button分居两侧*/#header button:nth-of-type(1){float: left;}
#header button:nth-of-type(2){float: right;}
</style>
