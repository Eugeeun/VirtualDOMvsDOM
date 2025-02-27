import React from "react";
import MassivePostList from "./components/MassivePostList";
import RealtimeComments from "./components/RealtimeComments";
import FilterablePosts from "./components/FilterablePosts";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Performance Test</h1>
      <main style={{ display: "flex", justifyContent: "space-between" }}>
        <FilterablePosts />
        <MassivePostList />
        <RealtimeComments />
      </main>
    </div>
  );
};

export default App;
