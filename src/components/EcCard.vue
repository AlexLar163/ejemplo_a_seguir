<template>
  <v-card>
    <v-img :src="character.image" />
    <v-card-title
      class="d-inline-block text-truncate"
      style="max-width: 100%"
      >{{ character.name }}</v-card-title
    >
  </v-card>
</template>

<script>
export default {
  props: {
    character: Object,
  },
};
</script>

<style>
</style>