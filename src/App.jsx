import './App.css'
import Achievements from './Components/Achievements/Achievements'
import Banner from './Components/Banner/Banner'
import Calender from './Components/Calender/Calender'
import Clients from './Components/Clients/Clients'
import Community from './Components/Community/Community'
import CommunityUpdates from './Components/CommunityUpdates/CommunityUpdates'
import Customers from './Components/Customers/Customers'
import Navbar from './Components/Navbar/Navbar'
import Unlock from './Components/Unlock/Unlock'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Clients/>
      <Community/>
      <Unlock/>
      <Achievements/>
      <Calender/>
      <Customers/>
      <CommunityUpdates/>
    </>
  )
}

export default App
