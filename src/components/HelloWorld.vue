<template>
  <div class="flex items-center navbar bg-white gap-2">
        <img src="@/assets/menu.svg" class="h-4 image mb-1" />
        <img src="@/assets/Dynematrix.svg" alt="image" class="h-7 icon"/>
  </div>
  <div class="flex h-screen maincontainer ">
        <div class="flex flex-col bg-primary leftcontainer  p-2.5">
            <div class="flex flex-row gap-2 ">
                <img src="@/assets/Tasks.svg"/>
                <span class="text-white">Audit</span>
            </div>
            <div class="flex flex-row gap-2 mt-2.5">
                <img src="@/assets/Tasks.svg"  />
                <span class="text-white  ">My Tasks</span>
            </div>
            <div class="flex flex-row gap-2 mt-2.5">
                <img src="@/assets/Tasks.svg"  />
                <span class="text-white">My Findings</span>
            </div>
            <div class="flex flex-row gap-2 mt-2.5 ">
                <img src="@/assets/Tasks.svg"  />
                <span class="text-white">My Finding Tasks</span>
            </div>
        </div>
        <div class="p-4 rightcontainer  bg-whitegrey">
          <div class="formdiv flex flex-row ">
          <form @submit.prevent="submitForm" class="border form-container p-4 ">
            <div class="text-xl font-bold text-center mb-4">Details Form </div>
            <div class="mb-4 flex flex-row gap-4" >
              <label class="w-1/6 font-bold">Name:</label>
              <input v-model="form.name" type="text" class="border h-8 w-3/6" />
              <span v-if="v$.name.$error" class="error w-2/6">{{ v$.name.$errors[0].$message }}</span>
            </div>
            <div class="mb-4 flex flex-row gap-4">
              <label class="w-1/6 font-bold">Email:</label>
              <input v-model="form.email" type="email" class="border h-8 w-3/6" />
              <span v-if="v$.email.$error" class="error w-2/6">{{ v$.email.$errors[0].$message }}</span>
            </div>
            <div class="mb-4 flex flex-row gap-4">
              <label class="w-1/6 font-bold">Password:</label>
              <input v-model="form.password" type="password" class="border h-8 w-3/6" />
              <span v-if="v$.password.$error" class="error w-2/6">{{ v$.password.$errors[0].$message }}</span>
            </div>
            <div class="flex justify-center ">
              <button type="submit" class=" border px-2 py-1 bg-primary text-center text-white">Submit</button>
            </div>
            
          </form>
          </div>
          <AppFooter />
         
          
        </div>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
// import Footer from "@/components/vueFooter.vue";
import AppFooter from "./MyFooter.vue"
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data(){
    return {
      names:"sathvika"
    };
  },
  components:{
        AppFooter,
    },
    setup() {
    const form = reactive({
      name: '',
      email: '',
      password: ''
    });

    const rules = {
      name: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) }
    };

    const v$ = useVuelidate(rules, form);

    const submitForm = () => {
      v$.value.$validate();
      if (!v$.value.$error) {
        alert('Form submitted successfully!');
      }
    };

    return { form, v$, submitForm };
  }
});
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
.navbar{
    position: fixed;
    top: 0;
    width: 100%;
    height: 8%;
    z-index: 1000;
    background-color: white; 
    padding-left: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
}
.image{
    font-Size: 24px,
}
.maincontainer{
  height:92vh ;
  font-size: 16px;
  font-family: "Open Sans";
  margin-top: 46px;
}
.leftcontainer{
  width: 14%;
  font-family: "Open Sans";
}
.rightcontainer{
  width: 86%;
  font-family: "Open Sans";
}
.border{
 border: 1px solid #e9e9e9;
 border-radius: 4px;
}
.form-container{
 width: 50%;
 font-weight: 800px;
 background-color: white;
}
input .border{
  color: rgba(21, 42, 67,0.8);
}

</style>
