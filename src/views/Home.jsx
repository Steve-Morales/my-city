import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, ToggleButton, ButtonGroup, Table, Spinner } from "react-bootstrap"; // Import React Bootstrap components

import GetAPI from "../utils/apiGet";
import { useNavigate } from "react-router-dom";

import '../index.css';

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
        console.log("Setting Spinner to True");
        setShowSpinner(true);
        setNames([]);
        setCodes([]);
        setCurrencies([]);
        setLanguages([]);
        setCapitals([]);
        setRegions([]);
        setSubregions([]);
        setTranslations([]);
    }

    const onSearch = (searchTerm) => {
        clearStates();
        switch (radioValue) {
            case SearchEnum.NAME:
                console.log("By Name")
                if (!searchTerm) 
                {
                    GetAPI.names(setNames);
                }
                else
                {
                    GetAPI.allByName(setNames, searchTerm);
                }

                break;

            case SearchEnum.CODE:
                console.log("By Code")
                if (!searchTerm) 
                {
                    GetAPI.codes(setCodes);
                }
                else if (searchTerm.includes(",")) 
                {
                    GetAPI.allByCodeList(setCodes, searchTerm);
                }
                else
                {
                    GetAPI.allByCode(setCodes, searchTerm);
                }
                break;

            case SearchEnum.CURRENCY:
                console.log("By Currencies");
                if (!searchTerm) 
                {
                    GetAPI.currencies(setCurrencies);
                }
                else
                {
                    GetAPI.allByCurrency(setCurrencies, searchTerm);
                }
                break;

            case SearchEnum.LANGUAGE:
                console.log("By Languages");
                if (!searchTerm) 
                {
                    GetAPI.languages(setLanguages);
                }
                else
                {
                    GetAPI.allByLanguages(setLanguages, searchTerm);
                }

                break;

            case SearchEnum.CAPITAL_CITY:
                console.log("By Capital");
                if (!searchTerm) 
                {
                    GetAPI.capitals(setCapitals);
                }
                else
                {
                    GetAPI.allByCapitals(setCapitals, searchTerm);
                }

                break;

            case SearchEnum.REGION:
                console.log("By Region");
                if (!searchTerm) 
                {
                    GetAPI.regions(setRegions);
                }
                else
                {
                    GetAPI.allByRegions(setRegions, searchTerm);
                }

                break;

            case SearchEnum.SUBREGIONS:
                console.log("By SubRegion");
                if (!searchTerm) 
                {
                    GetAPI.subregions(setSubregions);
                }
                else
                {
                    GetAPI.allBySubregions(setSubregions, searchTerm);
                }

                break;

            case SearchEnum.TRANSLATION:
                console.log("By Translation");
                if (!searchTerm) 
                {
                    GetAPI.translation(setTranslations);
                }
                else
                {
                    GetAPI.allByTranslations(setTranslations, searchTerm);
                }

                break;

            default:
                if (!(radioValue in SearchEnum)) {
                    setRadioValue(SearchEnum.NAME);
                }
        }
        console.log("Setting Back to False")
        setShowSpinner(false);
    }

    const handleSearch = (event) => {
        const newSearchTerm = event.target.value;
        setSearchTerm(newSearchTerm);
        onSearch(newSearchTerm);
    };


    return (
        <Container style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>

            {/* Search Bar */}
            <div className="mb-3" style={{ width: '-webkit-fill-available', marginTop: '3rem' }}>
                <input
                    type="text"
                    placeholder="Search for a country..."
                    value={searchTerm}
                    onChange={handleSearch}
                    className="form-control"
                />
            </div>

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
                    <Col xs={12} sm={6} md={4} lg={3} key={index}
                        onClick={(e) => { return navigate(`country-info/${countryName}`); }}
                    >
                        <Card className="mb-3 grow pointer">
                            <Card.Body>

                                <Card.Text>{countryName}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}

                {codes.length > 0 && radioValue == SearchEnum.CODE && codes.map((country, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index}
                        onClick={(e) => { return navigate(`country-info/${country.name}`); }}
                    >
                        <Card className="mb-3 grow pointer">
                            <Card.Body>


                                <Card.Title>{country.name}</Card.Title>
                                <Table striped bordered >
                                    <tbody>
                                        <tr>
                                            <td>cca2</td>
                                            <td>{country.cca2}</td>
                                        </tr>
                                        <tr>
                                            <td>ccn3</td>
                                            <td>{country.ccn3}</td>
                                        </tr>
                                        <tr>
                                            <td>cca3</td>
                                            <td>{country.cca3}</td>
                                        </tr>
                                        <tr>
                                            <td>cioc</td>
                                            <td>{country.cioc}</td>
                                        </tr>
                                    </tbody>
                                </Table>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}

                {currencies.length > 0 && radioValue == SearchEnum.CURRENCY && currencies.map((country, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index}
                        onClick={(e) => { return navigate(`country-info/${country.name}`); }}
                    >
                        <Card className="mb-3 grow pointer">
                            <Card.Body>


                                <Card.Title>{country.name}</Card.Title>

                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Code</td>
                                            <td>Symbol</td>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {Object.entries(country.currencies).map(([code, currency]) => (
                                            <tr key={code}>
                                                <td>{currency.name}</td>
                                                <td>{code}</td>
                                                <td>{currency.symbol}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}

                {languages.length > 0 && radioValue == SearchEnum.LANGUAGE && languages.map((country, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index}
                        onClick={(e) => { return navigate(`country-info/${country.name}`); }}
                    >
                        <Card className="mb-3 grow pointer">
                            <Card.Body>


                                <Card.Title>{country.name}</Card.Title>

                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Code</td>
                                            <td>Language</td>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {Object.entries(country.languages).map(([name, lang]) => (
                                            <tr key={name}>
                                                <td>{name}</td>
                                                <td>{lang}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}


                {capitals.length > 0 && radioValue == SearchEnum.CAPITAL_CITY && capitals.map((country, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index}
                        onClick={(e) => { return navigate(`country-info/${country.name}`); }}
                    >
                        <Card className="mb-3 grow pointer">
                            <Card.Body>


                                <Card.Title>{country.name}</Card.Title>
                                {country.capital.length == 1 && <Card.Text>{country.capital[0]}</Card.Text>}

                                {country.capital.length > 1 && <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Capitals</td>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {country.capital.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>}

                            </Card.Body>
                        </Card>
                    </Col>
                ))}


                {regions.length > 0 && radioValue == SearchEnum.REGION && regions.map((country, index) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={index}
                        onClick={(e) => { return navigate(`country-info/${country.name}`); }}
                    >
                        <Card className="mb-3 grow pointer">
                            <Card.Body>


                                <Card.Title>{country.name}</Card.Title>
                                <Card.Text>{country.region}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}

                {
                    (subregions.length > 0 && radioValue === SearchEnum.SUBREGIONS) ? (
                        subregions.map((country, index) => (
                            <Col xs={12} sm={6} md={4} lg={3} key={index} onClick={(e) => navigate(`country-info/${country.name}`)}>
                                <Card className="mb-3 grow pointer">
                                    <Card.Body>
                                        <Card.Title>{country.name}</Card.Title>
                                        <Card.Text>{country.subregion}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) :
                    <></> 
                    // subregions.length === 0 && <Spinner animation="grow" variant="primary" />
                }


                {
                    radioValue === SearchEnum.TRANSLATION && translations.length > 0 ? (
                        translations.map((country, index) => (
                            <Col key={index} onClick={(e) => navigate(`country-info/${country.name}`)}>
                                <Card className="mb-3 grow pointer">
                                    <Card.Body>
                                        <Card.Title>{country.name}</Card.Title>
                                        <Table striped responsive variant="dark">
                                            <thead>
                                                <tr>
                                                    <td>Language</td>
                                                    <td>Common</td>
                                                    <td>Official</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Object.entries(country.translations).map(([language, translation]) => (
                                                    <tr key={language}>
                                                        <td>{language}</td>
                                                        <td>{translation.common}</td>
                                                        <td>{translation.official}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    ) : (
                        <></>
                        // setShowSpinner(true)
                        // translations.length <= 0 && <Spinner animation="grow" variant="primary" />
                    )
                }

                {showSpinner && <Spinner animation="grow" variant="primary" />}

            </Row>
        </Container>
    );
}
