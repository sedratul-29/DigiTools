import './App.css';
import Header from './Component/Header/Header';
import Banner_1 from './Component/Banner_1/Banner_1';
import StatsSection from './Component/Stats_Section/StatsSection';
import StepSection from './Component/Step_Section/StepSection';
import Optional from './Component/Optional/Optional';
function App() {

  return (
    <div className='manrope'>
      <Header></Header>
      <hr  className='opacity-8'/>
      <Banner_1></Banner_1>
      <StatsSection></StatsSection>
      <StepSection></StepSection>
      <Optional></Optional>
    </div>
  )
}

export default App
