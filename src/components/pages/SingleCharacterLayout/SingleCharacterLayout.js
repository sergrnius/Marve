import './singleCharacterLayout.scss';

let SingleCharacterLayout = ({data}) => {

    let {name, description, thumb} = data

    return (
        <div className="single-comic">
            <img src={thumb} alt={name} className="single-comic__char-img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{name}</h2>
                <p className="single-comic__descr">{description}</p>
            </div>
        </div>
    )
}

export default SingleCharacterLayout;