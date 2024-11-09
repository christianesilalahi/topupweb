import {Routes, Route} from 'react-router-dom'
import { DetailProduct } from '../../features/DetailProduct/DetailProduct'
import { Home } from '../../features/Home/Home'

export const AppRoutes = () =>{
    return(<>
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/test' element={<DetailProduct/>} />
        </Routes>
    </>)
}