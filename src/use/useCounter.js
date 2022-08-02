import { reactive, watch, computed, onMounted, nextTick } from "vue";

export function useCounter() {
  // const counter = ref(0), counterTitle = ref('My Counter')
  const counterData = reactive({
    count: 0,
    title: "My Counter",
  });

  watch(
    () => counterData.count,
    (newCount) => {
      // console.log('newCount', newCount)
      if (newCount === 20) alert("Way to go! You made it to 20!!");
    }
  );

  const addOrEven = computed(() => {
    if (counterData.count % 2 === 0) return "even";
    return "odd";
  });
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
    counterData.count += amount;
    await nextTick();
    console.log("do something when counter has updated in the dom");
  };
  const decreaseCounter = (amount) => {
    // counter.value--
    // counterData.count--
    counterData.count -= amount;
  };
  onMounted(() => {
    console.log("Do stuff related to App");
  });
  return { counterData, increaseCounter, decreaseCounter, addOrEven };
}
