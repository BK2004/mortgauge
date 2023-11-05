import { useFormContext } from "react-hook-form";

function NumericInput({ id, label, unit, placeholder, range, required }) {
    const {
        register,
        formState: { errors },
    } = useFormContext();

    const unitDollars = unit === "$";
    const min = range?.min ?? 0;
    const max = range?.max;
    const step = range?.step ?? (unitDollars ? 0.01 : undefined);
    const error = errors?.[id];

    return (
        <div className="block text-gray-800">
            <label htmlFor={id} className="block mb-2">
                {label}
            </label>
            <div className={`block relative p-2 bg-gray-200 rounded ${error ? "outline outline-2 outline-red-500" : ""}`}>
                <span className={`inline-block pointer-events-none ${unitDollars ? "mr-2 text-gray-500" : ""}`}>
                    {unitDollars ? "$" : ""}
                </span>
                <input
                    id={id}
                    type="number"
                    placeholder={placeholder ?? (unitDollars ? "0.00" : undefined)}
                    min={min}
                    max={max}
                    step={step}
                    className={`absolute left-0 top-0 w-full p-2 bg-transparent rounded placeholder:text-gray-500 ${unitDollars ? "pl-8" : ""} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                    {...register(id, {
                        required,
                        min,
                        max,
                    })}
                />
            </div>
        </div>
    )
}

export default NumericInput;
