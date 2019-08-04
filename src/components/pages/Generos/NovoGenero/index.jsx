import React, { useState } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)

    const onChange = e => {
        setName(e.target.value)
    }

    const save = () => {
        axios.post('/api/genres', {
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
                    <h1 className="display-4">Novo Gênero</h1>
                </div>
            </div>
            <div className="container col-lg-6 text-white">
                <form>
                    <div className="form-group">
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

export default NovoGenero