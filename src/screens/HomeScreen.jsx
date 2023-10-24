export default function HomeScreen() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">Livre</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">

                                        </h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>Acesso à liberdade</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">
                                            Cadastre-se "de gratis"
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">Você toma a pílula azul... a história acaba, você acorda na sua cama e acredita no que quiser.</div>
                            <div className="col-md-4">Se você tomar a pílula vermelha, ficará no País das Maravilhas e eu lhe mostrarei a profundidade da toca do coelho.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}