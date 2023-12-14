import React, { useState, useEffect, FC } from 'react';
import { TransitionMotion as Motion, spring } from 'react-motion';
import './Cube.styles.scss'

type Face = {
  translate: {
    x: number;
    y: number;
    z: number;
  };
  rotate: {
    x: number;
    y: number;
    z: number;
    deg: number;
  };
};
  
type Faces = {
    [key: string]: Face;
};

type CubeProps = {
    index: string,
    size: number,
    children: React.ReactNode[]
}

const emptyFace = <div className={`empty`}>empty</div>;

const Cube: FC<CubeProps> = ({ index = 'front', size = 200, children }) => {
  const faceSize = size / 2;  

  const [isMoved, setIsMoved] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [mouseXY, setMouseXY] = useState([0, 0]);
  const [mouseDelta, setMouseDelta] = useState([0, 0]);
  const [cube, setCube] = useState({
    width: size,
    height: size,
    translate: { x: 0, y: 0, z: -faceSize },
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0
  });
  const [faces, setFaces] = useState<Faces>({
    front: { translate: { x: 0, y: 0, z: faceSize }, rotate: { x: 0, y: 1, z: 0, deg: 0 } },
    right: { translate: { x: faceSize, y: 0, z: 0 }, rotate: { x: 0, y: 1, z: 0, deg: 90 } },
    back: { translate: { x: 0, y: 0, z: -faceSize }, rotate: { x: 0, y: 1, z: 0, deg: 180 } },
    left: { translate: { x: -faceSize, y: 0, z: 0 }, rotate: { x: 0, y: 1, z: 0, deg: -90 } },
    top: { translate: { x: 0, y: -faceSize, z: 0 }, rotate: { x: 1, y: 0, z: 0, deg: 90 } },
    bottom: { translate: { x: 0, y: faceSize, z: 0 }, rotate: { x: 1, y: 0, z: 0, deg: -90 } },
  });

  useEffect(() => {
    // Get the rotation values for the specified index (e.g., "back")
    const { rotate } = faces[index];

    // Set the initial cube state based on the specified index only on the initial render
    if (!isMoved && !isPressed) {
      setCube((prevCube) => ({
        ...prevCube,
        rotateX: rotate.x ? -rotate.deg + -13 : -13,
        rotateY: rotate.y ? -rotate.deg + -13 : 0,
        rotateZ: !rotate.y ? rotate.deg > 0 ? -13 : 13 : 0,
      }));
    }
  }, [faces, index, isMoved, isPressed]);

  useEffect(() => {
    // Update the cube size and faceSize when the 'size' prop changes
    setCube((prevCube) => ({
      ...prevCube,
      width: size,
      height: size,
    }));

    const newFaceSize = size / 2;

    setFaces((prevFaces) => ({
      ...prevFaces,
      front: { ...prevFaces.front, translate: { ...prevFaces.front.translate, z: newFaceSize } },
      right: { ...prevFaces.right, translate: { ...prevFaces.right.translate, x: newFaceSize } },
      back: { ...prevFaces.back, translate: { ...prevFaces.back.translate, z: -newFaceSize } },
      left: { ...prevFaces.left, translate: { ...prevFaces.left.translate, x: -newFaceSize } },
      top: { ...prevFaces.top, translate: { ...prevFaces.top.translate, y: -newFaceSize } },
      bottom: { ...prevFaces.bottom, translate: { ...prevFaces.bottom.translate, y: newFaceSize } },
    }));
    
  }, [size]);

  const [cubeChildren, setCubeChildren] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const newChildren =
      children && (Array.isArray(children) ? children.slice(0, 6) : [children]);

    while (newChildren.length < 6) {
      newChildren.push(emptyFace);
    }

    setCubeChildren(newChildren);
  }, [children]);

  const dragCube = () => {
    const { rotateX, rotateY } = cube;
    const [dx, dy] = mouseDelta;

    const newRotateX = rotateX - dy;
    const absX = Math.abs(newRotateX % 360);
    const newRotateY = absX > 90 && absX < 270 ? rotateY - dx : rotateY + dx;

    setCube((prevCube) => ({
      ...prevCube,
      rotateX: newRotateX,
      rotateY: newRotateY,
    }));
  };

  const startGesture = (x: number, y: number) => {
    setIsPressed(true);
    setIsMoved(false);
    setMouseXY([x, y]);
  };

  const moveGesture = (x: number, y: number) => {
    const [mx, my] = mouseXY;

    if (isPressed) {
      setMouseXY([x, y]);
      setMouseDelta([x - mx, y - my]);
      setIsMoved(true);

      dragCube();
    }
  };

  const endGesture = () => {
    if (isPressed) {
      setIsPressed(false);
      setMouseXY([0, 0]);
      setMouseDelta([0, 0]);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e;
    startGesture(pageX, pageY);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e;
    moveGesture(pageX, pageY);
  };

  const handleMouseUp = () => {
    endGesture();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e.touches[0];
    startGesture(pageX, pageY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const { pageX, pageY } = e.touches[0];
    moveGesture(pageX, pageY);
  };

  const handleTouchEnd = () => {
    endGesture();
  };

  return (
    <div className={`cube-wrapper`}>
      <Motion
        style={{
          rotateX: spring(cube.rotateX),
          rotateY: spring(cube.rotateY),
          rotateZ: spring(cube.rotateZ),
        }}
      >
        {({ rotateX, rotateY, rotateZ }: { rotateX: number; rotateY: number; rotateZ: number }) => (
          <div
            className={`cube`}
            style={{
              transform: `translate3d(${cube.translate.x}px, ${cube.translate.y}px, ${cube.translate.z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`,
            }}
          >
            {Object.keys(faces).map((face, key) => {
              const { translate, rotate } = faces[face];

              return (
                <div
                  className={`cube-face ${face}`}
                  key={key}
                  style={{
                    transform: `translate3d(${translate.x}px, ${translate.y}px, ${translate.z}px) rotate3d(${rotate.x}, ${rotate.y}, ${rotate.z}, ${rotate.deg}deg)`,
                    width: cube.width,
                    height: cube.height,
                  }}
                  onMouseDown={(e) => {
                    handleMouseDown(e);
                  }}
                  onMouseMove={(e) => {
                    handleMouseMove(e);
                  }}
                  onMouseLeave={() => {
                    handleMouseUp();
                  }}
                  onMouseUp={() => {
                    handleMouseUp();
                  }}
                  onTouchStart={(e) => {
                    handleTouchStart(e)
                  }}
                  onTouchMove={(e) => {
                    handleTouchMove(e)
                  }}
                  onTouchEnd={() => {
                    handleTouchEnd()
                  }}
                >
                  {cubeChildren[key]}
                </div>
              );
            })}
          </div>
        )}
      </Motion>
    </div>
  );
};

export default Cube