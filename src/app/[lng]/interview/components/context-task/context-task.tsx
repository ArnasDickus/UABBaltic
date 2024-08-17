'use client';

import moment from "moment";
import React from "react";
import AllPlants from "./components/all-plants";

export enum PlantFeatures {
  Water,
  Fertilize,
}

interface IFeature {
  next: moment.Moment;
  interval_days: number;
}

export interface IPlant {
  name: string;
  image: string;
  description: string;
  features: Partial<Record<PlantFeatures, IFeature>>;
}

export type TPlants = Array<IPlant>;

const plantList: TPlants = [
  {
    name: "Jenny",
    image:
      "https://m.media-amazon.com/images/I/81eV1cjawML._CR0,204,1224,1224_UX256.jpg",
    description: "Peace lily",
    features: {
      [PlantFeatures.Water]: {
        next: moment(),
        interval_days: 7,
      },
    },
  },
  {
    name: "Poppy",
    image:
      "https://m.media-amazon.com/images/I/61bTmE5UlEL._CR0,236,608,608_UX256.jpg",
    description: "Money tree",
    features: {
      [PlantFeatures.Water]: {
        next: moment().add(7, "day"),
        interval_days: 8,
      },
      [PlantFeatures.Fertilize]: {
        next: moment(),
        interval_days: 7,
      },
    },
  },
  {
    name: "Pam II",
    image: "https://m.media-amazon.com/images/I/31W2GrxDTtL._AC_.jpg",
    description: "Spider plant",
    features: {
      [PlantFeatures.Water]: {
        next: moment(),
        interval_days: 7,
      },
      [PlantFeatures.Fertilize]: {
        next: moment(),
        interval_days: 7,
      },
    },
  },
  {
    name: "Larry",
    image:
      "https://m.media-amazon.com/images/I/B1O4wJwGxeS._CR0,504,3024,3024_UX256.jpg",
    description: "Monstera Deliciosa",
    features: {
      [PlantFeatures.Water]: {
        next: moment().add(1, "day"),
        interval_days: 14,
      },
    },
  },
  {
    name: "Pam",
    image:
      "https://m.media-amazon.com/images/I/715SJkWJUeL._CR0,204,1224,1224_UX256.jpg",
    description: "Spider plant",
    features: {
      [PlantFeatures.Water]: {
        next: moment().add(23, "day"),
        interval_days: 50,
      },
      [PlantFeatures.Fertilize]: {
        next: moment().add(15, "day"),
        interval_days: 14,
      },
    },
  },
  {
    name: "Bonnie",
    image:
      "https://m.media-amazon.com/images/I/B1PPWcbC7QS._CR0,504,3024,3024_UX256.jpg",
    description: "Spider plant",
    features: {
      [PlantFeatures.Water]: {
        next: moment().add(2, "day"),
        interval_days: 7,
      },
      [PlantFeatures.Fertilize]: {
        next: moment().add(9, "day"),
        interval_days: 10,
      },
    },
  },
];

interface IPlantsContext {
  plants: TPlants;
  setPlants: (state: TPlants) => void;
}

export const PlantsContext = React.createContext<IPlantsContext>({
    plants: [],
  setPlants: () => {},
});

const ContextTask = () => {
    const [plants, setPlants] = React.useState(plantList);
    return (
        <PlantsContext.Provider value={React.useMemo(() => ({ plants, setPlants }), [plants])}>
            <AllPlants />
            <p>Hello world</p>
        </PlantsContext.Provider>
    )
}

export default ContextTask;