const SearchItem = ({ search, setSearch }) => {
    const handleSearch = (e) => {
        console.log(e.target);
    }

    return (
        <form className='searchForm flex gap-4 justify-center' onSubmit={(e) => e.preventDefault()}>
            <input
                id='search'
                type='text'
                role='searchbox'
                placeholder='Enter Symptoms'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="py-2 px-4 rounded-md"
            />
            <button onClick={e => handleSearch(e)} className="py-1 px-4 rounded-md bg-blue-600 text-white">Search</button>
        </form>
    )
}

export default SearchItem