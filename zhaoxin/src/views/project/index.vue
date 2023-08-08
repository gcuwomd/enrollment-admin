<script setup lang="ts">
import Sider from '../base/Sider.vue';
</script>
<template>
    <div class="outside flex justify-content align-items">
      <div class="top flex align-items"> 
        <div class="lcon flex align-items left">
          <img src="../../images/Snipaste.png" alt="">
        </div>
        <div class="input">
          <input type="text" placeholder="请输入">
          <div>
            <img src="../../images/search.png" alt="">
          </div>
        </div>
        <div class="font">
          <img src="" alt="">
        </div>
      </div>
      <div class="under flex">
          <div class="nav flex"><Sider></Sider></div><!--导航栏-->
          <div class="data flex"><router-view></router-view></div><!--图标-->
        </div>
    </div>
</template>
<style>
@import '../../assets/css/bootstrap.min.css';
@import '../../assets/css/color.css';
@import '../../assets/css/content.css';
@import '../../assets/css/size.css';
@import '../../assets/css/style.css'
</style>