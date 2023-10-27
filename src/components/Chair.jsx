import { useDispatch, useSelector } from 'react-redux'
import { btMovieActions } from '../store/ReactMovie/slice'
import cn from 'classnames'

const Chair = ({data}) => {
    const {chairsBooking, chairsBooked} = useSelector(state => state.btMovie)
    const dispatch = useDispatch()
    //* console.log("chairBooking:", chairBooking)

    return (
        <div className={cn('chair', {
            active: chairsBooking.find((e) => e.soGhe == data.soGhe),
            disableBooking: chairsBooked.find((e) => e.soGhe == data.soGhe)
        })} onClick={() => {
            dispatch(btMovieActions.setChairBooking(data))
        }}>
            {data.soGhe}
        </div>
    )
}

export default Chair
