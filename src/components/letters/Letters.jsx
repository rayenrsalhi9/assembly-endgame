import propTypes from 'prop-types'
import Letter from './Letter'
import './Letters.css'

const Letters = (props) => {

    const lettersElement = props.word.split('').map((el, index) => (
        <Letter key={index} value={el} />
    ))
    

    // for false answer: color: #EC5D49
    return(
        <section className="letters">
            {lettersElement}
        </section>
    )
}

Letters.propTypes = {
    word: propTypes.string
}

export default Letters