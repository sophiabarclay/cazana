<template>
  <section>
    <hr />
    <div v-if="event.passed" class="detail-passed">
      <span class="detail-title">Odometer: </span>
      <span>{{ formattedValue }} {{ unit }}</span>
    </div>
    <div v-if="event.expiryDate" class="detail-passed">
      <span class="detail-title">Expires: </span>
      <span>
        {{ getFormattedDate(event.expiryDate) }}
      </span>
    </div>
    <!-- {{ event }} -->
    <div v-if="!event.passed && event.rfcAndComments">
      <p class="detail-title">Comments:</p>
      <p
        v-for="(comment, idx) in event.rfcAndComments"
        :key="idx"
        v-html="comment.text"
      />
    </div>
  </section>
</template>

<script>
import DateHelper from "@/mixins/DateHelper";

export default {
  name: "MotEvent",
  mixins: [DateHelper],
  props: {
    event: {
      type: Object,
      required: true
    }
  },
  computed: {
    unit() {
      return this.event.odometer.unit === "mi" ? "miles" : "";
    },
    formattedValue() {
      return this.event.odometer.value
        .toString()
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    }
  }
};
</script>

<style scoped lang="scss">
section {
  @media (max-width: 620px) {
    font-size: 14px;
  }
  hr {
    color: #f5f5f5;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    padding: 0;
    background-color: #f5f5f5;
    border: none;
    display: block;
    height: 2px;
    margin-bottom: 20px;
    margin-top: 0;
  }
  .detail {
    &-title {
      font-family: "SegoeUI";
      font-weight: 800;
    }
    &-passed {
      margin-bottom: 8px;
    }
  }
}
</style>
