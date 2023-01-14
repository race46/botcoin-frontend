export default ({algo, ticker, remove, get_running, set_running}) => {
    const pr = algo.pair.replace('_','')
    const price = ticker.find(t => t.symbol === pr).price || {price : '1'}
    algo.profit = (algo.coin_profit * price + algo.usd_profit).toFixed(2)
    algo.date = Date.now() / 1000 - parseInt(algo._id.substring(0, 8), 16)
    const minute = parseInt(algo.date / 60)
    const day = minute > 60 * 24 ? parseInt(minute / (60 * 24)) : ''
    algo.date = `${minute > 60 * 24 ? parseInt(minute / (60 * 24)) + 'd ' : ''}${parseInt(minute / 60) % 24}h ${parseInt(minute % 60)}m`
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src="https://media.istockphoto.com/id/953432540/photo/magician-or-illusionist-is-showing-magic-trick-blue-stage-light-in-background.jpg?b=1&s=612x612&w=0&k=20&c=pVJmSv70_Q2qhVvoZKuJYjo5-4gbbcUk-zchoeSfAko="
                        className="rounded-circle"
                        alt=""
                        style={{width: "65px", height: "65px"}}
                    />
                    <div className="ms-3">
                        <p className="fw-bold mb-1">{algo.pair}</p>
                        <p className="text-muted mb-0">${algo.amount} <span
                            style={{color: "white"}}>!</span> %{algo.shrink} shrink</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="fw-normal mb-1"> {algo.rs}</p>
                <p className="text-muted mb-0">${algo.profit} income</p>
            </td>
            <td>
                <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
            </td>
            <td>
                <span className="badge badge-warning rounded-pill d-inline" style={{color: "#393f81"}}>{algo.date}</span>
            </td>
            <td>
                <button disabled={remove} className="btn btn-danger btn-remove" id={algo._id} onClick={e =>
                    fetch(`/illusionist/${e.target.id}`,{method:'delete' }).then(r => {
                        set_running(get_running.filter(run => run._id !== e.target.id))
                    })
                }>Remove
                </button>
            </td>
        </tr>
    )
}