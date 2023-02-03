# React Carousel App

This is a react carousel app designed in react. it display information inform of a slide that will automatically switch depending on the time delay passed

## Usage

1. add the carousel component in ypur src folder and import it the required file.
```
import Carousel from "../Carousel"
```

- For non images eg number use the prop children and pass the array of information followed by the delay

#### Example

```
<Carousel childern={[1,2,3,4,5]} delay={1000}>
```

- For images use both props children and images and pass the images array followed by the delay

#### Example

```images =["image1","image2","image3","image4"]
<Carousel children={images} images={images} delay={1000}>
```

## [live Demo](https://csb-1gl8mm.netlify.app/)
