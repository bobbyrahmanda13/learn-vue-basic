<!-- <script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
}
</script> -->

<!-- <script>
import { ref } from 'vue'

export default {
  setup() {
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }
    const decreaseCounter = () => {
      counter.value--
    }

    return {
      counter, increaseCounter, decreaseCounter
    }
  }
}
</script> -->
<script setup>
/* Import */
// import { ref } from 'vue'
// import { reactive, computed } from 'vue'
// import { reactive, computed, watch, onMounted, onBeforeMount, onBeforeUnmount, onUnmounted, onActivated, onDeactivated } from 'vue'
// import { reactive, computed, watch, onBeforeUpdate, onUpdated } from 'vue'
import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue'
// import vAutofocus
import { vAutofocus } from '@/directives/vAutofocus'

/* app title */
// non reactive data 
const appTitle = 'My Amazing Counter App'

onMounted(() => {
  console.log('Do stuff related to App')
})

/* counter */
// const counter = ref(0), counterTitle = ref('My Counter')
const counterData = reactive({
  count: 0,
  title: 'My Counter'
})

watch(() => counterData.count, (newCount) => {
  // console.log('newCount', newCount)
  if (newCount === 20) alert('Way to go! You made it to 20!!')
})

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) return 'even'
  return 'odd'
})
/* const increaseCounter = amount => {
  // console.log(amount)
  // counter.value++
  // counterData.count++
  // counterData.count = counterData.count + amount => counterData.count += amount 
  counterData.count += amount
} */

/* const increaseCounter = (amount, e) => {
  console.log(e)
  counterData.count += amount */
/* this.$nextTick(() => {  //=> nextTick untuk option api 
  // do something after he dom has updated
})
nextTick(() => {
  console.log('do something when counter has updated in the dom')
})
} */
// nextTick is async function 
const increaseCounter = async (amount) => {
  // console.log(e)
  counterData.count += amount
  await nextTick()
  console.log('do something when counter has updated in the dom')
}
const decreaseCounter = amount => {
  // counter.value--
  // counterData.count--
  counterData.count -= amount
}

const appTitleRef = ref(null)
onMounted(() => {
  // console.log(appTitleRef.value)
  // console.log('Do stuff related to Counter')
  console.log(`The App title is ${appTitleRef.value.offsetWidth}px wide!"`)
})

// life cycle hooks
/* onBeforeMount(() => {
  console.log('onBeforeMount')
})
onMounted(() => {
  console.log('onMounted')
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount')
})
onUnmounted(() => {
  console.log('onUnmounted')
})

// Activated Hooks
onActivated(() => {
  console.log('onActivated')
})
onDeactivated(() => {
  console.log('onDeactivated')
}) */

// Update Hooks
/* onBeforeUpdate(() => {
  console.log('onBeforeUpdate')
})
onUpdated(() => {
  console.log('onUpdated')
}) */

/* local directives start */

/* const vAutofocus = {
  mounted: (el) => {
    el.focus()
    // console.log('test mounted')
  }
}// v-autofocus */

/* Local directives end */

</script>

<!-- option api -->
<!-- <script>
export default {
  date() {
    return {
      count: 0
    }
  },
  computed: {
    myComputedProperty() {
      // perform logic based on a data property
      return 'my result'
    }
  },
  watch: {
    count(newCount, oldCount) {
      if (newCount == 20) alert('sadfds')
    }
  },
  mounted() {
    // do stuff when component is loaded
    console.log('mounted')
  },
  unmounted() {
    console.log('unmounted')
  },
  directives: {
    autofocus: {
      mounted(el) {
        el.focus()
      }
    }
  }
}
</script> -->

<template>
  <div class="home">
    <!-- <h2>{{ appTitle }}</h2> -->
    <h2 ref="appTitleRef">{{ appTitle }}</h2>

    <!-- counter title using ref -->
    <!-- <h3>{{ counterTitle }} :</h3> -->
    <!-- counter title using reactive -->
    <h3>{{ counterData.title }} :</h3>

    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <!-- counter data using ref -->
      <!-- <span class="counter">{{ counter }}</span> -->

      <!-- counter data using reactive -->
      <span class="counter">{{ counterData.count }}</span>
      <!-- <button @click="increaseCounter" class="btn">+</button> -->
      <!-- <button @click="increaseCounter(1)" class="btn">+</button> -->
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h4>Edit counter title:</h4>
      <!-- <input v-model="counterTitle" type="text"> -->
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>
  </div>
</template>

  <style>
  .home {
    text-align: center;
    padding: 20px;
  }
  
  .btn,
  .counter {
    font-size: 40px;
    margin: 10px;
  }
  
  .edit {
    margin-top: 60px;
  }
  </style>

