<template>
  <footer class="footer  fixed bottom-0 z-50 h-10 border-t  border-lightgrey bg-white ">
    <div class="flex items-center  justify-center p-2">
      <h1 class="text-xs font-bold">© {{year}} Crystalline Software Technologies Pvt. Ltd</h1>
    </div>
  </footer>
</template>

<style scoped>
.footer{
  width: 100%;
  margin-left: -16px;
  font-family: "Open Sans";
}
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',  // multi-word component name
  data() {
    return {
      year: '2025'
    };
  },
});
</script>
