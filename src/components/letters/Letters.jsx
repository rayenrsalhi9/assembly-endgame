import Letter from './Letter'
import './Letters.css'

const Letters = () => {
    // for false answer: color: #EC5D49
    return(
        <section className="letters">
            <Letter value='r'/>
            <Letter value='e'/>
            <Letter value=''/>
            <Letter value='a'/>
            <Letter value=''/>
            <Letter value='t'/>
            <Letter value=''/>
            <Letter value='r'/>
        </section>
    )
}

export default Letters