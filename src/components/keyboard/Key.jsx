import propTypes from 'prop-types'

const Key = ({el, handleClick}) => {

    const styles = {
        background: el.isCorrect === true ? '#10A95B' : 
        el.isCorrect === false ? '#EC5D49' : '#FCBA29',
        opacity: el.isDisabled ? .5 : 1,
        pointerEvents: el.isDisabled ? 'none' : '',
    }

    return(
        <button 
            style={styles} 
            onClick={() => handleClick(el.value.toLowerCase())}
        >
            {el.value}
        </button>
    )
}

Key.propTypes = {
    el: propTypes.object,
    handleClick: propTypes.func
}

export default Key