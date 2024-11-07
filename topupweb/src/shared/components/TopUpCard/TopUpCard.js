import './TopUpCard.css'

export const  TopUpCard = ({firstBox = "1" , secondBox = "", component}) => {
    return(<>
        <div className='top-up-card'>
            <div className='top-up-top'>
                <div className=' top-up-1'>
                    <text>{firstBox}</text>
                </div>
                <div className='top-up-2'>
                    <text>{secondBox}</text>
                </div>
            </div>
            <div className=' top-up-3'>
                {component}
            </div>
        </div>
    </>)
}