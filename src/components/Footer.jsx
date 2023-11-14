import { Link } from "react-router-dom";

export default function Footer() {
    return (
            <footer className="bg-dark-subtle">
                <div className="container">
                    <div className="row py-5">
                        <div className="col-md-3">
                            <h4>FOCAS ESPIÃS</h4>
                            <p>Conhecereis a verdade e a verdade vos libertará</p>
                        </div>
                        <div className="col-md-3">
                            <h4>Características</h4>
                            <Link to="/caracteristicas" className="nav-link">Assasinas brutais. Bem avantajadas. Perigosas. Espiãs. Pirotécnicas.</Link>
                            <ul className="list-group">
                            
                            </ul>
                        </div>
                        <div className="col-md-3">Focas são espiãs do governo</div>
                        <Link to="/focas" className="nav-link"></Link>
                        <div className="col-md-3">Ursos polares são heróis</div>
                        <Link to="/ursos" className="nav-link"></Link>
                    </div>
                </div>
            </footer>
        )
    }