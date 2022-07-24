import React from "react";

function About(props){
    return (
        <div>
            <aside>
                <img
                    src = {props.image}
                    alt = "blog logo"
                />
                <p>{props.about} </p>
            </aside>
        </div>
    )
}
export default About;