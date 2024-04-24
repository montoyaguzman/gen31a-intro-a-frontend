import './index.css';

function Card(props) {
    const { name } = props;
    return (
        <h1>Yo soy: {name}</h1>
    )
}

export { Card };