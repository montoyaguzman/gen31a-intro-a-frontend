import './index.css';

import { SearchBar } from '../../components/SearchBar';
import { ListCard } from '../../components/ListCard';
import { Card } from '../../components/Card';

function Home() {
    return (
        <>
            <SearchBar />
            <ListCard>
                <Card name="Ash" />
                <Card name="Misty" />
                <Card name="Misty" />
                <Card name="Misty" />
            </ListCard>
        </>
    )
}

export { Home };