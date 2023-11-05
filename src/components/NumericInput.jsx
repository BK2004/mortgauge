function NumericInput({ id, register, label, unit, range, placeholder, required }) {
    return (
        <div className="block text-gray-800">
            <label htmlFor={id} className="block mb-2">
                {label}
            </label>
            <div className="block relative p-2 bg-gray-200 rounded">
                <span className={`inline-block pointer-events-none ${unit === "$" ? "mr-2 text-gray-500" : ""}`}>
                    {unit === "$" ? "$" : ""}
                </span>
                <input
                    id={id}
                    type="text"
                    placeholder={placeholder ?? (unit === "$" ? "0.00" : undefined)}
                    className={`absolute left-0 top-0 w-full p-2 bg-transparent rounded placeholder:text-gray-500 ${unit === "$" ? "pl-8" : ""}`}
                    {...register(id, { required })}
                />
            </div>
        </div>
    )
}

export default NumericInput;
