'use client';

import { createContext, ReactNode, useContext, useState } from 'react';
import { DateRange } from 'react-day-picker';

type ReservationContextTypes = {
  range?: DateRange;
  setRange: (range?: DateRange) => void;
  resetRange: () => void;
};

const initialState: DateRange = {
  from: undefined,
  to: undefined,
};

const ReservationContext = createContext<ReservationContextTypes>({
  range: initialState,
  setRange: () => {},
  resetRange: () => {},
});

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [range, setRange] = useState<DateRange | undefined>(initialState);

  const resetRange = () => {
    setRange(initialState);
  };

  const value: ReservationContextTypes = {
    range,
    setRange,
    resetRange,
  };

  return (
    <ReservationContext.Provider value={value}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservation() {
  const context = useContext(ReservationContext);

  if (!context) {
    throw new Error('Context was used outside provider');
  }

  return context;
}
