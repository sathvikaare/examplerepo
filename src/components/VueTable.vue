<template>
  <div class="risktext">
        <div className="flex flex-row justify-between">
          <p className="font-bold text-medium">Risk-Assessment</p>
          <div className="flex flex-row justify-between gap-3">
            <button className="flex tems-center justify-center w-16  addbtn bg-primary text-white items-center flex-row rounded text-sm  gap-2">
              <img  src="@/assets/plusIcon.svg" class= "w-3 h-5" alt="addicon" />
              <p> Add</p>
            </button>
            <button
              className="border filterbtn flex h-8  items-center bg-white justify-center w-20 flex-row  text-sm gap-2"
            >
              <p>Filters</p>
              <img src="@/assets/filter.svg" className="w-3 h-6" alt="filtericon" />
            </button>
          </div>
        </div>
        <p className="text-xs mt-2 ">
          A risk assesment is a activities to identify potential hazards and analyze what could hppen if a hazard
          occurs. A bussiness impact Analysis(BIA) is the Activities for determining the potential impacts resulting
          from the interruption of time sensitive or critical Activities. A risk assesment is a Activities to identify
          potential hazards and analyze what could happen if a hazard occurs. A business impact analysis(BIA) is the
          Activities for determining the potential impacts resulting from the interruption of time sensitive or critical Activitieses.
        </p>
         <table className="border mt-4 bg-white">
        
        <thead>
          <tr className="text-sm headerrow">
            <th className="centerColumn">
              <span
                className="cursor-pointer"
               >
                <p>Severity</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" />
              </span>
            </th>
            <th>
              <span className="cursor-pointer" >
                <p>Risk</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" className="cursor-pointer" />
              </span>
            </th>
            <th>
              <span className="cursor-pointer">
                <p>Category</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" />
              </span>
            </th>
            <th>
              <span className="cursor-pointer">
                <p>Tier Level</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" />
              </span>
            </th>
            <th className="centerColumn">
              <span className="cursor-pointer">
                <p>Priority</p>
                <img src="@/assets/sorting.svg" alt="sort-icon" />
              </span>
            </th>
            
            <th className="centerColumn">
              <span className="cursor-pointer">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
        
          <!-- {data.map((row, index) => ( -->
            <tr
              key={index}
              className="border text-xs trow cursor-pointer"
            
            >
              <td className="centerColumn flex items-center left-5 severitysearch">
                <div className="flex flex-row top-0 justify-center items-center">
                  <p className={row.severity}></p>
                </div>
                
              </td>
              <td>{row.risk}</td>
              <td>{row.category}</td>
              <td>{row.tierlevel}</td>
              <td className="centerColumn">
                <button className={row.priority}>{row.priority}</button>
              </td>
              <td className="centerColumn">
                <div className="relative">
                  <img
                    className="h-5 cursor-pointer"
                    src="@/assets/ActionIcon.svg"
                    alt="Action"
                  />
                </div>
              </td>
            </tr>
          <!-- ))} -->
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
    
</style>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TableComponent',
  data() {
    return {
      
    };
  },
});
</script>
