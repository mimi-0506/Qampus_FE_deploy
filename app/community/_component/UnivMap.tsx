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

// 마커 좌표 타입 정의
interface MarkerData {
  name: string;
  coordinates: [number, number];
  rank: number;
}

// 대학 마커 데이터 (순위 부여, 숫자가 작을수록 높은 순위)
const universities: MarkerData[] = [
  {name: '서울대', coordinates: [126.9526, 37.4602], rank: 1},
  {name: '연세대', coordinates: [126.9368, 37.5645], rank: 2},
  {name: '부산대', coordinates: [129.0897, 35.2323], rank: 3},
  {name: '이화여대', coordinates: [126.9469, 37.5623], rank: 4},
  {name: '홍익대', coordinates: [126.9222, 37.551], rank: 5},
  {name: '충남대', coordinates: [127.3463, 36.3725], rank: 6},
  {name: '서울예대', coordinates: [127.1266, 37.4449], rank: 7},
  {name: '충북대', coordinates: [127.4562, 36.6294], rank: 8},
  {name: '경북대', coordinates: [128.6062, 35.8886], rank: 9},
  {name: '경남대', coordinates: [128.2132, 35.1814], rank: 10},
  {name: '전북대', coordinates: [127.1291, 35.8467], rank: 11},
  {name: '전남대', coordinates: [126.9028, 35.1761], rank: 12},
];

// 순위에 따라 색상 변화 (높은 순위는 밝은 색, 낮은 순위는 어두운 색)
const getColorByRank = (rank: number) => {
  const brightness = 255 - rank * 15; // 순위가 낮을수록 어두운 색 (최대 255, 최소 75)
  return `rgb(${brightness}, ${brightness}, 255)`; // 푸른 계열의 색상 변화
};

export default function UnivMap() {
  const geoUrl =
    'https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2018/json/skorea-provinces-2018-topo.json';

  const [hoveredMarker, setHoveredMarker] = useState<{
    name: string;
    x: number;
    y: number;
  } | null>(null);

  const [zoomLevel, setZoomLevel] = useState(1); // 줌 레벨 상태

  return (
    <div
      style={{backgroundColor: '#000', padding: '20px', position: 'relative'}}
    >
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{scale: 5000, center: [127, 36]}}
        style={{backgroundColor: '#000'}}
      >
        <ZoomableGroup
          minZoom={1}
          maxZoom={25}
          onMoveEnd={({zoom}) => {
            setZoomLevel(zoom);
          }}
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
          {universities.map(uni => {
            const size =
              Math.max(8 - uni.rank * 0.5, 2) * (1 / Math.sqrt(zoomLevel));
            const glowSize = size * 1.5;
            const opacity = 1 - uni.rank * 0.07;
            const color = getColorByRank(uni.rank);

            return (
              <Marker
                key={uni.name}
                coordinates={uni.coordinates}
                onMouseEnter={e =>
                  setHoveredMarker({name: uni.name, x: e.clientX, y: e.clientY})
                }
                onMouseLeave={() => setHoveredMarker(null)}
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
            left: hoveredMarker.x,
            top: hoveredMarker.y,
          }}
        >
          <h2 className="text-[1.6vw] font-semibold"> {hoveredMarker.name}</h2>
          <p className="text-grey3 text-[1vw] mt-1">49,201명 참여중</p>
          <p className="text-[1.1vw] text-grey5 mt-3">
            주간 <span className="font-bold">1위</span>
          </p>
        </div>
      )}
    </div>
  );
}
