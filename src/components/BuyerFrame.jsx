import Delete from "../img/delete.png";

const BuyerFrame = ({ ID, GrossMonthlyIncome, DownPayment, AppraisedValue, removeBuyer }) => {
    return (<tr>
        <td>{ID}</td>
        <td>${GrossMonthlyIncome}</td>
        <td>${DownPayment}</td>
        <td>${AppraisedValue}</td>
        <td>
            <button onClick={removeBuyer} className="text-black h-4">
                <img src={Delete} height={"20px"} width={"20px"} alt={"delete"} />
            </button>
        </td>
    </tr>);
}

export default BuyerFrame;