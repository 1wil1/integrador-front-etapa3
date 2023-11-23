import { useState } from 'react'
import { post } from '../utils/http'
import './DragDrop.scss'

const DragDrop = ({ setFoto, setSrcImagen, srcImagen }) => {
  const [styleOverDropArea, setStyleOverDropArea] = useState('')
  // !  Cancelando comportamiento por defecto del navegador

  const arrayEventos = ['dragenter', 'dragleave', 'dragover', 'drop']

  arrayEventos.forEach(eventName => {
    document.body.addEventListener(eventName, e => e.preventDefault())
  })
  const handleEnter = () => {
    console.log('Una imagen ingreso a la zona de drop')
  }

  const handleOver = () => {
    setStyleOverDropArea ("drop-area__over")
    console.log(styleOverDropArea);
  }

  const handleDrop = e => {
    //console.log(e)
    const dataTransf = e.dataTransfer
    const files = dataTransf.files
    handleFiles(files)
  }

  const handleChange = e => {
    //console.log(e)
    //console.log(e.target.files)
    const files = e.target.files 
    handleFiles(files)
  }

  const handleFiles = async files => {
    // console.log('llegaron las imagens', files)
    try {
        const file = files[0]
        await uploadFile(file)
        previewFile(file)
    } catch (error) {
        console.error('[handleFiles]:', error)
    }
  }

  const previewFile = file => {
    const reader = new FileReader()
    reader.readAsDataURL(file)

    reader.addEventListener('loadend', () => {
        setSrcImagen(reader.result)
    })

  }
  const handleDragLeave = ()=> {
    
    setStyleOverDropArea ("")
    console.log("..setStyleOverDropArea..", styleOverDropArea);
  }
  const uploadFile = async file => {
    const formData = new FormData()

    try {
        formData.append('foto', file)
        const imagenUp = await post('https://bc62130-wilsonquesada-integrador-back.onrender.com/api/upload', formData)
        setFoto(imagenUp)
    } catch (error) {
        console.error('[uploadFile]:', error)
    }
  }

  return (
    <div className={"drop-area " +styleOverDropArea} onDrop={handleDrop} onDragOver={handleOver} onDragLeave={handleDragLeave} onMouseLeave={handleDragLeave}>
        <p>Subir imagen al servidor <b>file dialog</b> o con <b>drag and drop</b> dentro del area punteada</p>
        <input type="file" id="lbl-foto" accept='image/*' onChange={handleChange}/>
        <label htmlFor="lbl-foto" className='drop-area-button'>
            File Dialog
        </label>

        <div className="drop-area-image">
            <img src={srcImagen} alt="" />
        </div>

    </div>
  )
}

export default DragDrop