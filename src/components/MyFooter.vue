<template>
  <footer class="footer  fixed bottom-0 z-50 h-10 border-t flex flex-row items-center  justify-center  border-lightgrey bg-white ">
    <div class=" p-2">
      <h1 class="text-xs font-bold">© {{year}} Crystalline Software Technologies Pvt. Ltd</h1>
    </div>
  </footer>
</template>

<style scoped>
.footer{
  width: 100%;
  font-family: "Open Sans";
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',  // multi-word component name
  data() {
    return {
      year: '2025',
    };
  },
});
</script>
