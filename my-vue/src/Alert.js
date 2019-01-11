import Vue from 'vue'
import App from './App'
import Alert from './Alert.vue'
		//	弹窗动态创建组件
	var myAlert =(function(){
		var defa = {
			title:'弹窗',
			body:'',
			confirmBtn:null,
			cancelmBtn:null
		};
		//继承模板
		var mycomponet = Vue.extend(Alert);
		//接收配置和配置参数
		return function(config){
			for(var attr in config){
				defa[attr] = config[attr];
			}
			var vm = new mycomponet({
				el:document.createElement('div'),
				data:{
					customer_title : defa.title,
					customerBody : defa.body,
					confirmBtn : defa.confirmBtn,
					cancelmBtn : defa.cancelmBtn
				}
			});
			document.body.appendChild(vm.$el)
		}
		//展示弹窗
	
	})();
//对外提供一个借口
export default myAlert;