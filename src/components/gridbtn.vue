<template>
  <v-row class="button_row" no-gutters>
    <v-col v-for="n in number" :key="n" :md="mdsize" :cols="size">
      <v-btn
        v-if="!(typeof btncolor == 'string')"
        style="width: 100%; font-size: x-small;"
        height="180px"
        tile
        :color="btncolor[n-1]"
        @click="$emit('change', '', btncolor[n-1])"
      >
      </v-btn>
      <v-btn
        v-else
        style="width: 100%; font-size: x-small;"
        tile
        :color="btncolor"
        @click="$emit('change', words[n-1], btncolor)"
      >
        {{ words[n-1] }}
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "grid-btn",
  props: {
    mdsize: Number,
    size: Number,
    number: Number,
    words: Array,
    btncolor: [Array, String],
  }
};
</script>

<style></style>
