import './App.css';
import { Suspense } from 'react';
import Header from './Component/Header/Header';
import Banner_1 from './Component/Banner_1/Banner_1';
import StatsSection from './Component/Stats_Section/StatsSection';
import MainSection from './Component/MainSection/MainSection';
import StepSection from './Component/Step_Section/StepSection';
import Optional from './Component/Optional/Optional';
import Footer from './Component/Footer/Footer';
// import { FallingLeaves } from 'falling-leaves/react';
import Snowfall from 'react-snowfall';

function App() {

  const packagesPromise = fetch("/data.json").then(res => res.json());
  
  return (
    <div className='manrope'>
      {/* <FallingLeaves fullScreen
      shapes={["maple"]}></FallingLeaves> */}
      <Snowfall color="#ffffff"
        snowflakeCount={150}
        speed={[0.5, 2]}
        radius={[1, 4]}
        wind={[-0.5, 1]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 9999
        }} />
      <Header></Header>
      <hr className='opacity-8' />
      <Banner_1></Banner_1>
      <StatsSection></StatsSection>
      <Suspense>
        <MainSection packagesPromise={packagesPromise}></MainSection>
      </Suspense>
      <StepSection></StepSection>
      <Optional></Optional>
      <Footer></Footer>
    </div>
  )
}

export default App
