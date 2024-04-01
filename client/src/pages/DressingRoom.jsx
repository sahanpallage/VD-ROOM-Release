import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import {
  OrbitControls, Environment, Grid, ScrollControls, useScroll,
  Scroll, Text, Clone, PresentationControls, SpotLight
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useParams } from "react-router-dom";
import "../components/DressingRoom/styles.css"


const Overlay = ({ setEnvironment, setColor, product }) => {
  // console.log(product);
  return (
    <>
      <div className="main-container">
        <div className="logo">
          <h1>VD-ROOM</h1>
        </div>
        <div className="environment-selector">
          <button onClick={() => { setEnvironment("city") }}>noon</button>
          <button onClick={() => { setEnvironment("sunset") }}>sunset</button>
          <button onClick={() => { setEnvironment("night") }}>night</button>
          {/* <button onClick={() => { setEnvironment("apartment") }}>apartment</button>
          <button onClick={() => { setEnvironment("warehouse") }}>warehouse</button> */}
        </div>
        <div className="color-selector">
          {product && product.colors && product.colors.map((color) => ( // Check if product and product.colors are not undefined
            <button key={color.name} onClick={() => { setColor(color) }}>{color.name}</button>
          ))}
        </div>
        <div className="addtocart-btn">
          <button onClick={() => { }}>Add to Cart</button>
        </div>
      </div>
    </>

  )
}

const Model = () => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, "/models/HumanDummy.glb");
  const scroll = useScroll();
  const rotation = useRef();

  return (
    <>
      <primitive ref={mesh} object={gltf.scene} scale={0.1} />
    </>
  )
}

const Shirt1 = (clothColor) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, "/models/shirt2.glb");
  console.log("shirt1")

  useEffect(() => {
    gltf.materials["Material.001"].color.r = clothColor.clothColor.r / 255;
    gltf.materials["Material.001"].color.g = clothColor.clothColor.g / 255;
    gltf.materials["Material.001"].color.b = clothColor.clothColor.b / 255;
    // console.log("shirt 1:"+gltf)
  }, [clothColor]);
  return (
    <primitive ref={mesh} object={gltf.scene} scale={2.5} position={[3, -3, 0]} />
  )
}

const Shirt2 = (clothColor) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, "/models/shirt.glb");
  // console.log(gltf)

  useEffect(() => {
    gltf.materials["Cotton_50s_Poplin_FRONT_39668"].color.r = clothColor.clothColor.r / 255;
    gltf.materials["Cotton_50s_Poplin_FRONT_39668"].color.g = clothColor.clothColor.g / 255;
    gltf.materials["Cotton_50s_Poplin_FRONT_39668"].color.b = clothColor.clothColor.b / 255;
  }, [clothColor]);
  return (
    <primitive ref={mesh} object={gltf.scene} scale={2.5} position={[3, -3, 0]} />
  )
}

const Pants = (clothColor) => {
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, "/models/pants.glb");
  console.log(gltf)

  useEffect(() => {
    gltf.materials["SSC_Grey_Sweatpants"].color.r = clothColor.clothColor.r / 255;
    gltf.materials["SSC_Grey_Sweatpants"].color.g = clothColor.clothColor.g / 255;
    gltf.materials["SSC_Grey_Sweatpants"].color.b = clothColor.clothColor.b / 255;
  }, [clothColor]);

  return (
    <primitive ref={mesh} object={gltf.scene} scale={2.5} position={[-3, -2, 0]} />
  )
}

const Models = ({ product, clothColor }) => {
  let componentToRender;
  console.log(product.product)
  switch (product.product) {
    case "shirt1":
      componentToRender = <Shirt1 clothColor={clothColor} />;
      break;
    case "shirt2":
      componentToRender = <Shirt2 clothColor={clothColor} />;
      break;
    case "jeans":
      componentToRender = <Pants clothColor={clothColor} />;
      break;
    default:
      componentToRender = <Model />;
  }

  return componentToRender;
};

const Experience = ({ environmentPreset, clothColor, product }) => {
  const spotlightRef = useRef();

  useEffect(() => {
    // Activate spotlight only if environmentPreset is "night"
    const timeoutId = setTimeout(() => {
      if (environmentPreset === "night") {
        if (spotlightRef.current) {
          spotlightRef.current.visible = true;
          spotlightRef.current.intensity = 5;
        }
      } else {
        if (spotlightRef.current) {
          spotlightRef.current.visible = false;
        }
      }
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [environmentPreset]);

  return (
    <>
      <Canvas shadows camera={{ fov: 65 }}>
        <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
          <Environment preset={environmentPreset} background={true} blur={0.5} />
          <ambientLight intensity={0.5} />
          <Model />
          <Models product={product} clothColor={clothColor} />
          <SpotLight
            ref={spotlightRef}
            castShadow
            penumbra={0.2}
            radiusTop={0.4}
            radiusBottom={40}
            distance={80}
            angle={0.90}
            attenuation={20}
            anglePower={5}
            intensity={20}
            opacity={0.2}
            position={[-2, 3, 2]}
          // target={[0, 0, 0]}
          // rotation={20}
          />
          {/* <OrbitControls /> */}
        </PresentationControls>
      </Canvas>
    </>

  )
}



export default function DressingRoom() {

  const [product, setProduct] = useState()
  const { item } = useParams();

  useEffect(() => {
    // Sample data
    const shirt1 = {
      product: "shirt1",
      colors: [
        { name: "red", isColor: true, r: 241, g: 76, b: 60 },
        { name: "green", isColor: true, r: 39, g: 174, b: 96 },
        { name: "blue", isColor: true, r: 78, g: 145, b: 210 },
        { name: "white", isColor: true, r: 225, g: 225, b: 225 },
      ],
    };

    const shirt2 = {
      product: "shirt2",
      colors: [
        { name: "red", isColor: true, r: 231, g: 76, b: 60 },
        { name: "green", isColor: true, r: 39, g: 174, b: 96 },
        { name: "blue", isColor: true, r: 78, g: 145, b: 210 },
        { name: "purple", isColor: true, r: 142, g: 68, b: 173 },
        { name: "white", isColor: true, r: 225, g: 225, b: 225 },
      ],
    };

    const jeans = {
      product: "jeans",
      colors: [
        { name: "orange", isColor: true, r: 230, g: 126, b: 34 },
        { name: "green", isColor: true, r: 132, g: 165, b: 80 },
        { name: "blue", isColor: true, r: 78, g: 145, b: 210 },
        { name: "red", isColor: true, r: 231, g: 76, b: 60 },
        { name: "white", isColor: true, r: 225, g: 225, b: 225 },
      ],
    };

    let selectedProduct;
    switch (item) {
      case "shirt1":
        selectedProduct = shirt1;
        break;
      case "shirt2":
        selectedProduct = shirt2;
        break;
      case "jeans":
        selectedProduct = jeans;
        break;
      default:
        selectedProduct = null;
    }

    setProduct(selectedProduct);
  }, []);

  const [environmentPreset, setEnvironment] = useState("warehouse");
  const [clothColor, setColor] = useState({ r: 255, g: 255, b: 255 })

  return (
    <div className="droom" style={{ width: '100vw', height: '100vh' }}>
      <Overlay setEnvironment={setEnvironment} setColor={setColor} product={product} />
      <Experience environmentPreset={environmentPreset} clothColor={clothColor} product={product} />
    </div>
  )
}
