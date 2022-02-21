import Signup from "./Signup";

function App() {
  const handleSignupOnSuccess = () => {
    console.log("done");
  };

  return (
    <div className="App">
      <Signup onSuccess={handleSignupOnSuccess} />
    </div>
  );
}

export default App;
