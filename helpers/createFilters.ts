export const createFilters = (list: Record<string, any>[], indexes: number[]) => {
    let listOfFiltersNames: string[] = []
    if (list && list.length > 0) {
        listOfFiltersNames = indexes.map(item => {
            return Object.keys(list[0])[item]
        })
    }

    const filters = listOfFiltersNames.map(filterName => {
        let options = list.map(item => {
            return String(item[filterName])
        })
        options = options.filter((option, index) => options.indexOf(option) === index)
        return ({
            [filterName]: {
                options: options,
                selected: []
            }
        })
    })

    return filters
}