import React from 'react'
import Tabla_partidos from '../../../components/tabla_partidos'
import Tabla_posiciones from '../../../components/tabla_posiciones'
import Tabla_future_games from '../../../components/tabla_future_games'
import Cancha from '../../../assets/cancha.jpeg'
import Contact_form from '../../../components/contact_form'

const Index = () => {
  return (
    <>
      <Tabla_partidos></Tabla_partidos>
      <Tabla_posiciones></Tabla_posiciones>
      <Tabla_future_games></Tabla_future_games>
      <div className='container-sm p-2 flex flex-col'>
      <h1 className='ml-10 mt-16 font-subtitle text-lg text-left text-titulo'>¿Quienes Somos?</h1>
        <article className='flex flex-row justify-center space-x-32 items-center'>
            <img src={Cancha} alt="cancha" className='w-1/2 h-auto rounded-base' />
            <p className='p-10 w-1/3 text-justify'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin neque 
              congue leo suscipit euismod. Integer faucibus, tellus non cursus gravida, nibh 
              purus laoreet leo, at condimentum ipsum dui at mauris. Proin risus dolor, 
              dictum eget justo a, scelerisque tristique dolor. Integer a nulla a eros 
              egestas aliquam. Pellentesque varius est nec erat scelerisque, et ultricies 
              sapien fermentum. Nulla sit amet lacus leo. Aenean tempus dignissim nibh sed 
              fringilla. Donec vel arcu et risus vehicula placerat id a tellus. Etiam feugiat 
              interdum ex in pellentesque. 
              Nunc metus ligula, blandit nec euismod a, ultricies ac velit.

              <br />
              <br /> 

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed 
              sollicitudin neque congue leo suscipit euismod. Integer faucibus, 
              tellus non cursus gravida, nibh purus laoreet leo, at condimentum 
              ipsum dui at mauris. Proin risus dolor, dictum eget justo a, scelerisque 
              tristique dolor. Integer a nulla a eros egestas aliquam. Pellentesque varius 
              est nec erat scelerisque, et ultricies sapien fermentum. Nulla sit amet lacus 
              leo. Aenean tempus dignissim nibh sed fringilla. Donec vel arcu et risus 
              vehicula placerat id a tellus. Etiam feugiat interdum ex in pellentesque. 
              Nunc metus ligula, blandit nec euismod a, ultricies ac velit.
            </p>
        </article>
        <Contact_form></Contact_form>
      </div>
    </>
  )
}

export default Index