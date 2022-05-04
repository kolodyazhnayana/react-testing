export interface IFilter {
    [key: string]: {
        options: string[],
        selected: string[]
    }
}
