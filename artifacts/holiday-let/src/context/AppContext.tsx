// @refresh reset
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Property, ThingToDo, Review, initialProperties, initialThingsToDo, initialReviews } from "../data/initialData";

const DATA_VERSION = "v24";

function loadAdminState<T>(key: string, fallback: T): T {
  try {
    const version = localStorage.getItem("coastal_data_version");
    if (version !== DATA_VERSION) {
      return fallback;
    }
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : fallback;
  } catch {
    return fallback;
  }
}

function saveAdminState<T>(key: string, value: T) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    localStorage.setItem("coastal_data_version", DATA_VERSION);
  } catch {
    // ignore storage errors
  }
}

interface AppState {
  properties: Property[];
  thingsToDo: ThingToDo[];
  reviews: Review[];
  updateProperty: (property: Property) => void;
  addProperty: (property: Property) => void;
  updateThingToDo: (thing: ThingToDo) => void;
  addThingToDo: (thing: ThingToDo) => void;
  deleteThingToDo: (id: string) => void;
  updateReviewStatus: (id: string, status: "approved" | "pending") => void;
}

const AppContext = createContext<AppState | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [properties, setProperties] = useState<Property[]>(() =>
    loadAdminState("coastal_properties", initialProperties)
  );
  const [thingsToDo, setThingsToDo] = useState<ThingToDo[]>(() =>
    loadAdminState("coastal_things", initialThingsToDo)
  );
  const [reviews, setReviews] = useState<Review[]>(() =>
    loadAdminState("coastal_reviews", initialReviews)
  );

  useEffect(() => {
    saveAdminState("coastal_properties", properties);
  }, [properties]);

  useEffect(() => {
    saveAdminState("coastal_things", thingsToDo);
  }, [thingsToDo]);

  useEffect(() => {
    saveAdminState("coastal_reviews", reviews);
  }, [reviews]);

  const updateProperty = (property: Property) => {
    setProperties(prev => prev.map(p => p.id === property.id ? property : p));
  };

  const addProperty = (property: Property) => {
    setProperties(prev => [...prev, property]);
  };

  const updateThingToDo = (thing: ThingToDo) => {
    setThingsToDo(prev => prev.map(t => t.id === thing.id ? thing : t));
  };

  const addThingToDo = (thing: ThingToDo) => {
    setThingsToDo(prev => [...prev, thing]);
  };

  const deleteThingToDo = (id: string) => {
    setThingsToDo(prev => prev.filter(t => t.id !== id));
  };

  const updateReviewStatus = (id: string, status: "approved" | "pending") => {
    setReviews(prev => prev.map(r => r.id === id ? { ...r, status } : r));
  };

  return (
    <AppContext.Provider value={{
      properties,
      thingsToDo,
      reviews,
      updateProperty,
      addProperty,
      updateThingToDo,
      addThingToDo,
      deleteThingToDo,
      updateReviewStatus
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
