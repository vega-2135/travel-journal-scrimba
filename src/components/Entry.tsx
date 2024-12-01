
import location from '../assets/images/location.webp'

export default function Entry(props) {
    return (
        <>
            <article className='main-container'>
                <div>
                    <img className='location-img-container' src={props.image.src} alt={props.image.alt} />
                </div>
                <div className='content'>
                    <img src={location} className='location' alt="location icon" />
                    <span className='japan'>{props.country}</span>
                    <a className='link' href={props.googleMapsLink}>
                        View on Google Maps
                    </a>
                    <h2>{props.title}</h2>
                    <p className='date'>{props.date}</p>
                    <p className='description'>{props.text}</p>
                </div>
            </article>
        </>
    )
}