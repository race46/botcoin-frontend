import Navbar from "./Navbar";
import {useEffect, useState} from "react";
import Row_coin from "./components/row_coin";
import Running_illusionist from "./components/running_illusionist";
import {useNavigate} from "react-router-dom";


export default () => {
    const navigate = useNavigate()
    const [get_user, set_user] = useState({})
    const [get_account, set_account] = useState({balances: []})
    const [get_ticker, set_ticker] = useState({})
    const [get_running, set_running] = useState([])
    const [get_remove, set_remove] = useState(true)
    useEffect(() => {
        if(!document.cookie) navigate('/login')
        fetch('/me').then(r => r.json()).then(r => set_user(r))
        fetch('/account').then(r => r.json()).then(r => set_account(r))
        fetch('https://api.binance.com/api/v3/ticker/price').then(r => r.json()).then(r => {
            set_ticker(r);
            fetch('/running-algorithms').then(r => r.json()).then(r => set_running(r))
        })
    }, [])
    return (
        <div className="container-xl">
            <Navbar remove={set_remove}></Navbar>
            <div className="row gutters">
                <div className="col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="account-settings">
                                <div className="user-profile">
                                    <div className="user-avatar">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                             alt="Maxwell Admin"/>
                                    </div>
                                    <h4 className="user-name">{get_user.username}</h4>
                                    <h5 className="user-email">{get_user.name}</h5>
                                </div>
                                <div className="about">
                                    <h5 id="balance" style={{color: "#393f81"}}>Balance ${get_account.total}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <table className="table align-middle mb-0 bg-white">
                    <tbody>
                    {get_account.balances ? get_account.balances.map(coin => {
                        return <Row_coin coin={coin} key={coin.asset}></Row_coin>
                    }) : {}}
                    </tbody>
                </table>
                <hr/>
            </div>

            <div className="col-12" style={{backgroundColor: "white"}}>
                <div className="d-flex justify-content-center">
                    <div className="about mt-3 mb-3">
                        <h5 style={{color: "#393f81"}}>Running Algorithms</h5>
                    </div>
                </div>
            </div>


            <div className="col-12">
                <table className="table align-middle mb-0 bg-white">
                    <tbody id="algo-table">
                    {get_running.map(algo => {
                        return <Running_illusionist algo={algo} key={algo._id} ticker={get_ticker} remove={get_remove} get_running={get_running} set_running={set_running}></Running_illusionist>
                    })}
                    </tbody>
                </table>
                <hr/>
            </div>
        </div>
    )
}