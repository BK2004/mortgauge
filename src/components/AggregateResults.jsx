import { Doughnut } from "react-chartjs-2";
import { isApproved } from "../scripts/approval";
import { useMemo } from "react";

const AggregateResults = ({ data }) => {
    const approvalData = useMemo(() => {
        const res = data.map((entry) => ({
            "approved": true,
        }));
    });

    return (<>

    </>);
}

export default AggregateResults;