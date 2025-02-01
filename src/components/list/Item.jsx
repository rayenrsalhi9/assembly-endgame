import propTypes from 'prop-types'

const Item = ({heart}) => {
    return(
        <img src={heart.src} alt={heart.alt} />
    )
}

Item.propTypes = {
    heart: propTypes.object
}

export default Item