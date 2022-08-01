import allCountries from "constants/countriesWithCode.json"

function getCountry(countryName:string): string | {name: string, code: string}[] {
    const matchingCountry = allCountries.filter(country => country.name.indexOf(countryName) !== -1 )
    return matchingCountry
}

export default getCountry