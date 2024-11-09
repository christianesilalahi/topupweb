import { CustomButton } from "../../shared/components/Button/Button"
import { Input } from "../../shared/components/Input/Input"
import { Search } from "../../shared/utils/Variables/Icons"
import { PatternInvoices } from "../../shared/utils/Variables/Variables"
import './CheckTransaction.css'

export const CheckTransaction = () => {
    //pattern invoice dapat di update di utils/Variables/Variables

    return(<>
    
        <div className="col-md-6 check-transaction-container">
            <h1>Cari Pesanan Kamu!</h1>
            <span>Lacak transaksi kamu dengan cara memasukkan Nomor Invoice dibawah ini: </span>
                <div>
                    <Input
                        inputName={"Nomor Invoice"}
                        label={"Nomor Invoice Kamu"}
                        placeholder={PatternInvoices}
                    />
                </div>
            <CustomButton
                title="Cari Transaksi"
                icon={Search}
                onChange={()=>{}}
                />
        </div>
    </>)
}