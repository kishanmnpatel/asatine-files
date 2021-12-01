<template>
  <div>
    <navigation-bar></navigation-bar>
    <router-view></router-view>
    <adlte-footer></adlte-footer>
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar.vue";
import Footer from './Footer.vue';

export default {
  name: "layout",
  components: {
    "navigation-bar": NavigationBar,
    "adlte-footer": Footer,
  },
};
</script>