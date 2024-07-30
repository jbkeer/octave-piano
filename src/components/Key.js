import React from "react";
import _ from "lodash";
import { NOTE_TO_KEY } from "../global/constants.js";

class Key extends React.Component {

    noteIsFlat = (note) => {
        return note.length > 2;
    }
    keyIsPressed = (note, pressedKeys) => {
        return _.includes(pressedKeys, NOTE_TO_KEY[note]);
    }
    
    render() {

    let keyClasssName = "key";

    const noteIsFlat = this.noteIsFlat(this.props.note);
    const keyIsPressed = this.keyIsPressed(this.props.note, this.props.pressedKeys);

    

    if(noteIsFlat){
        keyClasssName += " flat";
    }
    if (keyIsPressed) {
        keyClasssName += " pressed"
    }

    let key;
    if (noteIsFlat) {
        key = (
            <div className={keyClasssName}></div>
        );
    } else {
        key = (
            <div className={keyClasssName}>
                <div className="key-text">
                    {this.props.note.toUpperCase()}
                </div>
            </div>
        );
    }

return key;

    }
}

export { Key };