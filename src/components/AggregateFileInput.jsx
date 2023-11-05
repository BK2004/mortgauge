import { useState } from "react";
import Papa from "papaparse";

const AggregateFileInput = ({ setData, setLoading }) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(["", ""]);

    const handleEvaluate = () => {
        if (!file) {
            setError(["file", "Please provide a file to read."]);
            return;
        }
        setLoading(true);

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (res) => {
                setData(res.data);
                setLoading(false);
                console.log(res.data);
            }, error: (e) => {
                setLoading(false);
                setError(["file", "File invalid"]);
            }
        });
    }

    return (<>
        <label htmlFor="file-dropzone" className="flex flex-col justify-center items-center w-full bg-gray-100 rounded-xl border-2 py-3 border-gray-200 transition-all duration-100 ease-in-out hover:cursor-pointer hover:bg-gray-200 hover:border-gray-300">
            {!file ? <>
                <svg className="w-8 h-8 mb-3 text-sky-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                </svg>
                <p className="text-md font-semibold text-gray-600"><span className="text-sky-800 font-bold">Click to upload</span></p>
            </>
            : 
            <>
                <svg className="text-sky-800 aspect-square w-[18px] h-[18px] mb-2" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M16.145,2.571c-0.272-0.273-0.718-0.273-0.99,0L6.92,10.804l-4.241-4.27
                        c-0.272-0.274-0.715-0.274-0.989,0L0.204,8.019c-0.272,0.271-0.272,0.717,0,0.99l6.217,6.258c0.272,0.271,0.715,0.271,0.99,0
                        L17.63,5.047c0.276-0.273,0.276-0.72,0-0.994L16.145,2.571z"/>
                </svg>
                <p className="text-md">Uploaded <span className="font-semibold text-sky-800">{file.name}</span></p>
            </>}
            <p className="text-gray-600">Accepts CSV files</p>
            <input type="file" id="file-dropzone" className="hidden" accept=".csv" onChange={(e) => {
                setFile(e.target.files[0]);
                if (!e.target.files[0]) setData([]);
                if (error[0] === "file") {
                    setError(["", ""]);
                }
            }} />
        </label>
        {error[0] === "file" ? <p className="text-red-600">{error[1]}</p> : ""}
        <button onClick={handleEvaluate} className="bg-sky-800 text-white rounded-lg px-6 py-2 mt-3 text-left cursor-pointer hover:ring-1 ring-blue-800 transition-all duration-100 ease-in-out" type="submit">Evaluate</button>
    </>);
}

export default AggregateFileInput;