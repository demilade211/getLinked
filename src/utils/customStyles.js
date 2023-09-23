export const selectStyle = {
    control: (base) => ({
        ...base,
        height: "47px",
        borderRadius: "4px",
        border: "1px solid #FFF",
        background: "rgba(255, 255, 255, 0.03)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        '&:hover': {
            border: "1px solid #D0D3D8",
        },
        outline: "none",
        fontFamily: "Montserrat",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        color: "#FFF",
    }),
    indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
    placeholder: (base) => ({
        ...base,
        color: "rgba(255, 255, 255, 0.5)",
        whiteSpace: "nowrap"
    }),
    input: (base) => ({
        ...base,
        color: "#fff",
    }),
    singleValue: (base) => ({
        ...base,
        color: "#fff",
    }),
};