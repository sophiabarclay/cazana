<template>
  <section>
    <div>{{ event.previousVRM }}</div>
    <arrow-right :size="20" />
    <div>{{ event.currentVRM }}</div>
  </section>
</template>

<script>
import ArrowRight from "vue-material-design-icons/ArrowRight.vue";

export default {
  name: "PlateEvent",
  components: {
    ArrowRight
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
section {
  display: flex;
  margin-bottom: 8px;
  .material-design-icon {
    display: flex;
    align-items: center;
  }
}
.material-design-icon {
  padding: 0 8px;
}
</style>
