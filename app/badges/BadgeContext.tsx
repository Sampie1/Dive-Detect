import React, { createContext, useState, useContext } from "react";
import { Badges as initialBadges, Badge } from "./badges";

type BadgeContextType = {
    badges: Badge[];
    unlockBadge: (id: string) => void;
};

const BadgeContext = createContext<BadgeContextType | undefined>(undefined)

export const BadgeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [badges, setBadges] = useState(initialBadges);

    const unlockBadge = (id: string) => {
        setBadges(prev => 
            prev.map(ach => (ach.id === id ? {...ach, unlocked: true } : ach))
        );
    };

    return (
        <BadgeContext.Provider value={{badges, unlockBadge}}>
            {children} 
        </BadgeContext.Provider>
    );
};

export const useBadges = () => {
    const context = useContext(BadgeContext);

    if (!context) throw new Error('blablabla')
        
    return context;
}
