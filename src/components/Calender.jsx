import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Map } from 'pigeon-maps'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const Calender = () => {
    const [value, onChange] = useState<Value>(new Date());
    const [center, setCenter] = useState([50.879, 4.6997])
    const [zoom, setZoom] = useState(11)

    return (
     <div>
         <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <div>
      <Map 
      height={300}
      center={center} 
      zoom={zoom} 
      onBoundsChanged={({ center, zoom }) => { 
        setCenter(center) 
        setZoom(zoom) 
      }} 
    />
      </div>
     </div>
    );
  }

export default Calender;