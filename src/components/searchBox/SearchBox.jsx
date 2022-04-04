import "./SearchBox.css";
export const SearchBox=()=>{
    return(
        <form action="" className="search-form">
        <input type="search" id="search-bar" value="" placeholder="search Quiz here..."/>
        <label htmlFor="search-bar" className="fas fa-search"></label>
      </form>
    )
}