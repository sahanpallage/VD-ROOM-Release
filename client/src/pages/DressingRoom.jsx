import { Suspense, useEffect, useRef, useState } from "react"
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Grid, ScrollControls, useScroll, 
  Scroll, Text, Clone, PresentationControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useParams } from "react-router-dom";
  

const Overlay = ({setEnvironment, setColor, product}) => {
  console.log(product);
  return (
    <>
    <div>html overlay</div>
    <div>

      <button onClick={()=>{setEnvironment("sunset")}}>sunset</button>
      <button onClick={()=>{setEnvironment("city")}}>city</button>
      <button onClick={()=>{setEnvironment("night")}}>night</button>
      <button onClick={()=>{setEnvironment("apartment")}}>apartment</button>
      <button onClick={()=>{setEnvironment("park")}}>park</button>
    </div>
    <div>
      {/* <button onClick={()=>{setColor({isColor:true, r:132, g:165, b:80})}}>Green</button>
      <button onClick={()=>{setColor({isColor:true, r:156, g:123, b:178})}}>White</button>
      <button onClick={()=>{setColor({isColor:true, r:78, g:145, b:210})}}>Blue</button> */}
     {product && product.colors && product.colors.map((color) => ( // Check if product and product.colors are not undefined
          <button key={color.name} onClick={() => { setColor(color) }}>{color.name}</button>
        ))}
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
  // console.log(gltf)

  useEffect(() => {
  gltf.materials["Material.001"].color.r = clothColor.clothColor.r / 255;
  gltf.materials["Material.001"].color.g = clothColor.clothColor.g / 255;
  gltf.materials["Material.001"].color.b = clothColor.clothColor.b / 255;
  // console.log("shirt 1:"+gltf)
}, [clothColor]);
  return (
    <primitive ref={mesh} object={gltf.scene} scale={2.5} position={[3,-3,0]}/>
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
  // gltf.materials["Material__35"].color.r = clothColor.clothColor.r;
  // gltf.materials["Material__35"].color.g = clothColor.clothColor.g;
  // gltf.materials["Material__35"].color.b = clothColor.clothColor.b;
    // console.log(gltf.materials["Material.001"])
}, [clothColor]);
  return (
    <primitive ref={mesh} object={gltf.scene} scale={2.5} position={[-3,0,0]}/>
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
    <primitive ref={mesh} object={gltf.scene} scale={2.5} position={[-3,0,0]}/>
  )
}

const Experience = ({environmentPreset, clothColor}) => {


  return (
    <>
    <Canvas shadows camera={{ fov: 65 }}>
    <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
         <Environment preset={environmentPreset} background={true} blur={0.5} />
         {/* <ambientLight intensity={1} /> */}
         <Model />
         <Shirt1 clothColor={clothColor} />
         <Shirt2 clothColor={clothColor} />
         <Pants clothColor={clothColor} />
         <OrbitControls />
         </PresentationControls>
         </Canvas>
    </>
    
  )
}



export default function DressingRoom() {

  const [product, setProduct] = useState()
  const {item} = useParams();

  // // Sample data
  // const shirt1 = {
  //   product: "shirt1",
  //   colors: [
  //     {name:"red", isColor:true, r:132, g:165, b:80},
  //     {name:"green", isColor:true, r:156, g:123, b:178},
  //     {name:"blue", isColor:true, r:78, g:145, b:210},
  //   ]
  // }

  // const shirt2 = {
  //   product: "shirt2",
  //   colors: [
  //     {name:"red", isColor:true, r:132, g:165, b:80},
  //     {name:"green", isColor:true, r:156, g:123, b:178},
  //     {name:"blue", isColor:true, r:78, g:145, b:210},
  //   ]
  // }

  // const jeans = {
  //   product: "jeans",
  //   colors: [
  //     {name:"red", isColor:true, r:132, g:165, b:80},
  //     {name:"green", isColor:true, r:156, g:123, b:178},
  //     {name:"blue", isColor:true, r:78, g:145, b:210},
  //   ]
  // }

  // switch(item){
  //   case 'shirt1':
  //     setProduct(shirt1)
  //   case 'shirt2':
  //     setProduct(shirt2)
  //   case 'jeans':
  //     setProduct(jeans)
  // }

  
  // const getProduct = (item) => {
  //   const reuslt = axios.get(`https://localhost:3000/products/getProducts/${item}`).then((response) => setProduct(response))
  // }
  // getProduct()


  useEffect(() => {
    // Sample data
    const shirt1 = {
      product: "shirt1",
      colors: [
        { name: "red", isColor: true, r: 132, g: 165, b: 80 },
        { name: "green", isColor: true, r: 156, g: 123, b: 178 },
        { name: "blue", isColor: true, r: 78, g: 145, b: 210 },
      ],
    };

    const shirt2 = {
      product: "shirt2",
      colors: [
        { name: "red", isColor: true, r: 132, g: 165, b: 80 },
        { name: "green", isColor: true, r: 156, g: 123, b: 178 },
        { name: "blue", isColor: true, r: 78, g: 145, b: 210 },
      ],
    };

    const jeans = {
      product: "jeans",
      colors: [
        { name: "red", isColor: true, r: 132, g: 165, b: 80 },
        { name: "green", isColor: true, r: 156, g: 123, b: 178 },
        { name: "blue", isColor: true, r: 78, g: 145, b: 210 },
        { name: "purple", isColor: true, r: 78, g: 145, b: 210 },
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
  const [clothColor, setColor] = useState({r:1, g:1, b:1})

  return (
    <div className="droom" style={{ width:'100vw',height:'100vh'}}>
        <Overlay setEnvironment={setEnvironment} setColor={setColor} product={product} />
         {/* <Experience environmentPreset={environmentPreset} clothColor={clothColor} product={product} /> */}
    </div>
  )
}
