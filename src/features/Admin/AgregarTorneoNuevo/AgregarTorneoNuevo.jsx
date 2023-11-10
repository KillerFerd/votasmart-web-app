import React, { useState } from 'react'
import { toast } from 'react-toastify';
import VotaSmartApi from '../../../apis/VotaSmartApi';

const AgregarTorneoNuevo = () => {

  const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [values, setValues] = useState({
    nombre: '',
    fechaInicio: getFormattedDate(),
    fechaFin: getFormattedDate(),
    fechaInicioFaseEquipos: getFormattedDate(),
    fechaFinFaseEquipos: getFormattedDate(),
    fechaInicioCuartosFinal: getFormattedDate(),
    fechaFinCuartosFinal: getFormattedDate(),
    fechaInicioSemifinales: getFormattedDate(),
    fechaFinSemifinales: getFormattedDate(),
    fechaInicioFinal: getFormattedDate(),
    fechaFinFinal: getFormattedDate(),
  })

  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.id]: event.target.value
    })
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const fieldNames = {
    nombre: 'Nombre',
    fechaInicio: 'Fecha Inicio',
    fechaFin: 'Fecha Fin',
    fechaInicioFaseEquipos: 'Fecha Inicio Fase Equipos',
    fechaFinFaseEquipos: 'Fecha Fin Fase Equipos',
    fechaInicioCuartosFinal: 'Fecha Inicio Cuartos Final',
    fechaFinCuartosFinal: 'Fecha Fin Cuartos Final',
    fechaInicioSemifinales: 'Fecha Inicio Semifinales',
    fechaFinSemifinales: 'Fecha Fin Semifinales',
    fechaInicioFinal: 'Fecha Inicio Final',
    fechaFinFinal: 'Fecha Fin Final'
  };

  const onSubmit = () => {
    const inputErrors = validateInputs();

    if (inputErrors === "success") {
      VotaSmartApi.post('/torneo', values)
        .then((response) => {
          if (response.status === 201) {
            toast.success(response.data.message);
            setValues({
              nombre: '',
              fechaInicio: getFormattedDate(),
              fechaFin: getFormattedDate(),
              fechaInicioFaseEquipos: getFormattedDate(),
              fechaFinFaseEquipos: getFormattedDate(),
              fechaInicioCuartosFinal: getFormattedDate(),
              fechaFinCuartosFinal: getFormattedDate(),
              fechaInicioSemifinales: getFormattedDate(),
              fechaFinSemifinales: getFormattedDate(),
              fechaInicioFinal: getFormattedDate(),
              fechaFinFinal: getFormattedDate()
            });
          } else {
            toast.error('Error al crear el torneo.');
          }
        })
        .catch((error) => {
          if (error.response &&
            error.response.status === 400 ||
            error.response &&
            error.response.status === 409
          ) {
            toast.error(error.response.data.message);
          } else if (error.message === 'Network Error') {
            toast.error('Error en la conexión con la base de datos.');
          } else {
            toast.error('Error al crear el torneo.');
          }
        });
    }
  };

  const validateInputs = () => {
    // Valida campos vacios
    for (const key in values) {
      if (!values[key]) {
        const fieldName = fieldNames[key] || key;
        toast.error(`Campo ${fieldName} está vacío`);
        return 'error';
      }
    }

    // Valida fechas posteriores
    const fechas = [
      {
        campo: 'Fecha Inicio',
        valor: values.fechaInicio,
      },
      {
        campo: 'Fecha Fin',
        valor: values.fechaFin,
      },
      {
        campo: 'Fecha Inicio Fase Equipos',
        valor: values.fechaInicioFaseEquipos,
      },
      {
        campo: 'Fecha Fin Fase Equipos',
        valor: values.fechaFinFaseEquipos,
      },
      {
        campo: 'Fecha Inicio Cuartos Final',
        valor: values.fechaInicioCuartosFinal,
      },
      {
        campo: 'Fecha Fin Cuartos Final',
        valor: values.fechaFinCuartosFinal,
      },
      {
        campo: 'Fecha Inicio Semifinales',
        valor: values.fechaInicioSemifinales,
      },
      {
        campo: 'Fecha Fin Semifinales',
        valor: values.fechaFinSemifinales,
      },
      {
        campo: 'Fecha Inicio la Final',
        valor: values.fechaInicioFinal,
      },
      {
        campo: 'Fecha Fin la Final',
        valor: values.fechaFinFinal,
      },
    ];

    for (let i = 1; i < fechas.length; i++) {
      const fechaAnterior = new Date(fechas[i - 1].valor);
      const fechaActual = new Date(fechas[i].valor);

      if (fechaAnterior > fechaActual) {
        toast.error(`El campo ${fechas[i].campo} no puede ser menor que el campo ${fechas[i - 1].campo}`);
        return 'error';
      }
    }

    return 'success';
  };

  return (
    <div className="w-full px-32 mt-12 flex flex-col justify-center items-center">
      <h1 className='font-title text-lg text-center text-titulo'>Agregar Torneo Nuevo</h1>
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col items-center">
        <form className="flex flex-wrap gap-4 pl-[12rem]">
          <div className="w-full md:w-1/2">
            <label className="text-fondo3">Nombre</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black px-6 py-1 rounded-base"
              type="text"
              id="nombre"
              value={values.nombre}
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-fondo3">Fecha Inicio</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaInicio"
              value={values.fechaInicio}
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/4">
            <label className="text-fondo3">Fecha Fin</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaFin"
              value={values.fechaFin}
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-fondo3">Fecha Inicio Fase Equipos</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaInicioFaseEquipos"
              value={values.fechaInicioFaseEquipos}
              onChange={onChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-fondo3">Fecha Fin Fase Equipos</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaFinFaseEquipos"
              value={values.fechaFinFaseEquipos}
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-fondo3">Fecha Inicio Cuartos Final</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaInicioCuartosFinal"
              value={values.fechaInicioCuartosFinal}
              onChange={onChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-fondo3">Fecha Fin Cuartos Final</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaFinCuartosFinal"
              value={values.fechaFinCuartosFinal}
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-fondo3">Fecha Inicio Semifinal</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaInicioSemifinales"
              value={values.fechaInicioSemifinales}
              onChange={onChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-fondo3">Fecha Fin Semifinal</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaFinSemifinales"
              value={values.fechaFinSemifinales}
              onChange={onChange}
            />
          </div>
          <div className="w-full md:w-1/2">
            <label className="text-fondo3">Fecha Inicio Final</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaInicioFinal"
              value={values.fechaInicioFinal}
              onChange={onChange}
            />
          </div>
          <div className="col-span-2">
            <label className="text-fondo3">Fecha Fin Final</label>
            <input
              className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 rounded-base"
              type="date"
              id="fechaFinFinal"
              value={values.fechaFinFinal}
              onChange={onChange}
            />
          </div>

        </form>
        <div className="flex items-end w-full md:w-1/6">
          <button className="w-full bg-white border-2 text-fondo3 border-black hover:bg-seleccion hover:text-hover transition duration-300 px-6 py-1 my-8 rounded-base"
            onClick={onSubmit}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}

export default AgregarTorneoNuevo