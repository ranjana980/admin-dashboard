import React from "react";

export default function InputComponent({
    inputType,
    type,
    label,
    placeholder,
    inputStyle,
    disabled,
    options
}) {
    return (
        <>
            <label>{label}</label>
            {inputType === "input" && (
                <div>
                    <input type={type} placeholder={placeholder} className={inputStyle} disabled={disabled} />
                </div>
            )}
            {inputType === "select" && (
                <div>
                    <select type={type} placeholder={placeholder} className={inputStyle}>
                        {options.map((item) => (
                            <option value={item.value}>{item.label}</option>
                        ))}
                    </select>
                </div>
            )}
        </>
    );
}
