import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Series = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/api/series')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const deleteSerie = id => {
        axios.delete(`/api/series/${id}`)
            .then(res => {
                const filtrado = data.filter(item => item.id !== id)
                setData(filtrado)
            })
    }

    const renderizaLinha = record => {
        return (
            <tr key={record.id}>
                <th scope="row">{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <Link
                        to={`/series/${record.id}`}
                        className="btn btn-outline-warning mx-2"
                        title="Informações">
                        <i className="fas fa-info-circle" />
                    </Link>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteSerie(record.id)}
                        title="Excluir">
                        <i className="fas fa-trash-alt" />
                    </button>
                </td>
            </tr>
        )
    }

    const Jumbotron = () => (
        <div className="jumbotron jumbotron-fluid" id="jumbotron">
            <div className="container">
                <h1 className="display-4">Séries</h1>
            </div>
        </div>
    )

    if (data.length === 0) {
        return (
            <div>
                <Jumbotron />
                <div className="container">
                    <Link to='/series/novo' className="btn btn-danger my-3">Nova série</Link>
                    <div className="alert alert-warning" role="alert">
                        Você não possui séries criadas!
                </div>
                </div>
            </div>

        )
    }

    return (
        <div>
            <Jumbotron />
            <div className="container" id="container-table">
                <Link to='/series/novo' className="btn btn-danger my-3">Nova série</Link>
                <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(renderizaLinha)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Series