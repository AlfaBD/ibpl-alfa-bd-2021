import React from 'react';
// import './audio-recording.page.styles.scss';
import ReactPlayer from 'react-player';
import Recorder from './gravador';
import { uploadAudio } from '../../services/AudioService'
// import WordsList from '../../components/words-list/words-list.component';
// import { uploadAudio } from '../../services/audio-upload.service';

// Mocked words for now
const mockedWords = [
    "Palavra a ser lida pelo aluno",
    "Amigo",
    "Amor",
    "Felicidade",
    "Casa",
    "Eu gosto de estudar",
    "Estudar é bem legal",
    "É importante aprender"
]

class AudioRecordingPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            record: false,
            words: mockedWords,
            recordedAudioUrl: null,
            recordingBlob: null
        }
    }

    startRecording = () => {
        this.setState({ record: true });
    }
    
    stopRecording = () => {
        this.setState({ record: false });
    }

    onData = (recordingBlob) => {
        console.log('chunk of real-time data is: ', recordingBlob)
    }

    onStop = async (recordingBlob) => {
        console.log('recorded blob is: ', recordingBlob)
        this.setState({recordedAudioUrl: recordingBlob.blobURL, recordingBlob})
    }

    onAudioUpload = async () => {
        console.log('Uploading audio')
        const audioBlob = this.state.recordingBlob.blob;
        // We will keep the student ID as 1 meanwhile
        const student = { userId: 1, name: 'Gabriel' }
        const taskId = 1;
        try {
            const  fileReader = new FileReader();
            fileReader.onloadend = async function() {
                const encodedAudio = fileReader.result;
                try {
                    const uploadResult = await uploadAudio(encodedAudio, {userId: student.userId, taskId: taskId});
                    console.log(uploadResult)
                    alert('Audio salvo com sucesso!')
                } catch(err) {
                    alert('Erro ao salvar audio!')
                }
                

            }
            fileReader.readAsDataURL(audioBlob)

        } catch (err) {
            console.log(err)
        }
        
    }

    onRecordAgain = () => {
        this.setState({
            record: false,
            recordedAudioUrl: null,
            recordingBlob: null
        })
    }

    render() {
        return (
            <div className="audio-recording-page">
                <div className="main-recorder">
                    <Recorder
                    record={this.state.record}
                    onData={this.onData}
                    onStop={this.onStop} />
                    <div className="recorder-control">
                        <button onClick={this.startRecording} type="button">Start</button>
                        <button onClick={this.stopRecording} type="button">Stop</button>
                    </div>
                    <div className="player">
                        <ReactPlayer 
                        height={70}
                        controls={this.state.recordedAudioUrl ? true : false}
                        url={this.state.recordedAudioUrl}/>
                    </div>
                    {
                        this.state.recordedAudioUrl ? 
                        (
                            <div className="upload-button">
                                <button type="button" onClick={this.onAudioUpload}>Enviar Resposta</button>
                                <button type="button" onClick={this.onRecordAgain}>Gravar Novamente</button>
                            </div>
                        )
                        : null
                    }
                    
                </div>
                {/* <div className="words-list-pannel">
                    <WordsList words={this.state.words}/>
                </div> */}
            </div>
        )
    }
}

export default AudioRecordingPage;