import React from "react"
import _ from 'lodash';
import { Key } from './Key.js'
import { KEY_TO_NOTE, NOTES } from "../global/constants.js"
import { VALID_KEYS } from "../global/constants.js";
import ButtonWithTooltip from './ButtonWithTooltip';

class Piano extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pressedKeys: [],
        };
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }

    handleKeyDown = (event) => {
        if (event.repeat) {
            return;
        }
        const key = event.key;
        const updatedPressedKeys = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)) {
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    }

    handleKeyUp = (event) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if (index > -1) {
            this.setState(state => ({
                pressedKeys: state.pressedKeys.filter((_, i) => i !== index)
            }));
        }
    }

    playNote = (note) => {
        if (!_.isEmpty(note)) {
            const noteAudio = new Audio(document.getElementById(note).src);
            noteAudio.play();
        }
    } 

    render() {
        const keys = _.map(NOTES, (note, index) => {
            return (
                <Key
                    key={index}
                    note={note}
                    pressedKeys={this.state.pressedKeys}
                />
            );
        });

        const audioFiles = _.map(NOTES, (note, index) => {
            return (
                <audio
                    id={note}
                    key={index}
                    src={`../../notes/${note}.wav`}
                />
            )
        })

        return (
            <>
                <div className="i">
                    <ButtonWithTooltip
                        tooltipContent={
                            <div className='info'>
                            Press the keys on your computer keyboard to play the piano.
                            <br />
                            <br />
                            <div className='center'> &nbsp; W E  &nbsp; T Y U</div>
                            <div className='center'>A S D F G H J K</div>
                            </div>
                        }
                        >
                        <div className="left">i</div>
                    </ButtonWithTooltip>
                </div>
                <div className="piano">
                    {keys}
                </div>
                <div>
                    {audioFiles}
                </div>
            </>
        )
    }
}

export { Piano }