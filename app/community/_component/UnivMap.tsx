'use client';

import {useState} from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import {useRouter} from 'next/navigation';
import {communityUnivType} from '@/type';
import useMapPosition from '../../../hooks/useMapPosition';

// 순위에 따라 색상 변화 (높은 순위는 밝은 색, 낮은 순위는 어두운 색)
const getColorByRank = (rank: number) => {
  const brightness = 255 - rank * 10; // 순위가 낮을수록 어두운 색 (최대 255, 최소 75)
  return `rgb(${brightness}, ${brightness}, 255)`; // 푸른 계열의 색상 변화
};
const geoUrl =
  'https://raw.githubusercontent.com/southkorea/southkorea-maps/master/kostat/2018/json/skorea-provinces-2018-topo.json';

export default function UnivMap({data}: {data: communityUnivType[] | []}) {
  const [hoveredMarker, setHoveredMarker] = useState<number | null>(null);
  const {position, handleZoomIn, handleZoomOut, handleMoveEnd} =
    useMapPosition();
  const router = useRouter();

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
                  }}
                />
              ))
            }
          </Geographies>

          {/* 대학 마커 표시 */}
          {data.map(uni => {
            const size =
              Math.max(12 - uni.ranking * 0.4, 4) *
              (1 / Math.sqrt(position.zoom));
            const color = getColorByRank(uni.ranking);

            return (
              <Marker
                key={uni.university_name}
                coordinates={uni.location}
                onMouseEnter={() => {
                  setHoveredMarker(uni.university_id);
                }}
                onMouseLeave={() => setHoveredMarker(null)}
                onClick={() => {
                  router.push(`/community/${uni.university_name}`);
                }}
              >
                <svg
                  width="100"
                  height="100"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-20 -20 140 140"
                >
                  <circle
                    r={size}
                    fill={color}
                    className="animate-custom-scale filter blur-sm"
                  />

                  <circle
                    r={size}
                    fill={color}
                    className="cursor-pointer animate-custom-scale opacity-100 hover:opacity-80"
                  />
                </svg>

                {hoveredMarker === uni.university_id && (
                  <foreignObject
                    width={200}
                    height={100}
                    x={17}
                    y={17}
                    style={{
                      transform: `scale(${0.8 / position.zoom})`,
                    }}
                  >
                    <div className="bg-gray-800 text-white p-3 rounded-lg shadow-lg">
                      <h2 className="font-semibold">{uni.university_name}</h2>
                      <p className="text-grey3 text-sm mt-1">
                        {uni.participant_count}명 참여중
                      </p>
                      <p className="text-sm text-grey5 mt-2">
                        주간
                        <span className="font-bold">{uni.ranking}위</span>/
                        차지율 <span className="font-bold">{uni.rate}%</span>
                      </p>
                    </div>
                  </foreignObject>
                )}
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>

      {/* 줌 버튼 */}
      <div
        className="absolute bottom-[6.3vw] right-[6.25vw] bg-[url('/images/community/zoomButton.png')] 
      bg-contain bg-no-repeat w-[4.4vw] aspect-[86/191] flex justify-center items-center flex-col"
      >
        <button
          onClick={handleZoomIn}
          className="w-[4vw] h-[5vw] rounded-full "
        />

        <button
          onClick={handleZoomOut}
          className="w-[4vw] h-[5vw] rounded-full"
        />
      </div>
    </div>
  );
}
