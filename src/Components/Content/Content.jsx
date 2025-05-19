import './Content.css'




export default function Content({propriete}) {

    

    return(
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={propriete.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{propriete.title}</h5>
                    <p className="card-text">
                    {propriete.description}
                    </p>
                    <p>{propriete.prix}€</p>
                    <p>Stock:{propriete.stock}</p> <hr />
                    <a href="#" className="btn btn-primary">
                        Acheter
                    </a> 
                </div>
            </div>
        </>

    )
}