export default function SearchBar(props) {
    return (
        <div className="mb-3" style={{ width: '-webkit-fill-available', marginTop: '3rem' }}>
            <input
                type="text"
                placeholder="Search for a country..."
                value={props.searchTerm}
                onChange={props.handleSearch}
                className="form-control"
            />
        </div>
    );
}