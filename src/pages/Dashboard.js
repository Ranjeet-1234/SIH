import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
    const chartRef = useRef(null);
    let navigate = useNavigate();

    useEffect(() => {
        // Get the canvas element
        const canvas = chartRef.current;

        // Create the chart
        const myChart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: ["ArbitrationAct", "CivilAppeal", "CentralExcise", "CompanyPetition", "CriminalAppeal", "CivilSuit", "DivorcePetition", "IncomeTax"],
                datasets: [{
                    backgroundColor: ["red", "green", "blue", "orange", "brown", "gray", "yellow", "maroon"],
                    data: [55, 49, 44, 24, 35, 45, 50, 25]
                }]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: "Today Case Registered"
                }
            }
        });

        // Cleanup the chart on component unmount
        return () => myChart.destroy();
    }, []);

    return (
        <div className='dashboard-body'>

            <div className="navi-advoInf-dash">

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
                        <p className="btnnn">Home</p>
                    </div>
                    <div className="pre-trail">
                        <p className="btnnn">Profile</p>
                    </div>

                    <div className="pre-trail">
                        <p className="btnnn">Logout</p>
                    </div>
                </div>
            </div>
            <div className="shivamOne">
                <div className="main-section">
                    <div className="table-top">
                        <h3>Dashboard as on 15-12-2023</h3>
                    </div>
                    <div className="table-data">
                        <table>
                            <thead>
                                <tr>
                                    <th>CaseType</th>
                                    <th>Todays Cases</th>
                                    <th>Undated Cases</th>
                                    <th>My Disposal in this Month</th>
                                    <th>My Pending Cases</th>
                                    <th>Dormant/SineDie Cases</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>civ</td>
                                    <td>35</td>
                                    <td>0</td>
                                    <td>8</td>
                                    <td>19</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>commertial</td>
                                    <td>35</td>
                                    <td>0</td>
                                    <td>8</td>
                                    <td>19</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>commertial</td>
                                    <td>35</td>
                                    <td>0</td>
                                    <td>8</td>
                                    <td>19</td>
                                    <td>90</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="table-bottom">
                    <div className="top-ten">
                        <div>
                            <p>Top</p>
                        </div>
                        <div className="para-ten">
                            <p>20</p>
                        </div>
                        <p> Pending Cases</p>
                        <p className="btnnn" style={{ width: '100px', textAlign: 'center', padding: '7px' }} onClick={()=>{
                            navigate('/pretrail')
                        }}>View</p>
                    </div>
                </div>
                <div className="main-section-two">
                    <table>
                        <thead>
                            <tr>
                                <th>ADR Corner</th>
                                <th>Mediation</th>
                                <th>Lok Adalat</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Total Case Refered</td>
                                <td>35</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Assigned Cases to Panel</td>
                                <td>35</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Total Cases Settied</td>
                                <td>35</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="pieChart">
                <div className="barChart">
                    <canvas id="myChart" ref={chartRef} style={{ width: '800px', padding: '10px' }}></canvas>
                </div>
            </div>
        </div>
    )
}