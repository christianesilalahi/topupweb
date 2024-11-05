import { ProductList } from "../../shared/components/ProductList/ProductList";
import logo from "../../logo.svg"

export const Home = () =>{
    const products = [
        {
            id: 1,
            name: 'Product 1',
            description: 'Description of Product 1',
            image: logo,
        },
        {
            id: 2,
            name: 'Product 2',
            description: 'Description of Product 2',
            image: logo,
        },
        {
            id: 3,
            name: 'Product 2',
            description: 'Description of Product 2',
            image: logo,
        },
        {
            id: 4,
            name: 'Product 2',
            description: 'Description of Product 2',
            image: logo,
        },
        // Add more products as needed
      ];

    return(<>
        <div>
            <h2 className="mb-4">Product Dashboard</h2>
            <ProductList products={products}/>
        </div>
    </>)
}