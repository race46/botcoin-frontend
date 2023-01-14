export default ({coin}) => {
    return (
        <tr>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src={coin.image}
                        className="rounded-circle"
                        alt=""
                        style={{width: "65px", height: "65px"}}
                    />
                    <div className="ms-3">
                        <p className="fw-bold mb-1">{coin.asset}</p>
                        <p className="text-muted mb-0">${coin.total}</p>
                    </div>
                </div>
            </td>
            <td>
                <p className="fw-normal mb-1">{coin.free} free</p>
                <p className="text-muted mb-0">{coin.locked} locked</p>
            </td>
            <td>
                <span className="badge badge-warning rounded-pill d-inline">Awaiting</span>
            </td>
        </tr>
    )
}