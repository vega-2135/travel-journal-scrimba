
import location from '../assets/images/location.webp'

export default function Entry(props) {
    return (
        <>
            <article className='main-container'>
                <div>
                    <img className='location-img-container' src={props.entry.img.src} alt={props.entry.img.alt} />
                </div>
                <div className='content'>
                    <img src={location} className='location' alt="location icon" />
                    <span className='japan'>{props.entry.country}</span>
                    <a className='link' href={props.entry.googleMapsLink}>
                        View on Google Maps
                    </a>
                    <h2>{props.entry.title}</h2>
                    <p className='date'>{props.entry.dates}</p>
                    <p className='description'>{props.entry.text}</p>
                </div>
            </article>
        </>
    )
}