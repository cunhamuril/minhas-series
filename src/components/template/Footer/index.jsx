import React from 'react'

import './styles.css'

const Footer = () => {
    return (
        <footer className="bg-dark">
            <div className="text-white container py-1 d-flex flex-row justify-content-center">
                <p className="pt-1">
                    Desenvolvido com <i className="fas fa-heart text-danger" /> e
                    muita <i className="fas fa-cannabis text-success" /> por&nbsp;
                    <a href="https://github.com/cunhamuril"
                        target="_blank"
                        rel="noopener noreferrer">
                        Murilo Cunha
                    </a>
                    &nbsp;no workshop&nbsp;
                    <a href="https://www.devpleno.com/handsonreact/"
                        target="_blank"
                        rel="noopener noreferrer">
                        Hands-on ReactJS
                    </a>
                </p>
            </div>
        </footer>
    )
}

export default Footer