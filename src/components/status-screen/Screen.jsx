import propTypes from 'prop-types'
import './Screen.css'

const Screen = ({screen}) => {

    const styles = {
        background: screen.background,
    }
    return(
        <section className='screen' style={styles}>
            <h1>{screen.title}</h1>
            <p>{screen.description}</p>
        </section>
    )
}

Screen.propTypes = {
    screen: propTypes.object
}

export default Screen