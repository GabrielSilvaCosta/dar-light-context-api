import image from "../assets/images/dark-light.jpg"
import '../styles/Image.css'


export default function Image() {
    return (
        <div>
            <img className="logo" src={image} alt="Logo" />
        </div>
    );
}