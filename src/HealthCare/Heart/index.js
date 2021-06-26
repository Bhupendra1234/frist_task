import React,{useState} from 'react'
import Header from '../../Header'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Heart = () => {


    const [cp, setcp] = useState(1)
    const [chol, setchol] = useState('')
    const [restecg, setrestecg] = useState('')
    const [thalach, setthalach] = useState('')
    const [fbs, setfbs] = useState(0)
    const [age, setAge] = useState('')
    const [oldpeak, setoldpeak] = useState(1)
    const [slope, setslope] = useState(2)
    const [ca, setca] = useState(3)
    const [sex, setsex] = useState(0)
    const [thal, setthal] = useState(4)
    const [exang, setexang] = useState(0)
    const [trestbps, settrestbps] = useState('')
    const [result,setresult] =useState('')
    const history = useHistory()
    const Check = () => {

        var formdata = new FormData()
        formdata.append("chol", parseInt(chol))
        formdata.append("trestbps", parseInt(trestbps))
        formdata.append("restecg", parseInt(restecg))
        formdata.append("sex", parseInt(sex))
        formdata.append("exang", parseInt(exang))
        formdata.append("Age", parseInt(age))
        formdata.append("ca", parseInt(ca))
        formdata.append("thal", parseInt(thal))
        formdata.append("oldpeak", parseInt(oldpeak))
        formdata.append("slope", parseInt(slope))
        formdata.append("fbs", parseInt(fbs))
        formdata.append("thalach", parseInt(thalach))
        formdata.append("cp", parseInt(cp))
        

        console.log(formdata)
        axios.post('https://app-hearts.herokuapp.com/predict', formdata).then((res) => {
            setresult(res)
            history.push({ pathname: '/results', state: res.data })
        }).catch(err => { console.log(err) })
    }
    return (
        <div>

            <Header/>
            <div id="intro" class="container-fluid view " style={{height:'100%'}}>
                <h1 class="text-center text-capitalize pt-5">Know your chances of getting a heart disease in one Click!</h1>
                <hr class="w-75 mx-auto pt-5" />
                <div class="row mb-5">
                    <div class="col-lg-6 col-md-6 col-12 my-auto">
                        <img src="./static/img/heart.jpg" class="float-left"  style={{display:'block',maxWidth:'100%',height:'auto'}} />
                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                       
                            <div class="form-group">
                                <label for="cp">Chest Pain Type</label>
                                <select class="form-control" id="cp" name="cp" onChange={(e) => setcp(e.target.value)} required="required" placeholder="Chest Pain Type">
                                    <option value="1">Typical Angina</option>
                                    <option value="2">Atypical Angina</option>
                                    <option value="3">Non-Anginal Pain</option>
                                    <option value="4">Asymptomatic</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="trestbps">Resting Blood Pressure (in mm Hg)</label>
                                <input class="form-control" type="number" id="trestbps" name="trestbps" onChange={(e) => settrestbps(e.target.value)} required="required" placeholder="Resting Blood Pressure" />
                            </div>

                            <div class="form-group">
                                <label for="chol">Serum Cholestoral in mg/dl</label>
                                <input class="form-control" type="number" step="any" id="chol" onChange={(e) => setchol(e.target.value)} name="chol" required="required" placeholder="Serum Cholestoral" />
                            </div>

                            <div class="form-group">
                                <label for="fbs">Fasting Blood Sugar</label>
                                <select class="form-control" id="fbs" name="fbs" required="required" onChange={(e) => setfbs(e.target.value)} placeholder="Fasting Blood Sugar">
                                    <option value="0">Fasting Blood Sugar less than 120 mg/dl</option>
                                    <option value="1">Fasting Blood Sugar greater than 120 mg/dl</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="restecg">Resting Electro-cardiographic Result</label>
                                <select class="form-control" type="number" id="restecg" name="restecg" required="required" onChange={(e) => setrestecg(e.target.value)} placeholder="Resting Electro-cardiographic Result">
                                    <option value="0">Normal</option>
                                    <option value="1">having ST-T wave abnormality</option>
                                    <option value="2">showing probable or definite left ventricular hypertrophy</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label for="thalach">Maximum Heart Rate Achieved</label>
                            <input class="form-control" id="thalach" placeholder="Max heart rate" name="thalach" required="required" onChange={(e) => setthalach(e.target.value)} />
                            </div>

                            <div class="form-group">
                                <label for="thalach">Age</label>
                            <input class="form-control" id="age" name="age" required="required" placeholder="Enter Age" onChange={(e) => setAge(e.target.value)} />
                            </div>

                            {/* <div class="form-group">
                                <label for="thalach">oldpeak</label>
                                <input class="form-control" id="oldpeak" name="oldpeak" required="required" onChange={(e) => setoldpeak(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="thalach">slope</label>
                                <input class="form-control" id="slope" name="slope" required="required" onChange={(e) => setslope(e.target.value)} />
                            </div> */}
                            <div class="form-group">
                                <label for="cp">Gender</label>
                                <select class="form-control" id="sex" name="sex" onChange={(e) => setsex(e.target.value)} required="required" placeholder="select gender">
                                    <option value="0">Male</option>
                                    <option value="1">Female</option>
                                </select>
                            </div>
                            {/* <div class="form-group">
                                <label for="thalach">ca</label>
                                <input class="form-control" id="ca" name="ca" required="required" onChange={(e) => setca(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <label for="thalach">thal</label>
                                <input class="form-control" id="thal" name="thal" required="required" onChange={(e) => setthal(e.target.value)} />
                            </div> */}

                            <div class="form-group">
                                <label for="exang">Exercise Induced Angina</label>
                                <select class="form-control" id="exang" name="exang" required="required" onChange={(e) => setexang(e.target.value)} >
                                    <option value="1">Yes</option>
                                    <option value="0">No</option>
                                </select>
                            </div>
                            <button onClick={Check} class="btn btn-danger">Predict</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Heart
