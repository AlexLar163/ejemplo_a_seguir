<template>
  <v-app>
    <ec-header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import EcHeader from "./components/EcHeader.vue";
export default {
  name: "App",
  components: { EcHeader },
};
</script>
