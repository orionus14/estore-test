function ElementDescription({ imageURL, alt, name, price}) {
    return (
        <>
            <div className="elem-img">
                <img src={imageURL} alt={alt} />
            </div>
            <div className="elem-name">{name}</div>
            <div className="elem-price">{price}</div>
        </>
    )
}

export default ElementDescription;