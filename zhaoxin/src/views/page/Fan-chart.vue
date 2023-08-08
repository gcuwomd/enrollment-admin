<template>
  <div class="container" style="display: flex; justify-content: center">
    <div ref="pie" style="display: flex; width: 100%"></div>
  </div>
</template>

<script>
import { Pie } from "@antv/g2plot";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
// import { ref } from "vue";
export default {
  setup() {
    const pie = ref(null);
    let piePlot = null;
    let initChart = () => {
      piePlot = new Pie(pie.value, {
        appendPadding: 10,
        data: [
          { type: "网站运维部", value: 40 },
          { type: "信息化运维部", value: 25 },
          { type: "行政秘书部", value: 25 },
          { type: "网络运维部", value: 25 },
        ],
        angleField: "value",
        colorField: "type",
        radius: 0.8,
        label: { style: { fontSize: 20 } },
        legend: {
          position: "top-center",
          offsetX: 310,
          marker: { style: { r: 10 } },
        },

        interactions: [{ type: "element-active" }],
      });

      piePlot.render();
    };
    onMounted(initChart);
    return {
      pie,
    };
  },
};
</script>
