"use client";
import { Unity, useUnityContext } from "react-unity-webgl";

const HomePage = () => {
  const { unityProvider, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "Build/RollingBallPhantom.loader.js",
    dataUrl: "Build/RollingBallPhantom.data",
    frameworkUrl: "Build/RollingBallPhantom.framework.js",
    codeUrl: "Build/RollingBallPhantom.wasm",
  });
  return (
    <>
      {!isLoaded && (
        <div className="absolute top-[50%]">
          <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
        </div>
      )}
      <Unity className="w-full h-full" unityProvider={unityProvider} />
    </>
  );
};

export default HomePage;
