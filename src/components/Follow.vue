<template>
	<div class="content mt40">
	    <div class="newsList">
	    	<ul>
	           <li v-for="(item,index) in arrList" >
					<a href="conText.html">
						<h2>{{index}}.{{item.title}}</h2>
						<p>{{item.detail}}</p>
					</a>
				</li>
	        </ul>
	    </div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrList:[]
			};
		},
		mounted(){
			this.fetchData();
		},
		methods:{
			 fetchData(){
			 	var self = this;
				$.ajax({
					type: 'GET',
					url : '/js/data/follow.json',
					dataType:'json',
					success : function (res) {
						self.arrList = res;
						$('#load').hide();
					},
					beforeSend:function(){
						$('#load').show();
					}
				});
			}
		}
	}
</script>
<style scoped>
	.mt40{
		margin-top:40px;
	}
</style>