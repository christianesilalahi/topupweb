import {Routes, Route} from 'react-router-dom'
import { CheckTransaction } from '../../features/CheckTransaction/CheckTransaction'
import { DetailProduct } from '../../features/DetailProduct/DetailProduct'
import { Home } from '../../features/Home/Home'

export const AppRoutes = () =>{
    return(<>
        <Routes>
            <Route path='/home' element={<Home/>} />
            {/* <Route path='/test' element={<DetailProduct/>} /> */}
            <Route path='/test' element={<Home/>} />

            {/* /get product by id */}
            <Route path="/product/:id" element={<DetailProduct />} /> {/* Dynamic route */}

        </Routes>
    </>)
}