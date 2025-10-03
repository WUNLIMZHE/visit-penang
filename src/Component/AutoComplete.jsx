import React, { useImperativeHandle } from "react";
import Input from "./Input";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";

const AutoComplete = React.forwardRef(
  ({ label, data, ...props }, ref) => {
    const location = useRef();
    const [query, setQuery] = useState("");
    const [coordinates, setCoordinates] = useState({ lat: null, lon: null });
    const [filteredData, setFilteredData] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    useImperativeHandle(ref, () => ({
      value: query,
      coordinates: coordinates
    }));

    const handleChange = () => {
      console.log(location.current.value);
      setQuery(location.current.value);
      if (location.current.value.length > 0) {
        const filtered = data.filter((item) =>
          item.name.toLowerCase().includes(location.current.value.toLowerCase())
        );
        setFilteredData(filtered);
        setShowSuggestions(true);
      } else {
        setFilteredData([]);
        setShowSuggestions(false);
      }
    };

    const handleSelect = (item) => {
      location.current.value = item.name;
      setQuery(item.name);
      setCoordinates({ lat: item.lat, lon: item.lon });
      console.log(`Selected coordinates: lat=${item.lat}, lon=${item.lon}`);
      setFilteredData([]);
      setShowSuggestions(false);
    };

    return (
      <div className="relative">
        <Input type="text" label={label} ref={location} onChange={handleChange} value={query} placeholder="Type a location..." props={props} />
        {showSuggestions && filteredData.length > 0 && (
          <ul className="absolute z-10 w-full bg-white border border-stone-300 rounded-md shadow-md max-h-48 overflow-y-auto">
            {filteredData.map((loc, index) => (
              <li
                key={index}
                className="p-2 cursor-pointer hover:bg-stone-200"
                onClick={() => handleSelect(loc)}
              >
                <span className="font-medium">{loc.name}</span>
                <span className="ml-2 text-xs text-stone-500">
                  ({loc.category})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
);

AutoComplete.displayName = "AutoComplete";

export default AutoComplete;

AutoComplete.propTypes = {
  label: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string,
      latitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      longitude: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ).isRequired,
};