import './index.css';

function ListCard(props) {

    const { children } = props;

    return (
        <>
            <div className="container-list">
                {children}
            </div>
        </>
    )
}

export { ListCard };