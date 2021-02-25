import React from 'react'

export default class YouTubeDebugger extends React.Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }

    handleBitrateClick = () => {
        this.setState((state)=>({
            settings: {...state.settings, bitrate: 12}
        }))
    }

    handleResolutionClick = () => {
        this.setState((state)=>({
            settings: {
                ...state.settings,
                video: {...state.settings.video, resolution: '720p'}
            }
        }))
    }

    render() {
        return (
            <div>
                <button 
                    className='bitrate'
                    onClick={this.handleBitrateClick}
                ></button>
                <button 
                    className='resolution'
                    onClick={this.handleResolutionClick}
                ></button>
            </div>
        )
    }
}