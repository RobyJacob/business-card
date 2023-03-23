import twitter from '../assets/twitter.svg'
import facebook from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import github from '../assets/github.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <img className='footer--twitter' src={ twitter } />
            <img className='footer--facebook' src={ facebook } />
            <img className='footer--insta' src={ insta } />
            <img className='footer--github' src={ github } />
        </div>
    )
}