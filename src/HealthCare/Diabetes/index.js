import React,{useState} from 'react'
import Header from '../../Header'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
const Diabetes = () => {

    const [Pregnancies, setPregnancies] = useState('')
    const [Present_Price, setPresent_Price] =useState('')
    const [BloodPressure, setBloodPressure] =useState('')
    const [BMI,setBMI] =useState('')
    const [DiabetesPedigreeFunction, setDiabetesPedigreeFunction] =useState('')
    const [age, setAge] =useState('')
    const [result,setresult] =useState('')
     const history = useHistory()
     const Check =()=>
     {
         
         var formdata = new FormData()
         formdata.append("Pregnancies", parseInt(Pregnancies))
         formdata.append("Present_Price", parseInt(Present_Price))
         formdata.append("BloodPressure", parseInt(BloodPressure))
         formdata.append("BMI",parseInt(BMI))
         formdata.append("DiabetesPedigreeFunction", parseInt(DiabetesPedigreeFunction))
         formdata.append("Age", parseInt(age))

         console.log(formdata)
         axios.post('https://app-diabete.herokuapp.com/predict', formdata).then((res)=>{

              setresult(res)
               history.push({pathname:'/results',state:res.data})
            }).catch(err=>{console.log(err)})
     }

    return (
        <div>
        <Header/>
            <div id="intro" class="container-fluid view ">
                <h1 class="text-center text-capitalize pt-5">Know your chances of getting diabetes in one Click!</h1>
                <hr class="w-75 mx-auto pt-5" />
                <div class="row mb-5">
                    <div class="col-lg-6 col-md-6 col-12 my-auto">
                        <img src="./static/img/diabetes.jpg" class="float-left" style={{ display: 'block', maxWidth: '100%', height: 'auto' }} />

                    </div>
                    <div class="col-lg-6 col-md-6 col-12">
                        {/* <form > */}
                            <div class="form-group">
                                <label for="Pregnancies">No. of Pregnencies</label>
                                <input class="form-control" onChange={(e)=>setPregnancies(e.target.value)} type="number" id="Pregnancies" name="Pregnancies" required="required" placeholder="No. of Pregnencies" />
                            </div>
                            <div class="form-group">
                                <label for="Glucose">Glucose Level</label>
                                <input class="form-control" onChange={(e) => setPresent_Price(e.target.value)} type="number" step="any" id="Glucose" name="Present_Price" required="required" placeholder="Glucose Level" />
                            </div>
                            <div class="form-group">
                                <label for="BloodPressure">Current Blood Pressure</label>
                                <input class="form-control" onChange={(e) => setBloodPressure(e.target.value)} type="number" id="BloodPressure" name="BloodPressure" required="required" placeholder="Current Blood Pressure" />
                            </div>
                            <div class="form-group">
                                <label for="BMI">Enter the Body Mass Index</label>
                                <input class="form-control" onChange={(e) => setBMI(e.target.value)} type="number" id="BMI" name="BMI" required="required" placeholder="Body Mass Index" />
                            </div>
                            <div class="form-group">
                                <label for="DiabetesPedigreeFunction">Diabetes Pedigree Function</label>
                                <input class="form-control" onChange={(e) => setDiabetesPedigreeFunction(e.target.value)} type="number" id="DiabetesPedigreeFunction" name="DiabetesPedigreeFunction" required="required" placeholder="Diabetes Pedigree Function" />
                            </div>
                            <div class="form-group">
                                <label for="Age">Age</label>
                                <input class="form-control" onChange={(e) => setAge(e.target.value)} type="number" id="Age" name="Age" required="required" placeholder="Age" />
                            </div>
                            <button  onClick={Check} class="btn btn-danger">Predict</button>
                        {/* </form> */}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Diabetes
