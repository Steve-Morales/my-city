# My Country

**A React app for searching countries by name, code, currency, language, capital, region, subregion, or translated name, using live data from the REST Countries API.**

## Why it exists

The REST Countries API returns large, deeply nested JSON. This app turns it into fast, searchable cards, and was built to practice consuming a third-party REST API cleanly: one service layer for requests, one place for parsing, and components that only render.

## Quick start

```bash
git clone https://github.com/Steve-Morales/my-city.git
cd my-city
npm install
npm start
```

Then open http://localhost:3000.

## How it works

- **Search:** pick a category (name, code, currency, language, capital, region, subregion, translation) and type a query. Each category maps to its own REST Countries v3.1 endpoint.
- **Service layer:** `src/services/countriesService.js` and `src/utils/apiGet.js` handle all requests and JSON parsing, so components never touch raw API data.
- **Rendering:** each result type has its own card component in `src/components/`.
- **State:** `useEffect` hooks re-run the search whenever the query or selected category changes, and drive the loading spinner.

## Tech stack

React · JavaScript · REST API · JSON
