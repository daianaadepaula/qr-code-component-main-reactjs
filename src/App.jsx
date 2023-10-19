import "./App.css";

function App() {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-bgColor">
      <div className="flex flex-col items-center gap-y-6 justify-center bg-cardColor rounded-lg py-5 max-w-xs">
        <img
          src="../src/assets/images/image-qr-code.png"
          alt="Imagem do QR Code"
          className="w-11/12 rounded-lg"
        />
        <h1 className="font-bold text-center text-2xl text-titleColor w-11/12">
          Improve your front-end skills by building projects
        </h1>
        <p className="font-normal text-center text-base text-paragraphColor w-5/6 pb-2">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </main>
  );
}

export default App;
