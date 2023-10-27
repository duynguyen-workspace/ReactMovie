import data from '../data.json'
import Result from './Result'
import ChairList from './ChairList'
import "../index.css"

const BTMovie = () => {
    //* console.log("data: ", data)
    return (
        <div className='overlay'>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-9 pe-5">
                        <h1 className='firstChar text-center fw-bold'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                        <h3 className='p-3 text-white text-center bg-warning fw-bold'>SCREEN</h3>
                        <ChairList data={data}/>
                    </div>
                    <div className="col-3 mt-5">
                        <Result />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BTMovie

