import React, {useEffect, useState} from "react";
import "./Style.css"

const Carousel = (props) => {

    const {children} = props

    const [currentId, setCurrentId] = useState(0)
    const [length, setLength] = useState(children.length)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentId(currentId === children.length-1 ? 0 : currentId + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [currentId, children.length]);

    useEffect(() => {
        setLength(children.length)
    }, [children]);

    const next = () => {
        if (currentId < ( length - 1 )) {
            setCurrentId(prevState => prevState +1)
        }
    }

    const prev = () => {
        if (currentId > 0) {
            setCurrentId(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel_container">

            <div className="carousel_wrapper">

                <div className="carousel_arrow">
                    {
                        currentId > 0 &&
                        <button onClick={prev} className="left_arrow">
                            &lt;
                        </button>
                    }

                    {
                        currentId < (length -1) &&
                        <button onClick={next} className="right_arrow">
                            &gt;
                        </button>
                    }

                </div>

                <div className="carousel_content_wrapper">
                    <div
                        className="carousel_content"
                        style={{ transform: `translateX( -${currentId * 100}vw)` }}
                    >
                        {children}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Carousel;
