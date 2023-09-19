import React, { createContext, useState } from 'react';

const PetfinderContext = createContext();

function PetfinderProvider({ children }) {
    const [petfinderToken, setPetfinderToken] = useState(null);

    return (
        <PetfinderContext.Provider value={{ petfinderToken, setPetfinderToken }}>
            {children}
        </PetfinderContext.Provider>
    );
}

export { PetfinderContext, PetfinderProvider };