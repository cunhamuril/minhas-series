import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

const EditarGenero = ({ match }) => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        axios.get(`/api/genres/${match.params.id}`)
            .then(res => {
                setName(res.data.name)
            })
    }, [match.params.id])

    const onChange = e => {
        setName(e.target.value)
    }

    const save = () => {
        axios.put(`/api/genres/${match.params.id}`, {
            name
        }).then(res => {
            setSuccess(true)
        })
    }

    if (success) {
        return <Redirect to='/generos' />
    }

    return (
        <div>
            <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container">
                    <h1 className="display-4">Editar Gênero</h1>
                </div>
            </div>
            <div className="container col-lg-6">
                <form>
                    <div className="form-group text-white">
                        <label htmlFor="name">Nome</label>
                        <input
                            type="text"
                            value={name}
                            onChange={onChange}
                            className="form-control"
                            id="name"
                            placeholder="Nome do gênero" />
                        <button
                            type="button"
                            onClick={save}
                            className="btn btn-danger my-2">
                            Salvar
                        </button>
                        <Link to='/generos' className="btn btn-secondary ml-1">Cancelar</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditarGenero