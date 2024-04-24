import './index.css';

function ListCard(props) {

    const { children } = props;

    return (
        <>
            <h1>ListCard component works!</h1>
            {children}
        </>
    )
}

export { ListCard };