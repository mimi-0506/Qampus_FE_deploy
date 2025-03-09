'use client';

import {useState} from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import {motion} from 'framer-motion';
import {useRouter} from 'next/navigation';
import {communityUnivType} from '@/type';

type hoverType = {
  univ: communityUnivType;
  coordinate: {x: number; y: number};
};

type positionType = {
  coordinates: [number, number];
  zoom: number;
};

// 순위에 따라 색상 변화 (높은 순위는 밝은 색, 낮은 순위는 어두운 색)
const getColorByRank = (rank: number) => {
  const brightness = 255 - rank * 15; // 순위가 낮을수록 어두운 색 (최대 255, 최소 75)
  return `rgb(${brightness}, ${brightness}, 255)`; // 푸른 계열의 색상 변화
};
const geoUrl =
  'https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2018/json/skorea-provinces-2018-topo.json';

export default function UnivMap({data}: {data: communityUnivType[] | []}) {
  const [hoveredMarker, setHoveredMarker] = useState<hoverType | null>(null);
  const [position, setPosition] = useState<positionType>({
    coordinates: [127, 36],
    zoom: 1,
  });

  const router = useRouter();

  const handleZoomIn = () => {
    console.log(position.zoom);
    setPosition(pos => ({...pos, zoom: pos.zoom + 0.1}));
  };

  const handleZoomOut = () => {
    setPosition(pos => ({...pos, zoom: pos.zoom - 0.1}));
  };

  function handleMoveEnd(position: positionType) {
    setPosition(position);
  }

  return (
    <div className="bg-black w-full h-full">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 8000,
          center: [100, 36],
        }}
        style={{backgroundColor: '#000'}}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          filterZoomEvent={e => {
            if (e instanceof WheelEvent) return false;
            else return true;
          }}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoUrl}>
            {({geographies}) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: {fill: '#3765D6', stroke: '#FFF'},
                    hover: {fill: '#5A82E6', stroke: '#FFF'},
                    pressed: {fill: '#2A4BA5', stroke: '#FFF'},
                  }}
                />
              ))
            }
          </Geographies>

          {/* 대학 마커 표시 */}
          {data.map(uni => {
            const size =
              Math.max(8 - uni.ranking * 0.5, 2) *
              (1 / Math.sqrt(position.zoom));
            const color = getColorByRank(uni.ranking);

            return (
              <Marker
                className={`w-[${size}] aspect-[1/1] bg-[${color}]`}
                key={uni.university_name}
                coordinates={[uni.location.latitude, uni.location.longitude]}
                onMouseEnter={e => {
                  setHoveredMarker({
                    univ: uni,
                    coordinate: {x: e.clientX, y: e.clientY},
                  });
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                onClick={() => {
                  router.push(`/community/${uni.university_name}`);
                }}
              >
                {/* Glow 효과 */}
                <motion.circle
                  r={glowSize}
                  fill={color}
                  style={{filter: 'blur(6px)', opacity, cursor: 'pointer'}}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [opacity, opacity * 0.5, opacity],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                {/* 실제 마커 */}
                <motion.circle
                  r={size}
                  fill={color}
                  animate={{scale: [1, 1.2, 1], opacity: [1, 0.6, 1]}}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  style={{cursor: 'pointer'}}
                />
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {hoveredMarker && (
        <div
          className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-[20.5vw] absolute"
          style={{
            left: hoveredMarker.coordinate.x,
            top: hoveredMarker.coordinate.y,
          }}
        >
          <h2 className="text-[1.6vw] font-semibold">
            {hoveredMarker.univ.university_name}
          </h2>
          <p className="text-grey3 text-[1vw] mt-1">10명 참여중</p>
          <p className="text-[1.14vw] text-grey5 mt-3">
            주간
            <span className="font-bold">{hoveredMarker.univ.ranking}위</span>/
            차지율 <span className="font-bold">{hoveredMarker.univ.rate}%</span>
          </p>
        </div>
      )}

      {/* 줌 버튼 */}
      <div
        className="absolute bottom-[6.3vw] right-[6.25vw] bg-[url('/images/community/zoomButton.png')] 
      bg-contain bg-no-repeat w-[4.4vw] aspect-[86/191] flex justify-center items-center flex-col"
      >
        <button
          onClick={handleZoomIn}
          className="w-[4vw] h-[5vw]  rounded-full "
        />

        <button
          onClick={handleZoomOut}
          className="w-[4vw] h-[5vw] rounded-full"
        />
      </div>
    </div>
  );
}
