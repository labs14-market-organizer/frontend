import React from "react";
import Arrow from "../assets/ic-arrow-back.svg";
import { bgWhite } from "ansi-colors";
import color from "@material-ui/core/colors/lightGreen";

class AddBooths extends React.Component {
    render() {
        return (
            <form>
                <div className="header">
                    <img src={Arrow} />
                    <h4 className="addbooths">Add Booths</h4>
                </div>
                
            </form>
        )
    }
}

export default AddBooths;
