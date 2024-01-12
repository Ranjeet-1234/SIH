import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Pretrial() {
    let [cases, setCases] = useState();
    useEffect(() => {
        fetch("https://pretrail-backend.onrender.com/case", {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setCases(data.cases);
            })
            .catch((err) => {
                console.log(err)
            })
    })
    return (
        <div className="pretrail-body">
            <div className="navi-advoInf">

                <div className="adv-logo">
                    <p>ADVOCATE ADMIN PANNEL</p>
                </div>

                <div className="adv-body">

                    <div className="court-location">
                        <p>CHEIF JUDICIAL MANAGEMENT SANGLI , </p>
                    </div>

                    <div className="lawyer-name">
                        <p>SHRI.N.A.GUPTA</p>
                    </div>

                </div>

                <div className="buttons-adv">

                    <div className="lawyer-logout">
                        
                        <p className="btnnn">
                           <Link to="/dashboard" style={{color:"white"}}>Back</Link> </p>
                    </div>

                    <div className="pre-trail">
                        <p className="btnnn">
                        <Link to="/"  style={{color:"white"}}>Logout</Link></p>
                    </div>
                </div>

            </div>
            <div className="main-hedding-lawyer">
                <div style={{ fontSize: '20px' }}>
                    <p>CHEIF JUDICIAL MAGISTRATE, SANGLI</p>
                </div>
                <div>
                    <p>IN THE COURT OF . SHRI.N.A.GUPTA</p>
                </div>
                <div style={{ fontSize: '16px' }}>
                    <p>IX. Judicial Magistrate F.C Abad</p>
                </div>
                <div style={{ fontSize: 'large', fontWeight: 'bold' }}>
                    <p>Particulars of Offence</p>
                </div>
            </div>
            <div className="case-tables">
                <table>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>Cases</th>
                            <th>Date Registration</th>
                            <th>Age</th>
                            <th>Expected Lifespan</th>
                            <th>Wining Probability</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            cases && cases.length >0?(

                                cases.map((caseItem, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{caseItem.cases}</td>
                                            <td>{caseItem.case_regestration}</td>
                                            <td>{caseItem.age}</td>
                                            <td>{caseItem.expected_lifespan}</td>
                                            <td>{caseItem.winning_probability}</td>
                                            <td className="PreTrail">
                                                <Link to={'/details/'+caseItem._id}>
                                                    <button className="Pretrail-btn">PreTrail</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })
                            ):null
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}