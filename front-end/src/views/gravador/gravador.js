import React from 'react'
import { ReactMic } from 'react-mic';


const Recorder = ({ record, onStop, onData }) => (
    <div className="recorder">
        <ReactMic 
        record={record}
        onStop={onStop}
        onData={onData}
        className="react-mic"
        strokeColor="#000000"
        backgroundColor="#c8e2f8"/>
    </div>
)

export default Recorder;