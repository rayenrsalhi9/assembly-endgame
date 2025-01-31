import Item from './Item'
import './List.css'

const List = () => {

    const items = [
        {
            value: 'HTML',
            background: '#E2680F',
            color: '#F9F4DA'
        },
        {
            value: 'CSS',
            background: '#328AF1',
            color: '#F9F4DA'
        },
        {
            value: 'Javascript',
            background: '#F4EB13',
            color: '#1E1E1E' 
        },
        {
            value: 'React',
            background: '#2ED3E9',
            color: '#1E1E1E'
        },
        {
            value: 'Typescript',
            background: '#298EC6',
            color: '#F9F4DA'
        },
        {
            value: 'Node.js',
            background: '#599137',
            color: '#F9F4DA'
        },
        {
            value: 'Python',
            background: '#FFD742',
            color: '#282726'
        },
        {
            value: 'Ruby',
            background: '#D02B2B',
            color: '#F9F4DA'
        },
        {
            value: 'Assembly',
            background: '#2D519F',
            color: '#F9F4DA'
        },
        
    ]

    const itemsElement = items.map((item, index) => (
        <Item key={index} item={item} />
    ))

    return(
        <section className='items-list'>
            {itemsElement}
        </section>
    )
}

export default List;