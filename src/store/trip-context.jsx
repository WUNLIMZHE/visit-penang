import { createContext} from "react";

// the object created via createContext is a component, thus use Cammel naming convention
export const TripContext = createContext({
  trips: null,
  selectedTrip: [],
  selectedActivity: [],
  addActivity: () => {},
  deleteActivity: () => {},
  startAddTrip: () => {},
  cancelAddTrip: () => {},
  selectTrip: () => {},
  addTrip: () => {},
  deleteTrip: () => {},
  findTrip: () => {},
});

