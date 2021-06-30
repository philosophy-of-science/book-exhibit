<template>
  <div>
    <button @click="showFaves">
      <unicon
        v-if="!faves"
        name="favorite"
        height="2rem"
        width="2rem"
        fill="var(--charcoal-400)"
      />
      <unicon
        v-if="faves"
        name="favorite"
        icon-style="monochrome"
        width="2rem"
        height="2rem"
        fill="var(--teal-500)"
      />
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    faves() {
      return this.$store.state.faves.length;
    },
  },
  methods: {
    showFaves() {
      this.$store.commit("toggleFaves");
    },
  },
};
</script>

<style scoped>
button {
  display: flex;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  justify-content: center;
  align-items: center;
  padding: calc(var(--padding) / 2);
  border: 1px solid var(--silver-600);
  border-radius: 50%;
  color: var(--charcoal);
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
  background: none;
  background: rgba(235, 235, 235, 0.25);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s, box-shadow 0.2s;

  backdrop-filter: blur(10px);
}

button:hover {
  background-color: rgba(235, 235, 235, 0.95);
}

button:active {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>