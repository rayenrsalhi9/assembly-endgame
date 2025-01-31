import propTypes from 'prop-types'

const Key = (props) => {

    const styles = {
        background: props.el.isCorrect === true ? '#10A95B' : 
        props.el.isCorrect === false ? '#EC5D49' : '#FCBA29',
        opacity: props.el.isDisabled ? .5 : 1,
        pointerEvents: props.el.isDisabled ? 'none' : '',
    }

    return(
        <button style={styles}>{props.el.value}</button>
    )
}

Key.propTypes = {
    el: propTypes.object
}

export default Key