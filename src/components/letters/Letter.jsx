import propTypes from 'prop-types'

const Letter = (props) => {

    const styles = {
        color: props.el.isCorrect === false ? '#EC5D49' : '#F9F4DA',
        borderBottom: props.el.isCorrect === false ?
                    '1px solid #EC5D49' : 
                    '1px solid #F9F4DA'

    }

    return(
        <span style={styles}>{props.el.value.toUpperCase()}</span>
    )
}

Letter.propTypes = {
    el: propTypes.object
}

export default Letter