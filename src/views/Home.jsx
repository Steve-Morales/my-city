import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ToggleButton, ButtonGroup, Table, Spinner } from "react-bootstrap"; // Import React Bootstrap components

import GetAPI from "../utils/apiGet";
import { useNavigate } from "react-router-dom";

import '../index.css';
import SearchBar from "../components/SearchBar";
import CountryNameCard from "../components/CountryNameCard";
import CountryCodeCard from "../components/CountryCodeCard";
import CountryCurrencyCard from "../components/CountryCurrencyCard";
import CountryLanguageCard from "../components/CountryLanguageCard";
import CountryCapitalCard from "../components/CountryCapitalCard";
import CountryRegionCard from "../components/CountryRegionCard";
import CountrySubregionCard from "../components/CountrySubregionCard";
import CountryTranslationCard from "../components/CountryTranslationCard";

const SearchEnum =
{
    NAME: '0',
    CODE: '1',
    CURRENCY: '2',
    LANGUAGE: '3',
    CAPITAL_CITY: '4',
    REGION: '5',
    SUBREGIONS: '6',
    TRANSLATION: '7'
}

export default function Home() {
    const [names, setNames] = useState([]);
    const [codes, setCodes] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [capitals, setCapitals] = useState([]);
    const [regions, setRegions] = useState([]);
    const [subregions, setSubregions] = useState([]);
    const [translations, setTranslations] = useState([]);
    const [radioValue, setRadioValue] = useState();

    let navigate = useNavigate();

    const [showSpinner, setShowSpinner] = useState(true);

    const radios = [
        { name: 'Name', value: SearchEnum.NAME },
        { name: 'Code', value: SearchEnum.CODE },
        { name: 'Currency', value: SearchEnum.CURRENCY },
        { name: 'Language', value: SearchEnum.LANGUAGE },
        { name: 'Capital City', value: SearchEnum.CAPITAL_CITY },
        { name: 'Region', value: SearchEnum.REGION },
        { name: 'SubRegion', value: SearchEnum.SUBREGIONS },
        { name: 'Translation', value: SearchEnum.TRANSLATION },

    ];

    // when user switches between "Search By" radio buttons,
    // it calls the search function to reveal all related information
    useEffect(() => {
        onSearch(searchTerm);
    }, [radioValue]);

    const [searchTerm, setSearchTerm] = useState("");

    const clearStates = () => {
        setNames([]);
        setCodes([]);
        setCurrencies([]);
        setLanguages([]);
        setCapitals([]);
        setRegions([]);
        setSubregions([]);
        setTranslations([]);
    }

    useEffect(() => {
        onStateLoad();
    }, [names, codes, currencies, languages, capitals, regions, subregions, translations]);

    // when a variable state loads, it does a series of logical steps
    const onStateLoad = () => {
        switch (radioValue) {
            case SearchEnum.NAME:
                setShowSpinner(!(names.length > 0));
                break;

            case SearchEnum.CODE:
                setShowSpinner(!(codes.length > 0));
                break;

            case SearchEnum.CURRENCY:
                setShowSpinner(!(currencies.length > 0));
                break;

            case SearchEnum.LANGUAGE:
                setShowSpinner(!(languages.length > 0));

                break;

            case SearchEnum.CAPITAL_CITY:
                setShowSpinner(!(capitals.length > 0));

                break;

            case SearchEnum.REGION:
                setShowSpinner(!(JSON.stringify(regions) !== '{}'));
                break;

            case SearchEnum.SUBREGIONS:
                setShowSpinner(!(JSON.stringify(subregions) !== '{}'));

                break;

            case SearchEnum.TRANSLATION:
                setShowSpinner(!(translations.length > 0));

                break;

            default:
                setShowSpinner(true);
                break;
        }
    }

    const onSearch = (searchTerm) => {
        clearStates();
        switch (radioValue) {
            case SearchEnum.NAME:
                console.log("By Name")
                if (!searchTerm) {
                    GetAPI.names(setNames);
                }
                else {
                    GetAPI.allByName(setNames, searchTerm);
                }

                break;

            case SearchEnum.CODE:
                console.log("By Code")
                if (!searchTerm) {
                    GetAPI.codes(setCodes);
                }
                else if (searchTerm.includes(",")) {
                    GetAPI.allByCodeList(setCodes, searchTerm);
                }
                else {
                    GetAPI.allByCode(setCodes, searchTerm);
                }
                break;

            case SearchEnum.CURRENCY:
                console.log("By Currencies");
                if (!searchTerm) {
                    GetAPI.currencies(setCurrencies);
                }
                else {
                    GetAPI.allByCurrency(setCurrencies, searchTerm);
                }
                break;

            case SearchEnum.LANGUAGE:
                console.log("By Languages");
                if (!searchTerm) {
                    GetAPI.languages(setLanguages);
                }
                else {
                    GetAPI.allByLanguages(setLanguages, searchTerm);
                }

                break;

            case SearchEnum.CAPITAL_CITY:
                console.log("By Capital");
                if (!searchTerm) {
                    GetAPI.capitals(setCapitals);
                }
                else {
                    GetAPI.allByCapitals(setCapitals, searchTerm);
                }

                break;

            case SearchEnum.REGION:
                console.log("By Region");
                if (!searchTerm) {
                    GetAPI.regions(setRegions);
                }
                else {
                    GetAPI.allByRegions(setRegions, searchTerm);
                }

                break;

            case SearchEnum.SUBREGIONS:
                console.log("By SubRegion");
                if (!searchTerm) {
                    GetAPI.subregions(setSubregions);
                }
                else {
                    GetAPI.allBySubregions(setSubregions, searchTerm);
                }

                break;

            case SearchEnum.TRANSLATION:
                console.log("By Translation");
                if (!searchTerm) {
                    GetAPI.translation(setTranslations);
                }
                else {
                    GetAPI.allByTranslations(setTranslations, searchTerm);
                }

                break;

            default:
                if (!(radioValue in SearchEnum)) {
                    setRadioValue(SearchEnum.NAME);
                }
        }
    }

    const handleSearch = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm);
    };

    const goToCountry = (countryName) => {
        return navigate(`country-info/${countryName}`);
    }


    return (
        <Container style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

            {/* Search Bar */}
            <SearchBar
                searchTerm={searchTerm}
                handleSearch={handleSearch}
            />

            {/* Search By */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <h1>Search By</h1>
                <ButtonGroup>
                    {radios.map((radio, idx) => (
                        <ToggleButton
                            key={idx}
                            id={`radio-${idx}`}
                            type="radio"
                            variant={idx % 2 ? 'outline-primary' : 'outline-info'}
                            name="radio"
                            value={radio.value}
                            checked={radioValue === radio.value}
                            onChange={(e) => { setRadioValue(e.currentTarget.value); }}
                        >
                            {radio.name}
                        </ToggleButton>
                    ))}
                </ButtonGroup>
            </div>

            {/* Results */}
            <h1 className="mt-5 mb-3">Countries</h1>
            <Row>
                {names.length > 0 && radioValue == SearchEnum.NAME && names.map((countryName, index) => (
                    <CountryNameCard
                        key={index}
                        index={index}
                        countryName={countryName}
                        clickHandler={() => goToCountry(countryName)}
                    />
                ))}

                {codes.length > 0 && radioValue == SearchEnum.CODE && codes.map((country, index) => (
                    <CountryCodeCard
                        key={index}
                        index={index}
                        country={country}
                        clickHandler={() => goToCountry(country.name)}
                    />
                ))}

                {currencies.length > 0 && radioValue == SearchEnum.CURRENCY && currencies.map((country, index) => (
                    <CountryCurrencyCard
                        key={index}
                        index={index}
                        country={country}
                        clickHandler={() => goToCountry(country.name)}
                    />
                ))}

                {languages.length > 0 && radioValue == SearchEnum.LANGUAGE && languages.map((country, index) => (
                    <CountryLanguageCard
                        key={index}
                        index={index}
                        country={country}
                        clickHandler={() => goToCountry(country.name)}
                    />
                ))}


                {capitals.length > 0 && radioValue == SearchEnum.CAPITAL_CITY && capitals.map((country, index) => (
                    <CountryCapitalCard
                        key={index}
                        index={index}
                        country={country}
                        clickHandler={() => goToCountry(country.name)}
                    />
                ))}


                {JSON.stringify(regions) !== '{}' && radioValue == SearchEnum.REGION && Object.entries(regions).map(([regionName, countryNames], index) => (
                    <CountryRegionCard
                        key={index}
                        regionName={regionName}
                        countryNames={countryNames}
                        clickHandler={goToCountry}
                    />

                ))}

                {
                    JSON.stringify(subregions) !== '{}' && radioValue === SearchEnum.SUBREGIONS && (
                        Object.entries(subregions).map(([subregionName, countryNames], index) => (
                            <CountrySubregionCard
                                key={index}
                                subregionName={subregionName}
                                countryNames={countryNames}
                                clickHandler={goToCountry}
                            />
                        ))
                    )
                }


                {
                    radioValue === SearchEnum.TRANSLATION && translations.length > 0 && (
                        translations.map((country, index) => (
                            <CountryTranslationCard
                                key={index}
                                country={country}
                                clickHandler={() => { goToCountry(country.name) }}
                            />
                        ))
                    )
                }

                {showSpinner == true && <Spinner animation="grow" variant="primary" />}

            </Row>
        </Container>
    );
}
