import {Searchbar} from "../components/Searchbar";

export const AppBar=()=>{
    return <div className="flex justify-between	pl-3 pr-3 pt-1">
    <div>
        Youtube
    </div>
    <div>
        <Searchbar />
    </div>
    <div>
        Logout
    </div>
</div>
}