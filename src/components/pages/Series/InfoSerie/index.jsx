import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Badge } from 'reactstrap'

import './styles.css'

const InfoSerie = ({ match }) => {
    const [form, setForm] = useState({
        name: ''
    })
    const [success, setSuccess] = useState(false)
    const [mode, setMode] = useState('INFO')
    const [genres, setGenres] = useState([])
    const [genreId, setGenreId] = useState('')

    const [data, setData] = useState({})
    useEffect(() => {
        axios
            .get(`/api/series/${match.params.id}`)
            .then(res => {
                setData(res.data)
                setForm(res.data)
            })
    }, [match.params.id])

    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setGenres(res.data.data)
                const genres = res.data.data
                const encontrado = genres.find(value => data.genre === value.name)
                if (encontrado) {
                    setGenreId(encontrado.id)
                }
            })
    }, [data])

    // custom Header
    const masterHeader = {
        height: '60vh',
        minHeight: '600px',
        backgroundImage: `url('${data.background}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    const onChangeGenre = e => {
        setGenreId(e.target.value)
    }

    const onChange = field => e => {
        setForm({
            ...form,
            [field]: e.target.value
        })
    }

    const seleciona = value => () => {
        setForm({
            ...form,
            status: value
        })
    }

    const save = () => {
        axios.put(`/api/series/${match.params.id}`, {
            ...form,
            genre_id: genreId
        })
            .then(res => {
                setSuccess(true)
            })
    }
    
    if (success) {
        window.location.reload()
    }
    
    return (
        <div>
            <header style={masterHeader}>
                <div className='h-100' id="header">
                    <div className="h-100 container">
                        <div className="row h-100 align-items-center">
                            <div className="col-md-3">
                                <img
                                    className="img-fluid img-thumbnail"
                                    id="poster"
                                    src={data.poster}
                                    alt={data.name} />
                            </div>
                            <div className="col-md-8">
                                <h1 className="font-weight-light text-white display-4">
                                    {data.name}
                                </h1>
                                <div className="lead text-white py-1">
                                    Gênero: {data.genre} <br/>
                                    {data.status === "ASSISTIDO" && <Badge color='success'>Assistido</Badge>}
                                    {data.status === "PARA_ASSISTIR" && <Badge color='warning'>Para assistir</Badge>}                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container my-4">
                <Link to="/series" className="btn btn-secondary mx-1">Voltar</Link>
                <button
                    className="btn btn-success"
                    onClick={() => setMode('EDIT')}>
                    Editar
                </button>
            </div>
            {
                mode === 'EDIT' &&
                < div className="container col-lg-6 text-white">
                    <h1 className="display-4">Editar série</h1>                  
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Nome</label>
                            <input
                                type="text"
                                value={form.name}
                                onChange={onChange('name')}
                                className="form-control"
                                id="name"
                                placeholder="Nome da série" />
                        </div>                        
                        <div className="form-group">
                            <label htmlFor="name">Gênero</label>
                            <select className="form-control" 
                                onChange={onChangeGenre} 
                                value={genreId}>
                                <option>Selecione</option>
                                {genres.map(genre => (
                                    <option
                                        key={genre.id}
                                        value={genre.id}>
                                        {genre.name}
                                    </option>)
                                )}
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="form-check">
                                <input type="radio" className="form-check-input"
                                    name="status" id="assistido" value="ASSISTIDO"
                                    onChange={seleciona('ASSISTIDO')} 
                                    checked={form.status === 'ASSISTIDO'} />
                                <label htmlFor="assitido" className="form-check-radio">
                                    Assistido
                                </label>
                            </div>
                            <div className="form-check">
                                <input type="radio" className="form-check-input"
                                    name="status" id="para-assistir" value="PARA_ASSISTIR"
                                    onChange={seleciona('PARA_ASSISTIR')}
                                    checked={form.status === 'PARA_ASSISTIR'} />
                                <label htmlFor="para-assistir" className="form-check-radio">
                                    Para assistir
                                </label>
                            </div>
                        </div>

                        <button
                            type="button"
                            onClick={save}
                            className="btn btn-danger my-2">
                            Salvar
                            </button>
                        <button
                            type="button"
                            onClick={() => setMode('INFO')}
                            className="btn btn-secondary ml-1">
                            Cancelar
                            </button>
                    </form>                    
                </div>
            }
        </div >
    )
}

export default InfoSerie