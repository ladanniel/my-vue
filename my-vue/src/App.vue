<template>
	<div id="app">
			<vue-header customer_title="通讯录" >
							<!-- 不是所有的标题栏都有两个按钮，需要进行分发处理 -->
							<button @touchstart='backBtn' slot='left' type='button'>返回</button>
							<button @touchstart='homeBtn' slot='right' type='button'>主页</button>
			</vue-header>
		 	<vue-content-list  v-bind:user-datas='userDatas'>
			</vue-content-list> 
	</div>
</template>

<script>
var userDatas = [
				{'index':'A','users':[
					{'name':'曹操','tel':'15908895071'},
					{'name':'刘玄德','tel':'15908895072'},
					{'name':'张梓琳','tel':'15908895073'}
				]},
				{'index':'B','users':[
					{'name':'陈瑶','tel':'15908895074'},
					{'name':'吾爱','tel':'15908895075'},
					{'name':'周迅','tel':'15908895076'}
				]},
				{'index':'C','users':[
					{'name':'周亚明','tel':'15908895077'},
					{'name':'周杰伦','tel':'15908895078'},
					{'name':'康佳乐','tel':'15908895079'}
				]},
				{'index':'D','users':[
					{'name':'Jackson','tel':'15908895081'},
					{'name':'猫儿','tel':'15908895082'},
					{'name':'杰克','tel':'15908895083'}
				]},
				{'index':'E','users':[
					{'name':'钟丽缇','tel':'15908895084'},
					{'name':'肖亚讯','tel':'15908895085'},
					{'name':'陈朝霞','tel':'15908895086'}
				]},
				{'index':'F','users':[
					{'name':'李文华','tel':'15908895087'},
					{'name':'赵宇','tel':'15908895088'},
					{'name':'菲菲','tel':'15908895089'}
				]}
				];
		

export default {
  name: 'app',
  data:function(){
		return{
				userDatas:userDatas
		}
	},
		methods:{
	/* 添加点击事件 */
	backBtn:function(){
		alert('测试返回按钮')
	},
	homeBtn:function(){
		alert('测试主页按钮')
	}
}
	
}
</script>
<style>
	*{margin: 0;padding: 0;}
	li{list-style: none;/* 默认点*/}
	body{height: 2000px;}
</style>

