export default function PlaceImg({ place, index = 0, className = null }) {
    if (!place.photos?.length) {
        return '';
    }
    if (!className) {
        className = 'object-cover';
    }
    return (
        <img className={className} src={'https://jmkunh6u2v.us-east-1.awsapprunner.com/uploads/' + place.photos[index]} alt="" />
    );
}