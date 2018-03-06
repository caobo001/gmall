<template>
	<div class="content">
		<Slider></Slider>
		<div class="newsList">
			<ul>
				<li v-for="(item,index) in arrList" >
					<router-link :to="'article/'+item.id">
						<h2>{{index}}.{{item.title}}</h2>
						<p>{{item.detail}}</p>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Slider from './Slider.vue';
	export default {
		data(){
			return {
				arrList:[]
			};
		},
		components:{
			Slider
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			 fetchData(){
			 	var self = this;
				$.ajax({
					type: 'GET',
					url : '/js/index.json',
					dataType:'json',
					success : function (res) {
						self.arrList = res.data;
						$('#load').hide();
					},
					beforeSend:function(){
						$('#load').show();
					}
				});
			}
		}
	};
</script>
<style scoped>
	@import '../assets/css/index.css';
</style>
<!-- fetchData(){
				$.ajax({
					type: 'POST',
					url : '../src/data/index.txt',
					dataType:'json',
					success : function (text) {
						alert(1);
					},
					error:function(){
						alert(2);
					},
					async : true
				});
			} -->