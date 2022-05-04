export interface ITodos {
    userId: number,
    id?: number,
    title: string,
    completed: boolean,
    [key: string]: string | boolean | number | undefined
}
