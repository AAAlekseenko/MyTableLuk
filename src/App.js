import React from "react";

import FilterSelects from "./components/filerSelects/FilterSelects";
import MyTable from "./components/table/MyTable";
import './App.scss'

const App = () => {
  const [filtersState, setFiltersState] = React.useState({
    date: '',
    orderType: '',
    completeDate: '',
    author: '',
    periodDate: ''
  });

  const updateFilterData = (newFiltersState) => {
    setFiltersState(newFiltersState);
  }

  return <div >
     <div className='table-wrapper'> <FilterSelects updateFilter={updateFilterData}/></div>
    <MyTable filterSetting={filtersState}/>
  </div>

}

export default App
