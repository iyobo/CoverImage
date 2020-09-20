# CoverImage

A simple component to quickly display divs with image backgrounds for uniformity.

Layman speak: This component will always crop images to fit a given dimension.
Written in TypeScript, so easy to see expected props.

## To install
`npm i coverimage` or `yarn add coverimage`

## How to Use

```$typescript
import CoverImage from 'coverimage';
const myComponent = ()=>{
    const someImagePath = '...'
    return <CoverImage imageUrl={someImagePath} />
}
```

## Props

All props preceded by `?` are optional.

You can use most commonly used props for image display.
You can override styles generally as well by passing in a `styles` object.

```
imageUrl: string;
width?: string | number;
minWidth?: string | number;
height?: string | number;
minHeight?: string | number;
backgroundColor?: string;
style?: any;
className?: string;
```
