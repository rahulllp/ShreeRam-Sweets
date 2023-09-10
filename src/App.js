import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { AboutUs, CreateContainer, Dashboard, FeedBack, Header, MainContainer, MainMenu, OnOrder, Orders, Question} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllFoodItems } from "./utils/firebaseFunctions";
import { actionType } from "./context/reducer";
import Dash from "./components/Dash";
import Feedbackans from "./components/Feedbackans";


const App = () => {
  const [{ foodItems }, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
          <Routes>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/menucard" element={<MainMenu/>}/>
            <Route path='/about' element={<AboutUs/>}/>
            <Route path='/question' element={<Question/>}/>
            <Route path='/feedback' element={<FeedBack/>}/>
           <Route path='/dash' element={<Dash/>}/>
           <Route path='/feedans' element={<Feedbackans/>}/>
           <Route path='/order' element={<Orders/>}/>
           <Route path='/onor' element={<OnOrder/>}/>
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
};

export default App;
