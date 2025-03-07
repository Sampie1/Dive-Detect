export type Badge = {
    id: string;
    title: string;
    description: string;
    icon: string;
    unlocked: boolean;
}

export const Badges: Badge[] = [
    {id: "1", title: "Eerste Duik", description: "Maak je eerste duik", icon: "🐠", unlocked: false},
    {id: "2", title: "Onderzoeker", description: "Onderzoek 5 vissen", icon: "🔬", unlocked: false },
    {id: "3", title: "Schatzoeker", description: "Vind een verborgen schat", icon: "💎", unlocked: false },
]