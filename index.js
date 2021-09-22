let findMatching = (drivers, string) => {
    let matchingDrivers = drivers.filter(drivers => string.toLowerCase() === drivers.toLowerCase())
        return matchingDrivers; 
}

let fuzzyMatch = (drivers, string) => {
    let matchingLetters = drivers.filter(drivers => string === drivers.slice(0, string.length))
        return matchingLetters;
} 

let matchName = (drivers, string) => {
    let matchingProperty = drivers.filter(drivers => drivers.name === string)
        return matchingProperty;
}