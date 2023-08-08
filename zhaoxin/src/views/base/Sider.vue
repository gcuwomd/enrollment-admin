<template>
  <el-row>
    <el-col>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><House /></el-icon>
            <span slot="title">统计</span>
          </template>
          <el-menu-item index="1-1"
            ><router-link to="/fan">扇形图</router-link></el-menu-item
          >
          <el-menu-item index="1-2"
            ><router-link to="/histogram">直方图</router-link></el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><User /></el-icon>
            <span>数据</span>
          </template>
          <el-menu-item index="2-1"
            ><router-link to="/sign">报名情况</router-link></el-menu-item
          >
        </el-sub-menu>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { House, User } from "@element-plus/icons-vue";
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>
