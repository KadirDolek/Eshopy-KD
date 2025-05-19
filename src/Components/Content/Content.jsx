import './Content.css'





export default function Content({propriete, onAddToPanier }) {

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
                    <button 
                        onClick={onAddToPanier}
                        disabled={propriete.stock === 0}
                        className="btn btn-primary"
                    >
                        {propriete.stock > 0 ? 'Ajouter au panier' : 'Rupture de stock'}
                    </button>
                </div>
            </div>
        </>

    )
}