import Key from './Key'
import './Keyboard.css'

const Keyboard = () => {

    const allLetters = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z',
    ];

    const allKeys = allLetters.map(el => ({
        value: el,
        isDisabled: false,
        isCorrect: null
    }))

    const keysElement = allKeys.map((el, index) => <Key key={index} el={el}/>)

    return(
        <section className='keyboard'>
            {keysElement}
        </section>
    )
}

export default Keyboard