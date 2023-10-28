import { useDispatch, useSelector } from 'react-redux'
import { btMovieActions } from '../store/ReactMovie/slice'
import cn from 'classnames'

const Result = () => {
    const {chairsBooking, chairsJustBooked} = useSelector(state => state.btMovie)
    const dispatch = useDispatch()
    
    return (
        <div className=''>
            <h2 className='text-white text-center fw-bolder fs-5'>DANH SÁCH GHẾ BẠN CHỌN</h2>
            <div className='d-flex gap-3 mt-5'>
                <div className="chair disableBooking"></div>
                <span className='text-white'>Ghế đã đặt</span>
            </div>
            <div className='d-flex gap-3 mt-3'>
                <div className="chair active"></div>
                <span className='text-white'>Ghế đang đặt</span>
            </div>
            <div className='d-flex gap-3 mt-3'>
                <div className="chair"></div>
                <span className='text-white'>Ghế chưa đặt</span>
            </div>
            <table className='table table-dark table-hover table-bordered mt-5 text-start'>
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Huỷ</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map danh sách ghế */}
                    {chairsBooking.map((chair) => {
                        return (
                            <tr key={chair.soGhe}>
                                <td className='text-warning fw-semibold'>{chair.soGhe}</td>
                                <td className='text-warning fw-semibold'>{chair.gia}</td>
                                <td className='text-danger fw-bold'>X</td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td className='fs-5 fw-bolder'>Tổng</td>
                        <td rowSpan={2} className='fs-5 text-warning fw-bolder'>
                            {chairsBooking.reduce((total, chair) => {
                                return (total += chair.gia)
                            },0)}
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div className="d-flex gap-2">
                <button className="btn btn-success" onClick={() => {
                    dispatch(btMovieActions.checkOut(""))
                }}>Thanh Toán</button>
                <button className={cn('btn btn-danger', {
                    disabled: !chairsJustBooked.length
                })} onClick={() => {
                    dispatch(btMovieActions.cancelBookedChairs(""))
                }}>Huỷ đặt vé</button>
            </div>
            
        </div>
    )
}

export default Result
