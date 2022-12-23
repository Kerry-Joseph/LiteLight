export default function Nav(){

    const Search = () => {
        return (
            <div>
                <input type="text" name="search" id="" placeholder="Search LiteLight"/>
            </div>
        )
    }

    return (
        <nav>
            {/* nav - search */}
            <Search />
            {/* nav - catagories */}
            {/* nav - deliver to/sign in - mobile only */}
            {/* nav - navigation button - bottom of screen - mobile only */}
        </nav>
    )
}