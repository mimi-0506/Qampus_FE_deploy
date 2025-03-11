import {useState} from 'react';

type positionType = {
  coordinates: [number, number];
  zoom: number;
};
export default function useMapPosition() {
  const [position, setPosition] = useState<positionType>({
    coordinates: [127, 36],
    zoom: 1,
  });

  const handleZoomIn = () => {
    setPosition(pos => ({...pos, zoom: pos.zoom + 0.1}));
  };

  const handleZoomOut = () => {
    setPosition(pos => ({...pos, zoom: pos.zoom - 0.1}));
  };

  const handleMoveEnd = (position: positionType) => {
    setPosition(position);
  };

  return {position, handleZoomIn, handleZoomOut, handleMoveEnd};
}
