import products from '../../data/products.json';



function TshirtElement() {
    return (
        <ul className='list'>
            {products.map(shirt => (
                <li
                    key={shirt.id}
                    className='list-elem'>{shirt.name}</li>
            ))}
        </ul>
    );
}

export default TshirtElement;