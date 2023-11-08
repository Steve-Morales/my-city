import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GetAPI from "../utils/apiGet";
import { Table } from "react-bootstrap";

export default function CountryInfo() {
    const [info, setInfo] = useState(null);

    const { country } = useParams();

    useEffect(() => {
        GetAPI.info(setInfo, encodeURIComponent(country));
    }, []);


    return (
        <div>
            {info &&
                <Table striped bordered hover responsive >
                    <tbody>
                        <tr className="text-center fw-bold">
                            <td>Property</td>
                            <td>Value</td>
                        </tr>

                        <tr>
                            <td>Country Code Alpha-2 (CCA2)</td>
                            <td>{info.cca2}</td>
                        </tr>

                        <tr>
                            <td>Country Code Numeric-3 (CCA3)</td>
                            <td>{info.cca3}</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Alternative Spellings</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {info.altSpellings.map((spelling, index) => (
                                            <tr key={index}><td>{spelling}</td></tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>

                        <tr>
                            <td>Area (sq km)</td>
                            <td>{info.area}</td>
                        </tr>

                        <tr>
                            <td>Borders</td>
                            <td>
                                {
                                    info.borders
                                        ?
                                        (<Table striped="columns" responsive variant="dark">
                                            <thead>
                                                <tr>
                                                    <th>Countries (Alternative Spellings)</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {info.borders.map((country, index) => (
                                                    <tr key={index}><td>{country}</td></tr>
                                                ))}
                                            </tbody>
                                        </Table>)
                                        :
                                        <>N/A</>
                                }
                            </td>
                        </tr>

                        <tr>
                            <td>Calling Codes - International Dialing Codes (IDD)</td>
                            <td>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Root</th>
                                            <th>Suffixes</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {info.idd.suffixes.map((suffix, index) => (
                                            <tr key={index}>
                                                <td>{index == 0 ? info.idd.root : ""}</td>
                                                <td>{suffix}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </td>

                        </tr>

                        <tr>
                            <td>Capital</td>
                            <td>
                                {
                                    info.capital.length > 1
                                        ?
                                        <Table striped="columns" responsive variant="dark">
                                            <thead>
                                                <tr>
                                                    <th>Capitals</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {info.capital.map((capital, index) => (
                                                    <tr key={index}>
                                                        <td>{capital}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        :
                                        <>{info.capital[0]}</>
                                }
                            </td>
                        </tr>

                        <tr>
                            <td>Capital Info</td>
                            <td>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Property</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Object.entries(info.capitalInfo).map(([property, value], index) => (
                                            <tr key={index}>
                                                <td>{property}</td>
                                                <td>{JSON.stringify(value)}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </td>

                        </tr>

                        <tr>
                            <td>Car Signs</td>
                            <td>
                                {
                                    info.car.signs.length > 0 ?
                                        <Table striped="columns" responsive variant="dark">
                                            <tbody>
                                                {info.car.signs.map((sign, index) => (
                                                    <tr key={index}>
                                                        <td>{sign}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                        :
                                        <>[]</>}
                            </td>
                        </tr>
                        <tr>
                            <td>Driving Side</td>
                            <td>{info.car.side}</td>
                        </tr>

                        <tr>
                            <td>CIOC</td>
                            <td>{info.cioc}</td>
                        </tr>

                        <tr>
                            <td>Coat of Arms (SVG)</td>
                            <td>
                                <a href={info.coatOfArms.svg} target="_blank" rel="noopener noreferrer">
                                    {info.coatOfArms.svg}
                                </a>
                                <br />
                                <img src={info.coatOfArms.svg} width={'25%'} />
                            </td>
                        </tr>

                        <tr>
                            <td>Continents</td>
                            <td>
                                <Table striped="columns" responsive variant="dark">
                                    <tbody>
                                        {info.continents.map((continent, index) => (
                                            <tr key={index}>
                                                <td>{continent}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>

                        <tr>
                            <td>Currencies</td>
                            <td>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Name</td>
                                            <td>Code</td>
                                            <td>Symbol</td>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {Object.entries(info.currencies).map(([code, currency]) => (
                                            <tr key={code}>
                                                <td>{currency.name}</td>
                                                <td>{code}</td>
                                                <td>{currency.symbol}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>

                        <tr>
                            <td>Demonyms</td>
                            <td>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Language</td>
                                            <td>M</td>
                                            <td>F</td>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {Object.entries(info.demonyms).map(([lang, gender]) => (
                                            <tr key={lang}>
                                                <td>{lang}</td>
                                                <td>{gender.m}</td>
                                                <td>{gender.f}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                            </td>
                        </tr>

                        <tr>
                            <td>Independent</td>
                            <td>{info.independent ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td>FIFA Code</td>
                            <td>{info.fifa}</td>
                        </tr>

                        <tr>
                            <td>Flag Emoji</td>
                            <td>{info.flag}</td>
                        </tr>

                        <tr>
                            <td>Flags</td>
                            <td>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Flag (PNG)</td>
                                            <td>Flag (SVG)</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href={info.flags.png} target="_blank" rel="noopener noreferrer" alt={info.alt}>
                                                    {info.flags.png}
                                                </a>
                                                <br />
                                                <img src={info.flags.png} />
                                            </td>
                                            <td>
                                                <a href={info.flags.svg} target="_blank" rel="noopener noreferrer" alt={info.alt}>
                                                    {info.flags.svg}
                                                </a>
                                                <br />
                                                <img src={info.flags.svg} width="100%" height="100%" style={{ verticalAlign: 'bottom' }} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </td>
                        </tr>

                        <tr>
                            <td>Government Investment in Decarbonising Industry (GIDI)</td>
                            <td>
                                {JSON.stringify(info.gini) !== '{}' &&
                                    <Table striped="columns" responsive variant="dark">
                                        <thead>
                                            <tr>
                                                <td>Year</td>
                                                <td>Value</td>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {info.gini && Object.entries(info.gini).map(([year, value]) => (
                                                <tr key={year}>
                                                    <td>{year}</td>
                                                    <td>{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>}

                            </td>
                        </tr>

                        <tr>
                            <td>Landlocked</td>
                            <td>{info.landlocked ? "Yes" : "No"}</td>
                        </tr>

                        <tr>
                            <td>Languages</td>
                            <td>

                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Code</td>
                                            <td>Language Name</td>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {Object.entries(info.languages).map(([lang, name]) => (
                                            <tr key={lang}>
                                                <td>{lang}</td>
                                                <td>{name}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                        <tr>
                            <td>Latitude and Longitude</td>
                            <td>{info.latlng.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>Google Maps</td>
                            <td>
                                <a href={info.maps.googleMaps} target="_blank" rel="noopener noreferrer">
                                    {info.maps.googleMaps}
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td>OpenStreetMaps</td>
                            <td>
                                <a href={info.maps.openStreetMaps} target="_blank" rel="noopener noreferrer">
                                    {info.maps.openStreetMaps}
                                </a>
                            </td>
                        </tr>

                        <tr>
                            <td>Names</td>
                            <td>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Common</td>
                                            <td>Official</td>
                                        </tr>

                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>{info.name.common}</td>
                                            <td>{info.name.official}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </td>
                        </tr>


                        <tr>
                            <td>Native Names</td>
                            <td>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <th>Language</th>
                                            <th>Official Name</th>
                                            <th>Common Name</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {Object.entries(info.name.nativeName).map(([language, name], index) => (
                                            <tr key={index}>
                                                <td>{language}</td>
                                                <td>{name.common}</td>
                                                <td>{name.official}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                        <tr>
                            <td>Country Code Numeric-3 (CCN3)</td>
                            <td>{info.ccn3}</td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td>{info.population.toLocaleString()}</td>
                        </tr>


                        {info.postalCode &&
                            <tr>
                                <td>Postal Code</td>
                                <td>
                                    <Table striped="columns" responsive variant="dark">
                                        <thead>
                                            <tr>
                                                <td>Format</td>
                                                <td>Regex</td>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr>
                                                <td>{info.postalCode.format}</td>
                                                <td>{info.postalCode.regex}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        }
                        {/* <tr>
                            <td>Postal Code Format</td>
                            <td>{(info.postalCode && info.postalCode.format) ? info.postalCode.format : ""}</td>
                        </tr>
                        <tr>
                            <td>Postal Code Regex</td>
                            <td>{(info.postalCode && info.postalCode.regex) ? info.postalCode.regex : ""}</td>
                        </tr> */}
                        <tr>
                            <td>Region</td>
                            <td>{info.region}</td>
                        </tr>
                        <tr>
                            <td>Start of Week</td>
                            <td>{info.startOfWeek}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{info.status}</td>
                        </tr>

                        <tr>
                            <td>Subregion</td>
                            <td>{info.subregion}</td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Timezones</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {info.timezones.map((tz, index) =>
                                            <tr key={index}>
                                                <td>{tz}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>

                        <tr>
                            <td colSpan={2}>
                                <Table striped="columns" responsive variant="dark">
                                    <thead>
                                        <tr>
                                            <td>Top-Level Domain</td>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {info.tld.map((domain, index) =>
                                            <tr key={index}>
                                                <td>{domain}</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </Table>
                            </td>
                        </tr>




                        <tr>
                            <td>UN Member</td>
                            <td>{info.unMember ? "Yes" : "No"}</td>
                        </tr>


                        <tr>
                            <td colSpan={2} className="text-center">
                            <span className="fw-bold fs-4">Translations (Common)</span>

                            <Table striped responsive variant="dark">
                        <thead>
                            <tr>
                                <td>Language</td>
                                <td>Common</td>
                                <td>Official</td>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(info.translations).map(([language, translation]) => (
                                <tr key={language}>
                                    <td>{language}</td>
                                    <td>{translation.common}</td>
                                    <td>{translation.official}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                            </td>
                        </tr>





                        <tr>
                            <td>Coat of Arms (PNG)</td>
                            <td>
                                <a href={info.coatOfArms.png} target="_blank" rel="noopener noreferrer">
                                    {info.coatOfArms.png}
                                </a>
                                <br />
                                <img src={info.coatOfArms.png} width={'25%'} />
                            </td>
                        </tr>

                    </tbody>
                </Table>
            }
        </div>
    );
}