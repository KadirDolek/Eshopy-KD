import './Panier.css';


export default function Panier({ panier, monPorteMonnaie, onDelete }) {
    return (
        <div id='last'>
            <h3 style={{display:'flex', justifyContent:'center', textAlign:'center'}} id='textPanier'>
                Porte-monnaie actuel : {monPorteMonnaie}€
            </h3>
            <div style={{display:'flex', justifyContent:'center'}} id='textPanier'>Mon Panier</div>
            <div style={{display:'flex', justifyContent:'center', textAlign:'center'}} id='contentPanier'>
                {panier && panier.map((item) => (
                    <div key={item.id} className="card" style={{ width: "16rem" }}>
                        <img src={item.image} className="card-img-top" alt={item.title} />
                        <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p>{item.prix} €</p>
                            <p>Quantité: {item.quantity}</p>
                            <button onClick={() => onDelete(item.id)} id='delete'>Supprimer?</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
