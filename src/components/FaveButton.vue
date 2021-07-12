<template>
  <div>
    <button @click="showFaves">
      <transition name="fade" mode="out-in">
        <unicon
          v-if="!faves"
          name="bookmark"
          height="1.25em"
          width="1.25em"
          fill="var(--silver-500)"
          key="noFave"
        />
        <unicon
          v-else
          name="bookmark"
          icon-style="monochrome"
          width="1.25em"
          height="1.25em"
          fill="var(--silver-500)"
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
  display: inline-flex;
  z-index: 1000;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  align-items: center;
  padding: var(--spacing-half) var(--spacing);
  border: none;
  border-radius: var(--radius);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;
  font-family: inherit;
  text-transform: uppercase;
  cursor: pointer;
  background-color: var(--red-500);
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: background-color 0.2s, box-shadow 0.2s;
}

button:hover {
  background-color: var(--red-600);
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

button:active {
  box-shadow: var(--shadow);
}

button div {
  position: relative;
  top: 1px;
  margin-right: 0.5em;
}

button span {
  color: var(--silver-500);
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