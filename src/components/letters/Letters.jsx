import propTypes from 'prop-types'
import Letter from './Letter'
import './Letters.css'

const Letters = (props) => {

    const lettersElement = props.wordGuess.map((el, index) => (
        <Letter key={index} el={el} />
    ))
    
    return(
        <section className="letters">
            {lettersElement}
        </section>
    )
}

Letters.propTypes = {
    wordGuess: propTypes.array
}

export default Letters