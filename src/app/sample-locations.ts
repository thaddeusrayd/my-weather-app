export interface Location {
    city: string,
    currentTemp: number,
    conditions: string
}

export const locations = [
    {
        city: 'Chicago',
        currentTemp: 78,
        conditions: 'Sunny',
        id: 1
    },
    {
        city: 'Jackson',
        currentTemp: 98,
        conditions: 'Partly Cloudy',
        id: 2
    },
    {
        city: 'Fairhope',
        currentTemp: 95,
        conditions: 'Sunny',
        id: 3
    },
    {
        city: 'Lesvos',
        currentTemp: 88,
        conditions: 'Rainy',
        id: 4
    },
    {
        city: 'Milwaukee',
        currentTemp: 1000,
        conditions: 'Awful',
        id: 5
    },
];