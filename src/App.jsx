import React from "react";
import Card from "./components/Card";

function App() {
  return (
    <main className="bg-[url(/images/bg-pattern-top.svg),url(/images/bg-pattern-bottom.svg)] bg-no-repeat flex justify-center items-center min-h-screen bg-green bg-[position:_right_50vw_bottom_70vh,_left_50vw_top_50vh]">
      <Card />
    </main>
  );
}

export default App;
