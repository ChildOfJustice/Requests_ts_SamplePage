import React from "react";

interface Props {
    text: string
    someFunction: () => void
    canBeNull?: any
}

export const TextField: React.FC<Props> = (props: Props) => {
    return (
        <div>
            <input readOnly={true} value={props.text}/>
        </div>
    )
}