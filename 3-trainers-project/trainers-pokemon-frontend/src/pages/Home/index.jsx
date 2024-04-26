import './index.css';

import { SearchBar } from '../../components/SearchBar';
import { ListCard } from '../../components/ListCard';
import { Card } from '../../components/Card';

function Home() {

    const trainers = [
        { id: 1, name: 'Ash', team: [], rank: '', region: '' },
        { id: 2, name: 'Misty', team: [], rank: '', region: '' },
        { id: 3, name: 'Leo', team: [], rank: '', region: '' },
        { id: 4, name: 'Alain', team: [], rank: '', region: '' },
        { id: 5, name: 'Brock', team: [], rank: '', region: '' },
    ];

    return (
        <>
            <SearchBar />
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