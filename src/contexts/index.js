import React, { createContext, useState } from "react";

const SchedulerContext = createContext();

const defaultEvents = [
    {
      resourceId: "o",
      title: "event 2",
      start: "2023-04-03",
      end: "2023-04-05",
    },
  ];


  const schedulerResources = [
    { id: "a", name: "Anton" },
    { id: "o", name: "Oleg" },
    { id: "i", name: "Ivan" },
    { id: "p", name: "Petr" },
  ];


const SchedulerContextProvider = ({ children }) => {
  const [schedulerEvents, setSchedulerEvents] = useState(defaultEvents);



  const contextValue = {
    schedulerEvents,
    setSchedulerEvents,
    schedulerResources,
  };

  return <SchedulerContext.Provider value={contextValue}>{children}</SchedulerContext.Provider>;
};

export  {SchedulerContextProvider, SchedulerContext};