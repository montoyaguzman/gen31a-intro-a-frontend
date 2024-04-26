import './index.css';

import { SearchBar } from '../../components/SearchBar';
import { ListCard } from '../../components/ListCard';
import { Card } from '../../components/Card';
import { getTrainers } from '../../services/Trainers';
import { useState, useEffect } from 'react';

function Home() {


    const [numero, setNumero] = useState(0);
    const [trainers, setTrainers] = useState([]);

    // const trainers = [
    //     { id: 1, name: 'Ash', team: [], rank: '', region: '' },
    //     { id: 2, name: 'Misty', team: [], rank: '', region: '' },
    //     { id: 3, name: 'Leo', team: [], rank: '', region: '' },
    //     { id: 4, name: 'Alain', team: [], rank: '', region: '' },
    //     { id: 5, name: 'Brock', team: [], rank: '', region: '' },
    // ];


    const getData = async () => {
        const newTrainers = await getTrainers();
        setTrainers(newTrainers);
    }

    const addNumber = () => {
        let newNumero = numero + 1;
        setNumero(newNumero);
    }

    // 1. El useEffect no tiene condiciones
    // ===> El callback se ejecuta en cada renderizado
    // useEffect(() => {
    //     console.log('useEffect SIN CONDICIONES');
    // });

    // 2. El useEffect tiene como condicion []
    // ===> Solamente se ejecuta 1 vez
    useEffect(() => {
        console.log('useEffect CON []');
        getData();
    }, []);

    // 3. El useEffect tienes ciertas condiciones en el [conditon1]
    // ===> Solo se ejecuta cuando condicion1 cambia de valor (o las N condiciones)
    // useEffect(() => {
    //     console.log('useEffect CON [conditon1]');
    // }, [condicion1, condicion2]);

    return (
        <>
            <SearchBar />

            <div className="counter-container">
                <button onClick={addNumber}>Incrementar</button>
                <span>El numero es: {numero}</span>
            </div>

            <ListCard>
                {
                    trainers.map((element, index) => {
                        return (
                            <Card
                                key={element.id}
                                name={element.name}
                            />
                        )
                    })
                }
            </ListCard>

        </>
    )
}

export { Home };