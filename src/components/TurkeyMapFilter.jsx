import React, { useState } from "react";
import TurkeyMap from "turkey-map-react";

const TurkeyMapFilter = ({ onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  const handleClick = (city) => {
    // city objesi içinde plaka kodu, isim vb. bilgiler döner
    setSelectedCity(city.name);
    if (onCitySelect) onCitySelect(city.name);
  };

  return (
    <div className="card shadow-sm p-3 mb-6">
      <h5 className="text-center mb-3">Haritadan Şehir Seç</h5>

      <div style={{ width: "100%", height: "auto", cursor: "pointer" }}>
        <TurkeyMap
          hoverable={true}
          customStyle={{ idleColor: "#dee2e6", hoverColor: "#0d6efd" }}
          onClick={(city) => handleClick(city)}
          cityWrapper={(cityComponent, cityData) => {
            const isSelected = selectedCity === cityData.name;

            // BURASI YENİ: Eğer style undefined ise boş bir obje ({}) olarak kabul et
            const existingStyle = cityComponent.props.style || {};

            return React.cloneElement(cityComponent, {
              style: {
                ...existingStyle,
                // Eğer şehir seçiliyse yeşil yap, değilse kendi var olan rengini koru
                fill: isSelected ? "#198754" : existingStyle.fill,
              },
            });
          }}
        />
      </div>

      {selectedCity && (
        <div className="text-center mt-3">
          <span className="badge bg-success">
            Seçilen Şehir: {selectedCity}
          </span>
        </div>
      )}
    </div>
  );
};

export default TurkeyMapFilter;
