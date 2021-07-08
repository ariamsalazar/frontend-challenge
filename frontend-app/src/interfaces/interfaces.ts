interface IPlanetResults {
	data: ListItem[];
}

interface ListItem {
	count: number;
    next: string | null;
    previous: string;
    results: Planet[];
}

interface Planet {
    name: string;
    rotationPeriod: string;
    orbitalPeriod: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surfaceWater: string;
    population: string;
    residents: string[];
    films: string[];
    created: Date;
    edit: Date;
    url: string;

}

export type{
	IPlanetResults, ListItem, Planet,
};
