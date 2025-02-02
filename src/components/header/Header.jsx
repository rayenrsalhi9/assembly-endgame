import propTypes from 'prop-types'
import './Header.css'

const Header = ({hearts}) => {
    return(
        <header>
            <h1>Code: Rewind</h1>
            <p>Guess the hidden word in under {hearts.length} tries, or your coding skills fade away forever! 💻⚡</p>
        </header>
    )
}

Header.propTypes = {
    hearts: propTypes.array
}

export default Header