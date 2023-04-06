export const convertMySqlDateToReadable = (date) => {
    date = new Date(date)
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear() === (new Date()).getFullYear() ? null : date.getFullYear()
    const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    return (month) + " " + date.getDate() + (year ? `, ${year}` : '') + (!year ? ", " : " ") + time
}

export const range = (size, startAt = 0) => {
    return [...Array(size).keys()].map(i => i + startAt);
}

export const titleCase = (str) => {
    return str.split(" ").map(word => {
        const letters = word.split("")
        return letters[0].toUpperCase() + letters.slice(1).join("").toLowerCase()
    }).join(" ")
}

export const formatNumberAsReadable = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const removeSpecialCharacters = (str) => {
    return str.replace(/[^A-Za-z0-9\_\- ]/g, '')
}

export const arrayUniqueByKey = (array, key) => {
    return [...new Map(array.map(item => [item[key], item])).values()];
}