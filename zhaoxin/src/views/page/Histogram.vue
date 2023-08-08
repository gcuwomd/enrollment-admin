<template>
  <div
    class="container"
    style="
      display: flex;
      justify-content: center;
      height: 400px;
      margin-top: 80px;
    "
  >
    <div ref="hiss"></div>
  </div>
</template>

<script lang="ts">
import { Column } from "@antv/g2plot";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  setup() {
    const data = [
      { type: "网站运维部", value: 4 },
      { type: "信息化运维部", value: 2 },
      { type: "行政秘书部", value: 2 },
      { type: "网络运维部", value: 2 },
    ];

    const hiss = ref(null);
    let initChart = () => {
      const Hisplot = new Column(hiss.value, {
        width: 500,
        data,
        padding: "auto",
        xField: "type",
        yField: "value",
        color: ["#6294fa", "#63daab", "#657798", "#f7c122"],
        seriesField: "type",
        legend: { offsetX: 35 },
        meta: {
          type: {
            alias: "部门",
          },
          value: {
            alias: "人数",
          },
        },
      });
      Hisplot.render();
    };
    onMounted(initChart);
    return {
      hiss,
    };
  },
};
</script>
