import Item from './Item'
//import emptyHeart from '../../assets/empty-heart.png'
import fullHeart from '../../assets/filled-heart.png'
import './List.css'

const List = () => {

    const hearts = Array(10).fill({
        src: fullHeart,
        alt: 'full heart icon'
    })

    const itemsElement = hearts.map((heart, index) => (
        <Item key={index} heart={heart} />
    ))

    return(
        <section className='items-list'>
            {itemsElement}
        </section>
    )
}

export default List;