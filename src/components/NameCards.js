import React from "react";

function NameCard(props) {



    return (
        <div className={"nameCard " + props.hide}>
            <h1>
                {props.firstName}
            </h1>
            <h3>
                {props.gender}
            </h3>

        </div>
    );

}

export default NameCard;