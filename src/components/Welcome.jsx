import '../styles/welcome.css';
import tropic from '../img/tropic.jpg';

export default function Welcome() {
    return (
        <div className="wrapper">
            <h1>Hello React Vite</h1>
            <p>This is going to be the coolest app in the world!</p>
            <img className='img' src={tropic} alt="tropic" />
        </div>
    );
}