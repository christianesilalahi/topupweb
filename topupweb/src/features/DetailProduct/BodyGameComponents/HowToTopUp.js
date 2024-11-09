import { Card, Col } from 'react-bootstrap'
import { Dropdown } from '../../../shared/components/Dropdown/Dropdown'
import { HowToTopUpSteps } from '../../../shared/utils/Variables/Variables'
import './../DetailProduct.css'

export const HowToTopUp = ({game="nama game", currency="currency game"}) => {
    
    // Set Up Steps in ./src/shared/utils/Variables/Variables.js

    // Set view for item of list of steps
    const listSteps = (steps) => {

        return steps.map((step, index)=>{
            return(<>
                <li>
                    {step}
                </li>
            </>)
        })
    }

    // Set up view for inside the dropdown
    const insideSteps = () => {
        return(
            <>
                {HowToTopUpSteps.subtitle}
                <p/>
                <ol>
                    {listSteps(HowToTopUpSteps.items)}
                </ol>
            </>
        )
    }

    // Set the view for the How to Top Up
    return (<>
        <div className="text-box">

            <Dropdown 
                title={HowToTopUpSteps.title} 
                component={insideSteps()}
                isOpenValue={true}
            />
        </div>
    </>)
}