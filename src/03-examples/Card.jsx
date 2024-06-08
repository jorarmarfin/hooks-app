
const Card = ({ title, images,sprites }) => {
    console.log(sprites);
    return (
        <div className="card" >
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <img src={images}  alt="..."/>

            </div>
        </div>
    );
}

export {Card};
