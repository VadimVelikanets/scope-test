import allLanguage from "constants/languages.json"

function getLanguage(languageName:string): string | {name: string, code: string}[] {
    const matchingLangs = allLanguage.filter(country => country.name.indexOf(languageName) !== -1 )
    return matchingLangs
}

export default getLanguage