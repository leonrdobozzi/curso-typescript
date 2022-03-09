import React from 'react';

interface ContadorValorProps {
    contador: number
}

export default (props: ContadorValorProps) => {
    return(
        <p>{props.contador}</p>
    )
}