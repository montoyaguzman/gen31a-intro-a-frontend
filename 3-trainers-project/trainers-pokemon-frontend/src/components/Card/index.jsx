import './index.css';

function Card(props) {

    const { name } = props;

    // { image, region, rank, name, team }

    const imgStyles = {
        width: '100%',
        height: '100%',
    };

    return (
        <>
            <div className='container-card'>

                <div className="image-trainer">
                    <img src="" alt="imagen del entrenador" style={imgStyles} />
                </div>
                <div className="card-content">
                    <div className="stats">
                        <p className="region-tag">region1</p>
                        <div className="rank">
                            <p className="rank-label">rango:</p>
                            <p className="rank-tag">99</p>
                        </div>
                    </div>
                    <h2 className="title">{name}</h2>

                    <div className="team">
                        <h3 className="team-label">Equipo</h3>
                        <div className="team-members">

                            <div className="pokemon-tag">
                                <p className="pokemon-tag--name">poke1</p>
                                <p className="pokemon-tag--level">Nivel: 99</p>
                            </div>

                        </div>
                    </div>

                    <a href="#" className="button-default">más información</a>

                </div>
            </div>
        </>
    );

}

export { Card };