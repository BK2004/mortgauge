import React from "react";
function SubmitButton({ label }) {
    return (
        <input
            type="submit"
            value={label}
            className="block w-1/2 mt-10 mx-auto p-2 bg-sky-800 text-white rounded cursor-pointer"
        />
    )
}

export default SubmitButton;
