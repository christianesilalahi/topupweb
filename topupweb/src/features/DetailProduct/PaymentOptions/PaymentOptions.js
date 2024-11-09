import { Dropdown } from "../../../shared/components/Dropdown/Dropdown"
import { DropdownInactive } from "../../../shared/components/DropdownInactive/DropdownInactive"

export const PaymentOptions = () => {
    return(<>
        <div className="payment-container">

            <DropdownInactive 
                title="E-wallet" 
                component={""} 
            />
            <DropdownInactive 
                title="Virtual Account" 
                component={""} 
            />
            <DropdownInactive 
                title="Convenience Store" 
                component={""} 
            />

        </div>
    </>)
}