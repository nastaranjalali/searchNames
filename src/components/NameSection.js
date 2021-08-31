import NameCard from "./NameCards";
import info from "../mockData/info";


function NameSection({searchResult}) {

    return (
        <div className="nameSection">
            {

                info.filter(currentValue => currentValue.first_name.toString().toUpperCase().includes(searchResult.toUpperCase())).map((currentValue, index) => {
                return <NameCard  key={index} firstName={currentValue.first_name} gender={currentValue.gender}/>
            })}





        </div>
    );

}

export default NameSection;