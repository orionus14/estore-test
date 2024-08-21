import products from '../../data/products.json';
import ElementDescription from './ElementDescription';

function TshirtElements() {
    return (
        <ul className='list'>
            {products.map(shirt => (
                <li
                key={shirt.id}
                className='list-elem'>
                    <ElementDescription
                        imageURL={shirt.image}
                        alt={shirt.name}
                        name={shirt.name}
                        price={shirt.price}
                    ></ElementDescription>
                </li>
            ))}
        </ul>
    );
}

export default TshirtElements;