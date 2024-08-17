import React from "react";
import { PlantsContext } from "../context-task";

const sortOptions = [
  {
    label: "Sort by",
    value: "",
  },
  {
    label: "Earliest",
    value: "earliest",
  },
  {
    label: "Latest",
    value: "latest",
  },
];

const AllPlants = () => {
    const { plants, setPlants } = React.useContext(PlantsContext);

 const sortChanges = (event: any) => {
  const sortedPlans = [...plants].sort((a, b) => {
    if (a && b) {
      const aDate = a?.features?.[0]?.next;
      const bDate = b?.features?.[0]?.next;
      if (event.target.value === "earliest" && aDate) {
        return aDate.diff(bDate);
      }
      if (event?.target?.value === "latest" && bDate) {
        return bDate.diff(aDate);
      }
      return 0;
    }
  });
  console.log("sortedPlans", sortedPlans);
  setPlants(sortedPlans);
}
    return (
      <div className="list-content">
        <div className="plants-list">
            <select onChange={sortChanges}>
               {sortOptions.map((val) => (
                <option key={val.label} value={val.value}>
                    {val.label}
                </option>
               ))} 
            </select>
          {plants.map((plant, key) => (
            <p key={key}>{plant.name}</p>
          ))}
        </div>
      </div>
    )
}

export default AllPlants;