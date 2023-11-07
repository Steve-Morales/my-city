import axios from "axios";

class CountriesServices
{
    getInfo(name)
    {
        return axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    }

    getNames()
    {
        return axios.get('https://restcountries.com/v3.1/all?fields=name');
    }

    getCountriesByNameSearch(name)
    {
        return axios.get(`https://restcountries.com/v3.1/name/${name}`);
    }

    getCodes()
    {
        return axios.get(`https://restcountries.com/v3.1/all?fields=name,cca2,ccn3,cca3,cioc`)
    }

    getCountriesByCodeSearch(code)
    {
        return axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
    }

    getCountriesByCodeListSearch(codeList) // Note: parameter should a string with commas no spaces
    {
        return axios.get(`https://restcountries.com/v3.1/alpha?codes=${codeList}`);
    }

    getCurrencies()
    {
        return axios.get(`https://restcountries.com/v3.1/all?fields=name,currencies`);
    }

    getCountriesByCurrencySearch(currency)
    {
        return axios.get(`https://restcountries.com/v3.1/currency/${currency}?fields=name,currencies`);
    }

    getLanguages()
    {
        return axios.get(`https://restcountries.com/v3.1/all?fields=name,languages`);
    }

    getCountriesByLanguageSearch(language)
    {
        return axios.get(`https://restcountries.com/v3.1/lang/${language}?fields=name,languages`)
    }

    getCapital()
    {
        return axios.get(`https://restcountries.com/v3.1/all?fields=name,capital`);
    }

    getCountriesByCapitalSearch(capital)
    {
        return axios.get(`https://restcountries.com/v3.1/capital/${capital}?fields=name,capital`)
    }

    getRegion()
    {
        return axios.get(`https://restcountries.com/v3.1/all?fields=name,region`);
    }

    getCountriesByRegionSearch(region)
    {
        return axios.get(`https://restcountries.com/v3.1/region/${region}?fields=name,region`)
    }

    getSubregion()
    {
        return axios.get(`https://restcountries.com/v3.1/all?fields=name,subregion`);
    }

    getCountriesBySubregionSearch(subregion)
    {
        return axios.get(`https://restcountries.com/v3.1/subregion/${subregion}?fields=name,subregion`)
    }

    getTranslation()
    {
        return axios.get(`https://restcountries.com/v3.1/all?fields=name,translations`);
    }

    getCountriesByTranslationSearch(translation)
    {
        return axios.get(`https://restcountries.com/v3.1/translation/${translation}?fields=name,translations`)
    }
}

export default new CountriesServices();