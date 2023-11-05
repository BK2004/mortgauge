import { useState } from "react";
import AggregateFileInput from "./AggregateFileInput";
import AggregateResults from "./AggregateResults";

const AggregateForm = () => {
    const [tab, setTab] = useState("file");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    return (<div className="w-full h-full flex justify-center items-center">
        <div className="w-1/2 h-[400px] flex-col justify-start">
            <div className="button-bar flex gap-[2px] w-1/2 shadow-md">
                <button 
                    className={`flex-1 text-left px-2 font-semibold text-blue-800 bg-white rounded-t-lg py-1 ${tab === "file" ? "" : " bg-opacity-60"}`}
                    onClick={e => {if (tab !== "file") {setTab("file"); setData([])}}}
                >
                    Input file
                </button>
                <button 
                    className={`flex-1 text-left px-2 font-semibold text-blue-800 bg-white rounded-t-lg py-1 ${tab === "file" ? " bg-opacity-60" : ""}`}
                    onClick={e => {if (tab !== "manual") {setTab("manual"); setData([])}}}
                >
                    Input manually
                </button>
            </div>
            <div className="input-container w-full bg-white z-10 rounded-b-lg rounded-tr-lg shadow-md px-2 py-3">
                {tab === "file" ? <AggregateFileInput setData={setData} setLoading={setLoading} /> : <div>help</div>}
            </div>
            <div className="output-container w-full">
                {loading ? "loading" : data.length !== 0 ? <div className="w-full bg-white px-3 py-2 mt-3 rounded-lg shadow-md">
                    <AggregateResults data />
                </div> : ""}
            </div>
        </div>
    </div>);
}

export default AggregateForm;