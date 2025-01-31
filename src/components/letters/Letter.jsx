import propTypes from 'prop-types'

const Letter = (props) => {
    return(
        <span>{props.value.toUpperCase()}</span>
    )
}

Letter.propTypes = {
    value: propTypes.string
}

export default Letter