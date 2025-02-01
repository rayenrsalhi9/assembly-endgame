import Item from './Item'
import propTypes from 'prop-types'
import './List.css'

const List = ({hearts}) => {

    const itemsElement = hearts.map((heart, index) => (
        <Item key={index} heart={heart} />
    ))

    return(
        <section className='items-list'>
            {itemsElement}
        </section>
    )
}

List.propTypes = {
    hearts: propTypes.array
}

export default List;