<script setup lang="ts">
import { ref } from "vue";
const tableData = ref([
  {
    id: "2023xxxxxxx",
    phone: "10011333",
    name: "Tom",
    order: "1",
  },
  {
    id: "",
    name: "Tom",
    order: "1",
  },
  {
    id: "",
    name: "Tom",
    order: "1",
  },
  {
    id: "",
    name: "Tom",
    order: "1",
  },
]);
const total = ref(100);
const currentChange = (value: number) => {
  console.log(value);
};
const handleEdit = (index: number, row: any) => {
  console.log(index, row);
};
const handleDel = (index: number, row: any) => {
  console.log(index, row);
};
</script>
<template>
  <div class="container">
    <div style="margin-top: 10px">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column fixed prop="order" label="Order" width="80" />
        <el-table-column prop="id" label="Id" width="150" />
        <el-table-column prop="phone" label="Phone" width="150" />
        <el-table-column prop="name" label="Name" width="150" />
        <el-table-column prop="email" label="email" />
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDel(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      background
      layout="prev,pager,next"
      :total="total"
      @current-change="currentChange"
      class="pagination-center"
    ></el-pagination>
  </div>
</template>
<style scoped>
.container {
  width: 100%;
}

.table {
  margin: 10px 0;
}

.input-with-select {
  width: 380px;
  margin-right: 20px;
}

.pagination-center {
  margin-top: 10px;
  justify-content: center;
  align-items: center;
}
</style>
