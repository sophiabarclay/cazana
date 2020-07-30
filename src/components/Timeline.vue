<template>
  <div>
    <header>
      <div>
        <h1 class="title">Vehicle Timeline</h1>
        <h3>Vehicle Registration Mark (VRM): {{ allData.vrm }}</h3>
      </div>
      <div class="button" @click="swapChronologicalOrder">
        Display order
        <swap-vertical fillColor="#fff" />
      </div>
    </header>
    <div v-for="(event, index) in sortedEvents" :key="index">
      <timeline-event
        :event="event"
        :isActive="activeIndeces.includes(index)"
        @changeActive="setActive(index)"
      />
    </div>
  </div>
</template>

<script>
import TimelineEvent from "@/components/TimelineEvent.vue";
import SwapVertical from "vue-material-design-icons/SwapVertical.vue";

export default {
  name: "Timeline",
  components: {
    TimelineEvent,
    SwapVertical
  },
  data() {
    return {
      chronologicalOrder: "descending",
      allData: "",
      sortedEvents: [],
      activeIndeces: []
    };
  },
  watch: {
    chronologicalOrder() {
      this.sortData();
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    swapChronologicalOrder() {
      this.chronologicalOrder === "descending"
        ? (this.chronologicalOrder = "ascending")
        : (this.chronologicalOrder = "descending");
    },
    setActive(index) {
      if (this.activeIndeces.includes(index)) {
        let idx = this.activeIndeces.indexOf(index);
        this.activeIndeces.splice(idx, 1);
      } else {
        this.activeIndeces.push(index);
      }
    },
    sortData() {
      this.sortedEvents = this.allData.events.sort((a, b) => {
        if (this.chronologicalOrder === "descending") {
          return -a.date.localeCompare(b.date);
        } else {
          return a.date.localeCompare(b.date);
        }
      });
    },
    fetchData() {
      const baseURI =
        "https://run.mocky.io/v3/6162e723-dd9c-48e1-8162-a7aa92d37591";
      this.$http.get(baseURI).then(result => {
        this.allData = result.data;
        this.allData.events.push({
          date: this.allData.firstRegistration,
          type: "FirstRegistration"
        });
        this.sortData();
      });
    }
  }
};
</script>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 40px;
  @media (max-width: 620px) {
    display: block;
    margin-bottom: 20px;
    .button {
      margin-top: 20px;
    }
  }
}
h1 {
  margin-bottom: 12px;
}
h3 {
  margin: 0;
}
</style>
