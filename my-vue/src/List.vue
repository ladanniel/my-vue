<template>
	<div id="vue_content">
		<ul class="vue_list_cell" ref="listUsers" @touchmove="bMove=true">
			<li v-for="item in userDatas">
				<p>{{item.index}}</p>
				<ul>
					<li v-on:touchend="showTel(user.tel)" v-for="user in item.users">{{user.name}}</li>
					<!-- touchstart可能在用户滑动时候弹出，和点击冲突 touchend利用开关处理-->
				</ul>
			</li>
		</ul>
		<ul class="list_cell_index" ref="listIndex">
			<li v-on:touchstart='setScroll' v-for="item in userIndex">{{item}}</li>
		</ul>
	</div>
</template>
<script>
	import myAlert from './Alert.js'
	export default {
		name:'vue-content-list',
		props:{
				'user-datas':{
						type:Array,
						default:function(){
							return []
						}
				}
			},
			//处理滑动开关
		data:function(){
			return{
				bMove:false
			}
		},
		//通过计算属性传递参数
		computed:{
			//数据存储到userIndex中
			userIndex:function(){
				return this.filterIndex(this.userDatas);
			}
		},
		methods:{
			filterIndex:function(data){
				var result = [];
				for(var i=0;i< data.length;i++){
					if(data[i].index){
						result.push(data[i].index);
					}
				}
				return result
			},
			setListCellIndex:function(){//调整样式布局
				var height = this.$refs.listIndex.offsetHeight;
				this.$refs.listIndex.style.marginTop= - height / 2 + 'px';
			},
			setScroll:function(event){
				alert('测试点击事件')
			  var iP = this.$refs.listUsers.getElementsByTagName('p');
			  //var scroll = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			  for(var i = 0; i < iP.length; i++){
				  if(iP[i].innerHTML == event.target.innerHTML){
						  document.documentElement.scrollTop = iP[i].offsetTop;
				  }
			  }
			},
			showTel:function(data){//处理滑动与点击冲突
				if(!this.bMove){
					myAlert({
						title:'呼叫',
						body:data,
						confirmBtn:function(){
							alert(1)
						},
						cancelmBtn:function(){
						document.body.removeChild(document.getElementById('vue-alert'));
						}
					})
				}else{
					this.bMove=false;
				}
			}
		},
		//在生命周期中实例化该方法
		mounted() {
			this.setListCellIndex();
		}
	}
</script>
<style>
#vue_content{position: relative;top: 40px;overflow: hidden;/* 移除隐藏*/}
#vue_content .vue_list_cell p{background: #ccc;padding-left: 10px;}
#vue_content .vue_list_cell ul li{height: 50px;line-height: 50px;border-bottom: 1px solid #ccc;padding-left: 10px;}
#vue_content .list_cell_index{position: fixed;right: 10px;top: 50%;font-size: 20px;}
#vue_content .list_cell_index li{margin: 5px 0;}
</style>
