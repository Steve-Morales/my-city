import CountriesServices from "../services/countriesService";

/**
 * Evaluates API calls and returns resulting data
 */
class GetAPI {
    info(setVar, name)
    {
        CountriesServices.getInfo(name)
        .then((res) => {
            console.log("GET INFO", res.data[0]);
            if (setVar)
                setVar(res.data[0]);
        })
        .catch((error) => {
            console.error(error);
        });
    }

    /**
     * Gets all the country names
     * @param {*} setVar - React useState setter method
     */
    names(setVar) {
        CountriesServices.getNames()
            .then((res) => {
                const countryNames = res.data.map((country) => country.name.common);
                if (setVar)
                    setVar(countryNames);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    /**
     * Gets all the country names similar to the `searchTerm`
     * @param {*} setVar        - React useState setter method
     * @param {*} searchTerm    - the search term to find related names
     */
    allByName(setVar, searchTerm) {
        CountriesServices.getCountriesByNameSearch(searchTerm)
            .then((res) => {
                console.log(res.data);
                const countryNames = res.data.map((country) => country.name.common);
                if (setVar)
                    setVar(countryNames);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    /**
     * Gets all the codes related to each country. The returning 
     * data includes the name of the country
     * @param {*} setVar 
     */
    codes(setVar) {
        CountriesServices.getCodes()
            .then(res => {
                const countries = res.data.map((country) => ({
                    name: country.name.common,
                    cca2: country.cca2,
                    ccn3: country.ccn3,
                    cca3: country.cca3,
                    cioc: country.cioc,
                }));
                if (setVar)
                    setVar(countries);
            })
            .catch(e => console.log(e));
    }

    allByCode(setVar, searchTerm) {
        CountriesServices.getCountriesByCodeSearch(searchTerm)
            .then(res => {
                const countries = res.data.map((country) => ({
                    name: country.name.common,
                    cca2: country.cca2,
                    ccn3: country.ccn3,
                    cca3: country.cca3,
                    cioc: country.cioc,
                }));
                if (setVar)
                    setVar(countries);
            })
            .catch(e => console.log(e));
    }

    allByCodeList(setVar, searchTerm)
    {
        CountriesServices.getCountriesByCodeListSearch(searchTerm)
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                cca2: country.cca2,
                ccn3: country.ccn3,
                cca3: country.cca3,
                cioc: country.cioc,
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    currencies(setVar)
    {
        CountriesServices.getCurrencies()
            .then(res => {
                const countries = res.data.map((country) => ({
                    name: country.name.common,
                    currencies: country.currencies
                }));
                if (setVar)
                    setVar(countries);
            })
            .catch(e => console.log(e));
    }

    allByCurrency(setVar, searchTerm)
    {
        CountriesServices.getCountriesByCurrencySearch(searchTerm)
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                currencies: country.currencies
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    languages(setVar)
    {
        CountriesServices.getLanguages()
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                languages: country.languages
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    allByLanguages(setVar, searchTerm)
    {
        CountriesServices.getCountriesByLanguageSearch(searchTerm)
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                languages: country.languages
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    capitals(setVar)
    {
        CountriesServices.getCapital()
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                capital: country.capital
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    allByCapitals(setVar, searchTerm)
    {
        CountriesServices.getCountriesByCapitalSearch(searchTerm)
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                capital: country.capital
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    regions(setVar)
    {
        CountriesServices.getRegion()
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                region: country.region
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    allByRegions(setVar, searchTerm)
    {
        CountriesServices.getCountriesByRegionSearch(searchTerm)
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                region: country.region
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    subregions(setVar)
    {
        CountriesServices.getSubregion()
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                subregion: country.subregion
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    allBySubregions(setVar, searchTerm)
    {
        CountriesServices.getCountriesBySubregionSearch(searchTerm)
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                subregion: country.subregion
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    translation(setVar)
    {
        CountriesServices.getTranslation()
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                translations: country.translations
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }

    allByTranslations(setVar, searchTerm)
    {
        CountriesServices.getCountriesByTranslationSearch(searchTerm)
        .then(res => {
            const countries = res.data.map((country) => ({
                name: country.name.common,
                translations: country.translations
            }));
            if (setVar)
                setVar(countries);
        })
        .catch(e => console.log(e));
    }
}

export default new GetAPI();