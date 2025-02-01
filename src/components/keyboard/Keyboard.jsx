import propTypes from 'prop-types'
import Key from './Key'
import './Keyboard.css'

const Keyboard = ({handleClick, allKeys}) => {

    const keysElement = allKeys.map((el, index) => {
        return(
            <Key key={index} el={el} handleClick={handleClick}/>
        )
    })

    return(
        <section className='keyboard'>
            {keysElement}
        </section>
    )
}

Keyboard.propTypes = {
    handleClick: propTypes.func,
    allKeys: propTypes.array
}

export default Keyboard