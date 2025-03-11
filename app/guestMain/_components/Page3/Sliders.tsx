'use client';
import {wrap} from 'motion/react';
import ImageSlider from './ImageSlider';
import BoxSlider from './BoxSlider';
import {useState} from 'react';

const ITEMS = [
  {
    title: '금주의 인기 질문과 답변',
    description:
      '에서는 매주 사용자에게 인기 질문과 답변들을 선별해서 제공해요. \n인기 질문은 조회 수와 나도 궁금해요 수로, 답변은 좋아요 수로 선별돼요.',
    image: '/images/logo/logo_mini_gray.png',
  },
  {
    title: '선의의 경쟁으로 함께 성장',
    description:
      '대학교, 학년, 전공으로 프로필 설정 후, 질문 해결 및 답변 활동으로 점수를 얻어요. \n점수는 학교 랭킹에 반영되고 선의의 경쟁을 유도함으로써 함께 성장할 수 있어요.',
  },
  {
    title: '자유로운 질의응답',
    description:
      '대학생들이 자유롭게 궁금한 내용을 질문하고 답변을 주고받아요. \n자신이 올린 질문에 답변이 달리면 답변 리스트로 확인할 수 있어요.',
  },
  {
    title: '금주의 인기 질문과 답변',
    description:
      '에서는 매주 사용자에게 인기 질문과 답변들을 선별해서 제공해요. \n인기 질문은 조회 수와 나도 궁금해요 수로, 답변은 좋아요 수로 선별돼요.',
    image: '/images/logo/logo_mini_gray.png',
  },
  {
    title: '선의의 경쟁으로 함께 성장',
    description:
      '대학교, 학년, 전공으로 프로필 설정 후, 질문 해결 및 답변 활동으로 점수를 얻어요. \n점수는 학교 랭킹에 반영되고 선의의 경쟁을 유도함으로써 함께 성장할 수 있어요.',
  },
];

export default function Sliders() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const [items, setItems] = useState(ITEMS);
  const [move, setMove] = useState('');

  const handlePrevMove = () => {
    setMove('prev');
    setTimeout(() => {
      setMove('');
      setItems([items[2], items[0], items[1], items[2], items[3]]);
    }, 500); // 1초 후에 원래 자리로 돌아옴
  };

  const handleNextMove = () => {
    setMove('next');
    setTimeout(() => {
      setMove('');
      setItems([items[1], items[2], items[3], items[4], items[2]]);
    }, 500); // 1초 후에 원래 자리로 돌아옴
  };

  const setSlide = (newDirection: 1 | -1) => {
    const nextItem = wrap(0, 3, selectedItem + newDirection);

    if (newDirection === 1) handleNextMove();
    else handlePrevMove();

    setSelectedItem(nextItem);
    setDirection(newDirection);
  };

  return (
    <div className="w-full h-full relative overflow-hidden flex flex-col justify- items-center">
      <ImageSlider
        direction={direction}
        selectedItem={selectedItem}
        setSlide={setSlide}
      />

      <BoxSlider items={items} move={move} />
    </div>
  );
}
