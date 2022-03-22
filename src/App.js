import React, { useState } from "react";

import FilterComponent from "./filter-component";
import ChartComponent from "./chart-component";

function App() {
  const [statusFilters, setStatusFilters] = useState([]);
  const [typeFilters, setTypeFilters] = useState([]);
  const [priorityFilters, setPriorityFilters] = useState([]);

  const onFilterChange = (statuses, types, priorities) => {
    setStatusFilters(statuses);
    setTypeFilters(types);
    setPriorityFilters(priorities);
  };
  return (
    <>
      <FilterComponent onFilterChange={onFilterChange}></FilterComponent>

      <ChartComponent
        statuses={statusFilters}
        types={typeFilters}
        priorities={priorityFilters}
      ></ChartComponent>
    </>
  );
}

export default App;
