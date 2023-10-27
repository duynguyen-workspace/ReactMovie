import Chair from './Chair'

const ChairList = ({data}) => {
    const columns = data.filter((value) => value.hang == "")
    const rows = data.filter((value) => value.hang != "")

    return (
        <div>
            {columns.map((column) => {
                return (
                    <div key={column.hang} className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                        <h5 className='chairRow fw-bold'>{column.hang}</h5>
                        {column.danhSachGhe.map((columnNumber) => {
                            return (
                                <div key={columnNumber.soGhe} className='chairRow text-center fs-4 fw-bold'>{columnNumber.soGhe}</div>
                            )
                        })}
                    </div>
                )
            })}
            {rows.map((chairData) => {
                return (
                    <div key={chairData.hang} className='d-flex gap-3 justify-content-center align-items-center mt-3'>
                        <h5 className='chairRow fw-bold'>{chairData.hang}</h5>

                        {chairData.danhSachGhe.map((chairItem) => {
                            return (<Chair key={chairItem.soGhe} data={chairItem} />)
                        })}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default ChairList
