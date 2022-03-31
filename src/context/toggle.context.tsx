import React, { createContext, useState } from "react";

export const ToggleContext = createContext(true);
export const SetToggleContext = createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>((value) => value);

interface Props {
  children: React.ReactNode;
}

const ToggleProvider = ({ children }: Props) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleContext.Provider value={toggle}>
      <SetToggleContext.Provider value={setToggle}>
        {children}
      </SetToggleContext.Provider>
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;
