import React,{useState} from 'react'
import Header from '../../Header'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Cancer = () => {

    const [concave_points_mean, setconcave_points_mean] = useState('')
    const [area_mean, setarea_mean] = useState('')
    const [radius_mean, setradius_mean] = useState('')
    const [perimeter_mean, setperimeter_mean] = useState('')
    const [concavity_mean, setconcavity_mean] = useState('')
    const [result, setresult] = useState('')
    const history = useHistory()
    const Check = () => {

        var formdata = new FormData()
        formdata.append("concave_points_mean", parseInt(concave_points_mean))
        formdata.append("area_mean", parseInt(area_mean))
        formdata.append("radius_mean", parseInt(radius_mean))
        formdata.append("perimeter_mean", parseInt(perimeter_mean))
        formdata.append("concavity_mean", parseInt(concavity_mean))
        console.log(formdata)
        axios.post('https://app-cancer.herokuapp.com/predict', formdata).then((res) => {
            setresult(res)
            setresult(res)
            history.push({ pathname: '/results', state: res.data })
        }).catch(err => { console.log(err) })
    }
    return (
        <div>
            <Header />
            <div id="intro" class="container-fluid view " style={{height:'100%'}}>
                <h1 class="text-center text-capitalize pt-5">Know your chances of getting Breast Cancer in one Click!</h1>
                <hr class="w-75 mx-auto pt-5" />
                <div class="row mb-5">
                    <div class="col-lg-6 col-md-6 col-12 my-auto">
                        <img src="./static/img/breast.jpg" class="float-left" style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />
                        {/* <h3>{{ prediction_text }}</h3> */}
                    </div>
                    <div class="col-lg-6 col-md-6 col-12" style={{height:'100%'}}>
                            <div class="form-group">
                                <br /><br /><br />
                                <label for="concave points_mean">Mean of the Concave Points</label>
                            <input class="form-control" onChange={(e) => setconcave_points_mean(e.target.value)}  type="number" id="concave_points_mean" name="concave_points_mean" required="required" placeholder="Mean of the Concave Points" />
                            </div>
                            <div class="form-group">
                                <label for="area_mean">Mean of the Area</label>
                            <input class="form-control" type="number" onChange={(e) => setarea_mean(e.target.value)}  step="any" id="area_mean" name="area_mean" required="required" placeholder="Mean of the Area" />
                            </div>
                            <div class="form-group">
                                <label for="radius_mean">Mean of the Radius</label>
                            <input class="form-control" type="number" id="radius_mean" onChange={(e) => setradius_mean(e.target.value)}  name="radius_mean" required="required" placeholder="Mean of the radius" />
                            </div>
                            <div class="form-group">
                                <label for="perimeter_mean">Mean of the Perimeters</label>
                            <input class="form-control" type="number" id="perimeter_mean" onChange={(e) => setperimeter_mean(e.target.value)}  name="perimeter_mean" required="required" placeholder="Mean of the Parameter" />
                            </div>
                            <div class="form-group">
                                <label for="concavity_mean">Mean of the Concavity</label>
                            <input class="form-control" type="number" id="concavity_mean" onChange={(e) => setconcavity_mean(e.target.value)}  name="concavity_mean" required="required" placeholder="Mean of the concavity" />
                            </div>
                            <button onClick={Check} class="btn btn-danger">Predict</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cancer
