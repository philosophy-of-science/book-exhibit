<template>
  <div>
    <button @click="showFaves">
      <transition name="fade" mode="out-in">
        <unicon
          v-if="!faves"
          name="bookmark"
          height="1.25em"
          width="1.25em"
          fill="var(--charcoal-500)"
          key="noFave"
        />
        <unicon
          v-else
          name="bookmark"
          icon-style="monochrome"
          width="1.25em"
          height="1.25em"
          fill="var(--charcoal-500)"
          key="faved"
        />
      </transition>
      Favorites

      <span>{{ this.$store.state.faves.length }}</span>
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
  right: 2rem;
  bottom: 2rem;

  backdrop-filter: blur(10px);
  padding: calc(var(--padding) / 2) var(--padding);
  border: none;
  border-radius: var(--radius);
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.5);
  color: var(--charcoal-500);
  box-shadow: var(--shadow);
  transition: background-color 0.2s;
  border: 1px solid;
  line-height: 1;
  display: inline-flex;
  align-items: center;
}

button:hover {
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: var(--shadow-lg);
}

button:active {
  box-shadow: var(--shadow);
}

button div {
  position: relative;
  /* top: 1px; */
  margin-right: 0.5em;
}

button span {
  color: var(--red-500);
  margin-left: 0.5em;
  font-variant-numeric: tabular-nums;
}

/* Transition  */
.fade-enter-active {
  transition: opacity 0.2s, transform 0.2s;
}

.fade-leave-active {
  transition: opacity 0.2s ease-in, transform 0.2s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(0.5em);
}
</style>