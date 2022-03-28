<template>
  <v-container fluid>
    <v-row dense>
      <v-col :cols="3" v-for="character in characters" :key="character.id">
        <ec-card :character="character" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EcCard from "@/components/EcCard.vue";
import Api from "@/api";
export default {
  data() {
    return { characters: [] };
  },
  async created() {
    this.characters = await this.getcharacters();
  },
  methods: {
    getcharacters() {
      return Api.getData();
    },
  },
  components: { EcCard },
};
</script>

<style>
</style>