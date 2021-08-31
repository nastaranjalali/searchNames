import React from "react";
function SearchBox({onChange}) {



    return (
        <form action="">
            <fieldset>
                <legend>First Name</legend>
                <input id="input" className="search" type="text" name="search" placeholder="Enter first name"
                       onChange={onChange}/>
                <select className="selectGender" name="selectGender" id="selectGender" >
                    <option value="Male"></option>
                    <option value="Female"></option>
                    <option value="Bigender"></option>
                    <option value="Non-binary"></option>
                    <option value="Genderqueer"></option>
                    <option value="Agender"></option>
                    <option value="Polygender"></option>
                </select>
            </fieldset>

        </form>
    );

}

export default SearchBox;