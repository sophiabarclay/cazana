<template>
  <section
    class="event"
    @click="$emit('changeActive')"
    :class="{
      keeper:
        event.type === 'KeeperChange' || event.type === 'FirstRegistration'
    }"
  >
    <div class="header">
      <div class="header-type">
        <h1 v-if="eventType">{{ eventType }}</h1>
        <check-circle-outline
          v-if="eventType && eventType === 'MOT test' && event.passed"
          fillColor="#36B37E"
        />
        <close-circle-outline
          v-if="eventType && eventType === 'MOT test' && !event.passed"
          fillColor="#FF5630"
        />
      </div>
      <div class="header-right">
        <h3 v-if="getDate">{{ getDate }}</h3>
        <plus
          :class="[
            { active: isActive },
            {
              hide:
                event.type === 'KeeperChange' ||
                event.type === 'FirstRegistration'
            }
          ]"
        />
      </div>
    </div>
    <div class="details" :class="{ active: isActive }">
      <mot-event
        v-if="event.type === 'Mot'"
        :event="event"
        class="event-type"
      />
      <plate-event
        v-if="event.type === 'PlateChange'"
        :event="event"
        class="event-type"
      />
    </div>
  </section>
</template>

<script>
import MotEvent from "@/components/MotEvent.vue";
import PlateEvent from "@/components/PlateEvent.vue";
import CheckCircleOutline from "vue-material-design-icons/CheckCircleOutline.vue";
import CloseCircleOutline from "vue-material-design-icons/CloseCircleOutline.vue";
import Plus from "vue-material-design-icons/Plus.vue";
import DateHelper from "@/mixins/DateHelper";

export default {
  name: "TimelineEvent",
  mixins: [DateHelper],
  components: {
    MotEvent,
    PlateEvent,
    CheckCircleOutline,
    CloseCircleOutline,
    Plus
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  computed: {
    getDate() {
      return this.getFormattedDate(this.event.date);
    },
    eventType() {
      if (this.event.type === "Mot") {
        return "MOT test";
      } else if (this.event.type === "PlateChange") {
        return "Numberplate change";
      } else if (this.event.type === "KeeperChange") {
        return "Registered owner change";
      } else if (this.event.type === "FirstRegistration") {
        return "First registration date";
      } else return "";
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/styles/fonts.scss";
.header {
  font-family: "SegoeUI";
  display: flex;
  justify-content: space-between;
  &:hover {
    color: #737373;
    .material-design-icon {
      color: #363636;
    }
  }
  h1 {
    margin-right: 8px;
  }
  &-type {
    display: flex;
    .material-design-icon {
      align-self: center;
      display: flex;
      align-items: flex-end;
    }
    @media (max-width: 620px) {
      h1 {
        font-size: 16px;
      }
    }
  }
  &-right {
    display: flex;
    align-items: center;
    .material-design-icon {
      margin-left: 12px;
      display: flex;
      align-items: baseline;
      transform: rotate (0deg);
      -webkit-transition: transform 0.5s;
      -moz-transition: transform 0.5s;
      -ms-transition: transform 0.5s;
      -o-transition: transform 0.5s;
      transition: transform 0.5s;
      overflow: hidden;
    }
    .active {
      transform: rotate(45deg);
    }
    .hide {
      opacity: 0;
    }
    @media (max-width: 620px) {
      h3 {
        font-size: 14px;
      }
    }
  }
}
.event {
  padding: 0 20px;
  margin: 12px 0;
  border: solid 1px #d7d7d7;
  border-radius: 5px;
  background: #fff;
  cursor: pointer;

  &-type {
    padding-bottom: 12px;
  }
  .details {
    max-height: 0;
    -webkit-transition: max-height 0.5s;
    -moz-transition: max-height 0.5s;
    -ms-transition: max-height 0.5s;
    -o-transition: max-height 0.5s;
    transition: max-height 0.5s;
    overflow: hidden;
  }
  .active {
    max-height: 250px;
  }
}
.keeper {
  cursor: auto;
  .header {
    &:hover {
      color: #363636;
    }
  }
}
.material-design-icon {
  @media (max-width: 620px) {
    width: 16px;
  }
}
</style>
