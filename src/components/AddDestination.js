// src/components/AddDestination.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useDropzone } from 'react-dropzone';

const AddDestination = ({ onAddDestination }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState('');
  const [coords, setCoords] = useState({ lat: 51.505, lng: -0.09 });
  const [photo, setPhoto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && date && notes) {
      const newDestination = { name, date, notes, coords, photo };
      onAddDestination(newDestination);
      setName('');
      setDate(new Date());
      setNotes('');
      setCoords({ lat: 51.505, lng: -0.09 });
      setPhoto(null);
    }
  };

  const onDrop = (acceptedFiles) => {
    setPhoto(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop,
  });

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Travel Destination</h3>
      
      <label>Destination Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="E.g., Paris"
      />
      
      <label>Travel Date</label>
      <DatePicker selected={date} onChange={(date) => setDate(date)} />

      <label>Notes</label>
      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Your experience, tips, etc."
      />

      <label>Latitude</label>
      <input
        type="number"
        value={coords.lat}
        onChange={(e) => setCoords({ ...coords, lat: parseFloat(e.target.value) })}
        step="0.0001"
      />

      <label>Longitude</label>
      <input
        type="number"
        value={coords.lng}
        onChange={(e) => setCoords({ ...coords, lng: parseFloat(e.target.value) })}
        step="0.0001"
      />

      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {photo ? (
          <img src={photo} alt="destination" style={{ width: '200px', marginTop: '10px' }} />
        ) : (
          <p>Drag and drop an image here, or click to select a file</p>
        )}
      </div>

      <button type="submit">Add Destination</button>
    </form>
  );
};

export default AddDestination;
