import { Button } from "@material-ui/core";
import React, {useEffect, useRef} from "react";
 
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
 
import './index.scss'

const Image = ({file}:any) => {
  const img = useRef(null)

    useEffect(() => {
      const reader = new FileReader()
      reader.readAsDataURL(file.file)
      reader.addEventListener('load', function(){
        //@ts-ignore
        img && img.current.setAttribute('src', this.result)
      })
      
    }, [file])

    return (
      <div className="image-section">
      <TransformWrapper
        defaultScale={1}
        defaultPositionX={200}
        defaultPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }:any) => (
          <React.Fragment>

          <div className="image-section__content">
            <TransformComponent>
              <img src={file.file} alt="test" ref={img} className="image-section__content__img"/>
            </TransformComponent>
          </div>
            <div className="image-section__tools">
              <Button onClick={zoomIn} className="image-section__tools__btn">+</Button>
              <Button onClick={zoomOut} className="image-section__tools__btn">-</Button>
              <Button onClick={resetTransform} className="image-section__tools__btn">x</Button>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
      </div>
    );
}

export default Image

