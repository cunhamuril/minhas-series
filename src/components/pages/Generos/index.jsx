import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import './styles.css'

const Generos = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/api/genres')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const deleteGenero = id => {
        axios.delete(`/api/genres/${id}`)
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
                        to={`/generos/${record.id}`}
                        className="btn btn-outline-warning mx-2"
                        title="Editar">
                        <i className="fas fa-pencil-alt" />
                    </Link>
                    <button
                        className="btn btn-outline-danger"
                        onClick={() => deleteGenero(record.id)}
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
                <h1 className="display-4">Gêneros</h1>
            </div>
        </div>
    )

    if (data.length === 0) {
        return (
            <div>
                <Jumbotron />
                <div className="container">
                    <Link to='/generos/novo' className="btn btn-danger my-3">Novo gênero</Link>
                    <div className="alert alert-warning" role="alert">
                        Você não possui gêneros criados!
                </div>
                </div>
            </div>

        )
    }

    return (
        <div>
            <Jumbotron />
            <div className="container" id="container-table">
                <Link to='/generos/novo' className="btn btn-danger my-3">Novo gênero</Link>
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

export default Generos