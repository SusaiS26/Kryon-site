import './App.css';
import {useState} from "react";
import SegmentModal from './SegmentModal';

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="App">
       <div className='page-header'><h1> {`View Audience`}</h1></div>
      <div className="text-center">
        <button
          type="button"
          className="btn-segment"
          onClick={() => {
            setShowModal(!showModal);
          }}
        >
          Save segment
        </button>
        <SegmentModal showModal={showModal} setShowModal={setShowModal} />
        </div>
    </div>
  );
}

export default App;
