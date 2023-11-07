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
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <th>Property</th>
                            <th>Value</th>
                        </tr>
                        <tr>
                            <td>Common Name</td>
                            <td>{info.name.common}</td>
                        </tr>
                        <tr>
                            <td>Official Name</td>
                            <td>{info.name.official}</td>
                        </tr>
                        <tr>
                            <td>Native Name (Dutch)</td>
                            <td>{info.name.nativeName.nld ? info.name.nativeName.nld.common : ""}</td>
                        </tr>
                        <tr>
                            <td>Native Name (Papiamento)</td>
                            <td>{info.name.nativeName.pap ? info.name.nativeName.pap.common : ""}</td>
                        </tr>
                        <tr>
                            <td>Top-Level Domain</td>
                            <td>{info.tld[0]}</td>
                        </tr>
                        <tr>
                            <td>Country Code Alpha-2</td>
                            <td>{info.cca2}</td>
                        </tr>
                        <tr>
                            <td>Country Code Numeric-3</td>
                            <td>{info.ccn3}</td>
                        </tr>
                        <tr>
                            <td>Country Code Alpha-3</td>
                            <td>{info.cca3}</td>
                        </tr>
                        <tr>
                            <td>CIOC</td>
                            <td>{info.cioc}</td>
                        </tr>
                        <tr>
                            <td>FIFA Code</td>
                            <td>{info.fifa}</td>
                        </tr>
                        <tr>
                            <td>Independent</td>
                            <td>{info.independent ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td>Status</td>
                            <td>{info.status}</td>
                        </tr>
                        <tr>
                            <td>UN Member</td>
                            <td>{info.unMember ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td>Currency</td>
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
                            <td>IDD Root</td>
                            <td>{info.idd.root}</td>
                        </tr>
                        <tr>
                            <td>IDD Suffixes</td>
                            <td>{info.idd.suffixes.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>Capital</td>
                            <td>{info.capital[0]}</td>
                        </tr>
                        <tr>
                            <td>Latitude and Longitude</td>
                            <td>{info.capitalInfo.latlng.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>Alternate Spellings</td>
                            <td>{info.altSpellings.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>Region</td>
                            <td>{info.region}</td>
                        </tr>
                        <tr>
                            <td>Subregion</td>
                            <td>{info.subregion}</td>
                        </tr>
                        <tr>
                            <td>Continents</td>
                            <td>{info.continents.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>Languages</td>
                            <td>
                                {Object.values(info.languages).join(", ")}
                            </td>
                        </tr>
                        <tr>
                            <td>Translations (Common)</td>
                            <td>{Object.values(info.translations).map(translation => translation.common).join(", ")}</td>
                        </tr>
                        <tr>
                            <td>Latitude and Longitude</td>
                            <td>{info.latlng.join(", ")}</td>
                        </tr>
                        <tr>
                            <td>Landlocked</td>
                            <td>{info.landlocked ? "Yes" : "No"}</td>
                        </tr>
                        <tr>
                            <td>Borders</td>
                            <td>{info.borders ? info.borders.join(", ") : "[]"}</td>
                        </tr>
                        <tr>
                            <td>Area (sq km)</td>
                            <td>{info.area}</td>
                        </tr>
                        <tr>
                            <td>Flag</td>
                            <td>{info.flag}</td>
                        </tr>
                        <tr>
                            <td>Demonyms (English)</td>
                            <td>{info.demonyms.eng.m} ({info.demonyms.eng.f})</td>
                        </tr>
                        <tr>
                            <td>Flag (SVG)</td>
                            <td>
                                <a href={info.flags.svg} target="_blank" rel="noopener noreferrer">
                                    {info.flags.svg}
                                </a>
                                <br />
                                <img src={info.flags.svg} width={'25%'} />
                            </td>
                        </tr>
                        <tr>
                            <td>Flag (PNG)</td>
                            <td>
                                <a href={info.flags.png} target="_blank" rel="noopener noreferrer">
                                    {info.flags.png}
                                </a>
                                <br />
                                <img src={info.flags.png} width={'25%'} />
                            </td>
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
                            <td>Coat of Arms (PNG)</td>
                            <td>
                                <a href={info.coatOfArms.png} target="_blank" rel="noopener noreferrer">
                                    {info.coatOfArms.png}
                                </a>
                                <br />
                                <img src={info.coatOfArms.png} width={'25%'} />
                            </td>
                        </tr>
                        <tr>
                            <td>Population</td>
                            <td>{info.population}</td>
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
                            <td>Gini Index</td>
                            <td>
                                {info.gini && Object.entries(info.gini).map(([year, value]) => (
                                    <span key={year}>
                                        {year}: {value}
                                    </span>
                                ))}
                            </td>
                        </tr>
                        <tr>
                            <td>Car Signs</td>
                            <td>{info.car.signs ? info.car.signs.join(", ") : "[]"}</td>
                        </tr>
                        <tr>
                            <td>Driving Side</td>
                            <td>{info.car.side}</td>
                        </tr>
                        <tr>
                            <td>Postal Code Format</td>
                            <td>{(info.postalCode && info.postalCode.format) ? info.postalCode.format : ""}</td>
                        </tr>
                        <tr>
                            <td>Postal Code Regex</td>
                            <td>{(info.postalCode && info.postalCode.regex) ? info.postalCode.regex : ""}</td>
                        </tr>
                        <tr>
                            <td>Start of Week</td>
                            <td>{info.startOfWeek}</td>
                        </tr>
                        <tr>
                            <td>Timezones</td>
                            <td>{info.timezones.join(", ")}</td>
                        </tr>
                    </tbody>
                </Table>
            }
        </div>
    );
}