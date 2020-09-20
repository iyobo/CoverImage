import React from 'react';

interface IProp {
    imageUrl: string;
    width?: string | number;
    minWidth?: string | number;
    height?: string | number;
    minHeight?: string | number;
    backgroundColor?: string;
    style?: any;
    className?: string;
}


export default function (props: IProp) {

    const style = {
        backgroundImage: `url("${props.imageUrl}")`,
        backgroundSize: 'cover',
        width: props.width || 100,
        minWidth: props.minWidth || 0,
        height: props.height || 80,
        minHeight: props.minHeight || 0,
        backgroundColor: props.backgroundColor || '#7d8c92',
        marginRight: '10px',
        cursor: 'pointer',
    };

    return <div className={props.className} style={{...style, ...props.style}}/>;

}

