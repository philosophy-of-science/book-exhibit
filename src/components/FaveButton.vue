<template>
  <div class="fave-button__container">
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
      Favorites <span>{{ this.$store.state.faves.length }}</span>
    </button>
    <button class="help" @click="help = !help">
      <unicon
        name="question-circle"
        width="1.25em"
        height="1.25em"
        fill="var(--silver-500)"
      />
    </button>
    <transition name="slide-up">
      <div class="help-text" v-if="help">
        <p>
          Click bookmark icons to create a favorites list. Access favorites by
          clicking "FAVORITES" below.
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      help: false,
    };
  },

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
.fave-button__container {
  z-index: 1000;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  display: flex;
  border-radius: var(--radius);
  /* overflow: hidden; */
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  transition: box-shadow 0.2s;
}

button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-half) var(--spacing);
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1;
  font-family: inherit;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  background-color: var(--red-500);
  transition: background-color 0.2s;
}
/* 
button:first-child {
  padding
} */

button:hover {
  background-color: var(--red-600);
}

.fave-button__container:active {
  box-shadow: var(--shadow);
}

button div {
  position: relative;
  top: 1px;
  margin-right: 0.5em;
}

button:first-child {
  border-top-left-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
}

.help {
  border-left: 1px solid var(--charcoal-600);
  border-top-right-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}

.help div {
  margin-right: 0;
}

button span {
  color: var(--silver-500);
  margin-left: 0.5em;
  font-variant-numeric: tabular-nums;
}

.help-text {
  position: absolute;
  top: -1rem;
  left: 0;
  padding: var(--spacing);
  transform: translate(0, -100%) scale(1);
  background: var(--red-500);
  font-size: 0.8rem;
  box-shadow: var(--shadow);
  color: #fff;
  border-radius: var(--radius);
}

.help-text::after {
  bottom: 0;
  left: 50%;
  border-style: solid;
  border-width: 1rem;
  border-color: var(--red-500) transparent transparent transparent;
  position: absolute;
  content: "";
  transform: translate(-50%, 100%);
}

/* Transition  */
@media (prefers-reduced-motion: no-preference) {
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

  /* Transition  */
  .slide-up-enter-active {
    transition: opacity 0.4s, transform 0.3s ease-out;
  }

  .slide-up-leave-active {
    transition: opacity 0.4s, transform 0.3s ease-in;
  }

  .slide-up-enter,
  .slide-up-leave-to {
    opacity: 0;
    transform: translate(0, -65%) scale(0.7);
  }
}
</style>