"use client";
import React, { useState } from "react";
import "../../css/organiser.css";

const Organiser = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="wrapper">
      <div className="about-event">
        <div className="event-img">
          {!selectedImage && (
            <label className="drop-container" id="dropcontainer">
              <span className="drop-title">Drop files here</span>
              or
              <input
                type="file"
                id="images"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "block", margin: "20px 0" }}
              />
            </label>
          )}
          {selectedImage && (
            <div>
              <img
                src={selectedImage}
                alt="Uploaded"
                className="Uploaded-image"
              />
            </div>
          )}
        </div>
        <div className="description-container">
          <div className="des-title">Description</div>
          <div className="card card--inverted">
            <h2>
              {" "}
              <svg className="icon" aria-hidden="true">
                <use href="#icon-coffee" />
              </svg>
            </h2>
            <label className="input">
              <input
                className="input__field"
                type="text"
                placeholder=" "
                value="Valuable value"
              />
            </label>

            <div className="button-group">
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="details">Bye</div>
      <div className="additional-details">Hye</div>
      <div className="navigation">Bye</div>
    </div>
  );
};

export default Organiser;
