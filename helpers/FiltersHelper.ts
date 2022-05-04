import {IFilter} from "@type/IFilter"
import {ITodos} from "@type/ITodos"

export class FiltersHelper {
    public static getName(filter: IFilter) {
        return Object.keys(filter)[0]
    }

    public static getSelected(filter: IFilter) {
        const nameOfFilter = FiltersHelper.getName(filter)
        return filter[nameOfFilter].selected
    }

    public static getFilterByName(name: string, filters: IFilter[]) {
        for (let i = 0; i < filters.length; i++) {
            if (this.getName(filters[i]) === name) {
                return filters[i]
            }
        }
    }

    public static compare(a: IFilter, b: IFilter) {
        return Number(FiltersHelper.getName(a) > FiltersHelper.getName(b)) * 2 - 1
    }

    public static filterTodos(filters: IFilter[], todos: ITodos[]) {
        function isItemInArray<Type>(arr: Type[], item: Type) {
            return arr.indexOf(item) !== -1
        }

        let filteredList = todos

        filters.forEach(filter => {
            const selected = FiltersHelper.getSelected(filter)
            const name = FiltersHelper.getName(filter)

            if (selected.length > 0) {
                filteredList = filteredList.filter(todo => {
                    return isItemInArray(selected, String(todo[name]))
                })
            }

        })

        return filteredList
    }
}


