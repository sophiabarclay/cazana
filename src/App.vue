<template>
  <div id="app">
    <timeline class="main" />
  </div>
</template>

<script>
import Timeline from "./components/Timeline.vue";

export default {
  name: "App",
  components: {
    Timeline
  }
};
</script>

<style lang="scss">
@import "~@/styles/fonts.scss";

#app {
  font-family: "SegoeProSemiLight";
  min-height: 100vh;
  color: #363636;
}
.main {
  max-width: 890px;
  margin: 24px auto;

  @media (max-width: 930px) {
    margin-left: 24px;
    margin-right: 24px;
  }
}
h1 {
  margin: 20px 0;
}
p {
  margin: 0;
  padding-bottom: 8px;
}
.title {
  color: #0078bd;
  font-family: "SegoeProBold";
}
.button {
  font-family: proxima-nova, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  align-items: center;
  border: 1px solid transparent;
  display: inline-flex;
  height: 2.25em;
  line-height: 0.7;
  vertical-align: top;
  cursor: pointer;
  justify-content: center;
  padding: calc(0.375em - 1px) 0.75em;
  font-weight: 900;
  background-color: #00d1b2;
  color: #fff;
  border-radius: 290486px;
}
</style>
