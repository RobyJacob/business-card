import dp from '../assets/dp.svg'

export default function Info() {
    return (
        <div className='info'>
            <img className='info--img' src={ dp }/>
            <h2 className='info--name'>Laura Smith</h2>
            <h4 className='info--designation'>Frontend Developer</h4>
            <h5 className='info--website'>laurasmith.website</h5>
            <div className='wrapper'>
                <button className='emailbtn'>
                    <span className='emailbtn--wrapper'>
                        <i class="fas fa-envelope fa-sm"></i>
                    </span>
                    Email
                </button>
                <button className='linkedinbtn'>
                    <span className='linkedinbtn--wrapper'>
                        <i class="fa-brands fa-linkedin fa-sm"></i>
                    </span>
                    LinkedIn
                </button>
            </div>
        </div>
    )
}