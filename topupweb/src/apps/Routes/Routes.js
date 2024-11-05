import {Routes, Route} from 'react-router-dom'
import { Daftar } from '../../features/Daftar/Daftar'
import { Home } from '../../features/Home/Home'

export const AppRoutes = () =>{
    return(<>
        <Routes>
            <Route path='/Home' element={<Home/>} />
            <Route path='daftar' element={<Daftar/>} />
        </Routes>
    </>)
}