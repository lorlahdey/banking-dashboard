import { transactionTable } from "../helpers/data"

const Table = () => {
    return (
        <table className="table table-borderless mb-0">
            <tbody>
                {
                    transactionTable.map((item, index) => {
                        return(
                            <tr key={index}>
                                <td>
                                    <img src={item.imagesrc} alt="table" />
                                </td>
                                <td>{item.description}</td>
                                <td>{item.date}</td>
                                <td>{item.cardNumber}</td>
                                <td>{item.amount}</td>
                                <td><span className={item.status_className}>{item.status}</span></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table