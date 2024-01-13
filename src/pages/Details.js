import { Link, useParams } from 'react-router-dom'
import satyama from '../image/satyama-removebg-preview.png'
import { useEffect, useRef} from 'react';
// import date from 'date';

export default function Details() {
    // let [details, setdetails] = useState({});
    let petitioner_name = useRef(null);
    let advocate_name = useRef(null);
    let extraPetitioner = useRef(null);
    let bar_region = useRef(null);
    let email = useRef(null);
    let mobile = useRef(null);
    let state = useRef(null);
    let dist = useRef(null);
    let pet_Pincode = useRef(null);
    let village = useRef(null);
    let Taluka = useRef(null);
    let UID_no = useRef(null);
    let police_sta = useRef(null);
    let police_sta_code = useRef(null);
    let Params = useParams();
    useEffect(() => {
        fetch(`${urls.BASE_URL}petitioner/${Params.id}`)
            .then((res) => res.json())
            .then((response) => {
                console.log(response)
                // setdetails(response);
                petitioner_name.current.value=response.pet_name;
                extraPetitioner.current.value=response.ext_pet;
                advocate_name.current.value= response.adv_name;
                bar_region.current.value= response.bar_reg;
                email.current.value= response.email;
                mobile.current.value= response.mob_no;
                state.current.value= response.state;
                dist.current.value= response.dist;
                pet_Pincode.current.value= response.pincode;
                village.current.value= response.village;
                Taluka.current.value= response.Taluka;
                UID_no.current.value= response.UID_no;
                police_sta.current.value= response.police_sta;
                police_sta_code.current.value= response.police_sta_code;
                // console.log(pet_Pincode.current.value)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    return (
        <div className='pretrail_details_body'>
            <div className="report-full-main">
                <div className="report-headder">
                    <div className="report-img-logo">
                        <img src={satyama} className="img-report" alt="" />
                    </div>
                    <div className="big-court-name-report" style={{ alignSelf:"center" }}>
                        <p style={{ fontSize: '25px' }}> INDIAN PRE-TRAIL COURT SYSTEM</p>
                    </div>
                    <div className="back-button-report" style={{alignSelf:"center"}}>
                        <p style={{ fontSize: "18px" }} className="opttn-back">Back</p>
                    </div>
                </div>
                <div className='report-response'>
                    <div className='text-area'>
                        Reason For PreTrail :   
                         <textarea type='text' placeholder='Write Your Reason Here'></textarea>
                    </div>
                    <div className='text-area'>
                        Date of PreTrail : {new Date().toDateString()}
                    </div>
                </div>
                <div className="select-option-pre-def">
                    <div><button className="pre-dec">Petitioner</button></div>
                    <div><button className="pre-dec">Respondent</button></div>
                    <div><button className="pre-dec">Extra-Information</button></div>
                    <div><button className="pre-dec">Act-Section</button></div>
                    <div><button className="pre-dec">Police-Station</button></div>
                    <div><button className="pre-dec">Case-Details</button></div>
                </div>
                <div className="changing-div-pre">
                    <div className="preOne">
                        <div className="main-section">
                            <div className="table-data">
                                <table className='details_table'>
                                    <tbody>
                                    
                                        <tr>
                                            <td>
                                                <div>Complainant : <input ref={petitioner_name} className='inp' type='text' style={{width:"120px"}} /></div>
                                            </td>
                                            <td>
                                                <div>Extra Petitioner Court : <input ref={extraPetitioner} className='inp' type='text' style={{width:"10px"}}/> </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>Name of the Advocate : <input ref={advocate_name} className='inp' type='text' style={{width:"90px"}}/> </div>
                                            </td>
                                            <td>
                                                <div>Bar Regin : <input ref={bar_region} className='inp' type='text' style={{width:"40px"}}/></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>Email : <input ref={email} className='inp' type='text' style={{width:"195px"}} /></div>
                                            </td>
                                            <td>
                                                <div>Mobile No : <input ref={mobile} className='inp' type='text' style={{width:"85px"}}  /></div>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td>
                                                <div>State : <input ref={state} className='inp' type='text' style={{width:"85px"}} /></div>
                                            </td>
                                            <td>
                                                <div>Pincode : <input ref={pet_Pincode} className='inp' type='text' style={{width:"50px"}} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>District : <input ref={dist} className='inp' type='text' style={{width:"40px"}} /></div>
                                            </td>
                                            <td>
                                                <div>Village : <input ref={village} className='inp' type='text' style={{width:"80px"}} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>Taluka : <input ref={Taluka} className='inp' type='text' style={{width:"40px"}} /></div>
                                            </td>
                                            <td>
                                                <div>UID No : <input ref={UID_no} className='inp' type='text' style={{width:"60px"}} /></div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div>Police Station : <input ref={police_sta} className='inp' type='text' style={{width:"135px"}} /></div>
                                            </td>
                                            <td>
                                                <div>Police Station Code : <input ref={police_sta_code} className='inp' type='text' style={{width:"45px"}} /></div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="submit-respo-btn">
                    <Link to={'/report/' + Params.id}>
                        <p className="sub-res">Send Responce</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}