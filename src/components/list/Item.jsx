import propTypes from 'prop-types'

const Item = (props) => {

    const styles = {
        background: props.item.background,
        color: props.item.color
    }

    return(
        <span style={styles}>{props.item.value}</span>
    )
}

Item.propTypes = {
    item: propTypes.string
}

export default Item