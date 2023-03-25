import PageRoutes from "./routes/PageRoutes";

function App() {
  return (
    <div className="w-full flex flex-col items-center bg-slate-50">
      <div className="w-full md:w-2/6 bg-white">
        <PageRoutes />
      </div>
    </div>
  );
}

export default App;
