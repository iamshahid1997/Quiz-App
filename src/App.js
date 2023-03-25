import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div className="w-full flex flex-col items-center bg-white min-h-[100dvh]">
      <div className="w-full md:w-1/2 bg-white h-full">
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
