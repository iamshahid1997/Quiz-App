import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <div className="w-full md:w-1/2 bg-white">
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
