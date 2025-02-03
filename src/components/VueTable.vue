<template>
  <div class="risktext">
        <div class="flex flex-row justify-between">
          <p class="font-bold text-medium">Risk-Assessment</p>
          <div class="flex flex-row justify-between gap-3">
            <button class="flex tems-center justify-center w-16  addbtn bg-primary text-white items-center flex-row rounded text-sm  gap-2">
              <img  src="@/assets/plusIcon.svg" class= "w-3 h-5" alt="addicon" />
              <p> Add</p>
            </button>
            <button
              class="border filterbtn flex h-8  items-center bg-white justify-center w-20 flex-row  text-sm gap-2"
            >
              <p>Filters</p>
              <img src="@/assets/filter.svg" class="w-3 h-6" alt="filtericon" />
            </button>
          </div>
        </div>
        <p class="text-xs mt-2 ">
          A risk assesment is a activities to identify potential hazards and analyze what could hppen if a hazard
          occurs. A bussiness impact Analysis(BIA) is the Activities for determining the potential impacts resulting
          from the interruption of time sensitive or critical Activities. A risk assesment is a Activities to identify
          potential hazards and analyze what could happen if a hazard occurs. A business impact analysis(BIA) is the
          Activities for determining the potential impacts resulting from the interruption of time sensitive or critical Activitieses.
        </p>
         <table class="border mt-4 bg-white w-[100%]">
        
        <thead>
          <tr class="text-sm headerrow">
            <th class="centerColumn">
              <span
                class="cursor-pointer flex flex-row gap-2"
               >
                <p>Severity</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" />
              </span>
            </th>
            <th>
              <span class="cursor-pointer flex flex-row gap-2" >
                <p>Risk</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" class="cursor-pointer" />
              </span>
            </th>
            <th>
              <span class="cursor-pointer flex flex-row gap-2">
                <p>Category</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" />
              </span>
            </th>
            <th>
              <span class="cursor-pointer flex flex-row gap-2">
                <p>Tier Level</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" />
              </span>
            </th>
            <th class="centerColumn">
              <span class="cursor-pointer flex flex-row gap-2">
                <p>Priority</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" />
              </span>
            </th>
            
            <th class="centerColumn ">
              <span class="cursor-pointer"></span>
            </th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="row in data" :key="row" class="border text-xs trow cursor-pointer">
              <td class="centerColumn flex items-center left-5 severitysearch">
                <div class="flex flex-row top-0 justify-center items-center">
                  <p class={{row.severity}}></p>
                </div>
              </td>
              <td>{{row.risk}}</td>
              <td>{{row.category}}</td>
              <td>{{row.tierlevel}}</td>
              <td class="centerColumn">
                <button class={row.priority}>{{row.priority}}</button>
              </td>
              <td class="centerColumn">
                <div class="relative">
                  <img
                    class="h-5 cursor-pointer"
                    src="@/assets/ActionIcon.svg"
                    alt="Action"
                  />
                </div>
              </td>
            </tr>
        </tbody>
      </table>

        
      </div>
</template>

<style scoped>
    .filterbtn{
        border-radius: 4px;
    }
    .border{
        border:1px solid #e9e9e9
    }
    .borderbottom{
        border-bottom: 1px solid #e9e9e9;
    }
    .bordertop{
        border-top: 1px solid #e9e9e9;
    }
    .risktext{
        font-family: "Open Sans",sans-serif;
    }
    td,th{
        padding:0px  20px;
    }
    tr{
        height: 60px;
    }
    
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableComponent',
  data() {
    return {
      data:[
        {
          severity: "veryhigh",
          risk: "Suspectible to man-in-the-middle attacks",
          category: "Mail Security",
          tierlevel: "System",
          priority: "P1",
          likelihood: "high",
          impactlevel: "high",
          riskowner: "Name of the owner",
          status: "high",
        },
        {
          severity: "verylow",
          risk: "Incorrect timestamp & losss of integrity",
          category: "Mail Security",
          tierlevel: "System",
          priority: "P2",
          likelihood: "high",
          impactlevel: "high",
          riskowner: "Name of the owner",
          status: "high",
        },
        {
          severity: "high",
          risk: "Risk for the Activities",
          category: "Name of the Category",
          tierlevel: "Activities",
          priority: "P3",
          likelihood: "high",
          impactlevel: "high",
          riskowner: "Name of the owner",
          status: "high",
        },
        {
      severity: "low",
      risk: "Risk for the organization",
      category: "Name of the Category",
      tierlevel: "Organization",
      priority: "P4",
      likelihood: "high",
      impactlevel: "high",
      riskowner: "Name of the owner",
      status: "high",
    },
    {
      severity: "moderate",
      risk: "Risk for the organization",
      category: "Name of the Category",
      tierlevel: "Organization",
      priority: "P5",
      likelihood: "high",
      impactlevel: "high",
      riskowner: "Name of the owner",
      status: "high",
    },]
    };
  },
});
</script>
