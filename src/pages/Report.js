import { useEffect, useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import urls from '../urls.json'
export default function Report() {

    let navigate=  useNavigate();
    let Params = useParams()
    let [winProp, setWinProp] = useState();
    let [lifespan, setLifeSpan] = useState();
    useEffect(() => {
        fetch(`${urls.BASE_URL}case/${Params.id}`, {
            method: "GET"
        })
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                if (data.success === true) {
                    setWinProp(data.doc.winning_probability);
                    setLifeSpan(data.doc.expected_lifespan);
                }
                else {
                    console.log("unable to fetch data");
                }
            })
            .catch((err) => {
                console.log(err)
            })
    })

    let reqmail={
        to:"Bright Electronic",
        subject:"Pre-Trail Report",
        text:`Shravan Jare

        Solapur, Maharashtra
        
        Date: [12-12-2023]
        
        Subject: Comprehensive Case Analysis and Projections for [Case Name/Number]
        
        Dear Bright Electronics,
        
        We have conducted a meticulous evaluation of the intricate facets surrounding the case at hand and present to you an insightful analysis alongside comprehensive projections:
        
        Case Overview:
        
        Delve into an in-depth portrayal of the case, highlighting key aspects, intricacies, and the significance of the dispute between the involved parties.
        Win Probability Assessment:
        
        Our seasoned legal team has meticulously scrutinized the available evidence, analyzed legal precedents, and assessed the strengths and weaknesses of both sides. This comprehensive evaluation leads us to provisionally project the win probability for each party. However, it's important to acknowledge that this is an initial assessment, subject to evolution throughout the proceedings.
        
        Estimated Lifespan:
        
        We anticipate a calculated duration for the case, ${lifespan} factoring in elements such as the complexity of legal issues, potential procedural intricacies, court backlog, and the possibility of appeals. This estimated lifespan provides a trajectory from initiation to the potential resolution of the matter.
        
        Strategic Insights and Recommendations:
        
        Our seasoned legal team offers comprehensive strategies tailored to navigate the complexities of this case. Highlighting potential negotiation points, strengths, and weaknesses, we aim to provide a roadmap for maximizing your legal position. Additionally, we propose potential settlement options or alternative dispute resolution methods, should they align with the case's objectives.
        
        Wining Case Probability:
        
        In the interest of transparent collaboration, we propose a structured timeline for periodic updates and progress reports ${winProp}. This ensures a continuous flow of information and facilitates informed decision-making throughout the case. We emphasize that the information outlined in this report reflects our current assessment, rooted in the available information and our expertise. However, the dynamic nature of legal proceedings warrants agility and adaptability.
        
        We remain steadfast in our commitment to offering steadfast legal representation and are readily available to address any queries or concerns regarding this report or the case.
        
        Thank you for entrusting us with this pivotal matter. We are dedicated to navigating these legal waters with the utmost diligence and expertise.
        
        Sincerely,
        Shravan Jare
        LAW AND JUSTICE
        Ministry of Law`,
    }
    function sendMail() {
        navigate('/pretrail');
        fetch('http://localhost:8000/admin/sendmail',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(reqmail)
        })
        .then((res)=>res.json())
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }
    return (
        <div className="report_body">
            <div
                style={{ fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center", padding: "12px", fontWeight: "bold", backgroundColor: "rgb(139, 123, 255)" }}>
                Final Report
                of the
                PreTrail
            </div>
            <form action="" style={{ marginTop: "30px", marginBottom: "50px", width: "100%" }}>
                <div className="reoprt">
                    <div style={{ fontWeight: "bold" }}>Shravan Jare</div>

                    <div style={{ fontWeight: "bold" }}>Solapur , Maharashtra</div>

                    <div style={{ fontWeight: "bold" }}>Date: {new Date().toDateString()}</div>

                    <div style={{ fontWeight: "bold" }}>Subject: Comprehensive Case Analysis and Projections for [Case Name/Number]</div>

                    <div style={{ fontWeight: "bold" }}>Dear Bright Electronics,</div>

                    <div>We have conducted a meticulous evaluation of the intricate facets surrounding the case at hand and present to
                        you an insightful analysis alongside comprehensive projections:</div>

                    <div style={{ fontWeight: "bold" }}>Case Overview:</div>

                    <div>Delve into an in-depth portrayal of the case, highlighting key aspects, intricacies, and the significance of
                        the dispute between the involved parties.
                        Win Probability Assessment:</div>

                    <div>Our seasoned legal team has meticulously scrutinized the available evidence, analyzed legal precedents, and
                        assessed the strengths and weaknesses of both sides. This comprehensive evaluation leads us to provisionally
                        project the win probability for each party. However, it's important to acknowledge that this is an initial
                        assessment, subject to evolution throughout the proceedings.</div>

                    <div style={{ fontWeight: "bold" }}>Estimated Lifespan:</div>

                    <div>We anticipate a calculated duration for the case, <b>{lifespan}</b> factoring in elements such as the
                        complexity of legal
                        issues, potential procedural intricacies, court backlog, and the possibility of appeals. This estimated lifespan
                        provides a trajectory from initiation to the potential resolution of the matter.</div>

                    <div style={{ fontWeight: "bold" }}>Strategic Insights and Recommendations:</div>

                    <div>Our seasoned legal team offers comprehensive strategies tailored to navigate the complexities of this case.
                        Highlighting potential negotiation points, strengths, and weaknesses, we aim to provide a roadmap for maximizing
                        your legal position. Additionally, we propose potential settlement options or alternative dispute resolution
                        methods, should they align with the case's objectives.</div>

                    <div style={{ fontWeight: "bold" }}>Wining Case Probablity:</div>

                    <div>In the interest of transparent collaboration, we propose a structured timeline for periodic updates and
                        progress reports <b>{winProp}</b>. This ensures a continuous flow of information and facilitates informed
                        decision-making
                        throughout the case.
                        We emphasize that the information outlined in this report reflects our current assessment, rooted in the
                        available information and our expertise. However, the dynamic nature of legal proceedings warrants agility and
                        adaptability.</div>

                    <div>We remain steadfast in our commitment to offering steadfast legal representation and are readily available to
                        address any queries or concerns regarding this report or the case.</div>

                    <div>Thank you for entrusting us with this pivotal matter. We are dedicated to navigating these legal waters with
                        the utmost diligence and expertise.</div>

                    <div style={{ fontWeight: "bold" }}>Sincerely,</div>

                    <div style={{ fontWeight: "bold" }}>Shravan Jare</div>
                    <div style={{ fontWeight: "bold" }}>LAW AND JUSTICE</div>
                    <div style={{ fontWeight: "bold" }}>Ministry of Law</div>


                    <div className="res-btn-div">
                        <p className="resopnce-btn" /*</div>onClick={sendMail}*/>Send Response</p>
                    </div>
                </div>
            </form>
        </div>
    )
}