import propTypes from 'prop-types'
import './NewGameButton.css'

const NewGameButton = ({replay}) => {
    return(
        <button 
            className='new-game-button'
            onClick={replay}
        >
            New Game
        </button>
    )
}

NewGameButton.propTypes = {
    replay: propTypes.func
}

export default NewGameButton