export const mockQuestions = [
  {
    id: 1,
    title: '기업의 지속 가능한 성장과 단기 이익의 균형',
    content:
      '기업이 단기적인 이익을 추구하면서도 장기적인 비전을 효과적으로 유지할 수 있는 경영 전략에는 어떤 것이 있을까요?',
    answerCount: 0,
    createdDate: '2025-02-21T12:00:00Z',
  },
  {
    id: 2,
    title: '스타트업의 성공적인 자금 조달 방법',
    content:
      '스타트업이 투자자들에게 신뢰를 줄 수 있는 효과적인 자금 조달 방법은 무엇인가요?',
    answerCount: 3,
    createdDate: '2025-02-20T15:30:00Z',
  },
  {
    id: 3,
    title: 'AI 기술이 전통 산업에 미치는 영향',
    content:
      'AI 기술이 전통적인 산업 분야에 미치는 긍정적 영향과 부정적 영향은 무엇인가요?',
    answerCount: 5,
    createdDate: '2025-02-19T10:45:00Z',
  },
  {
    id: 4,
    title: '마케팅 전략에서 데이터 분석의 중요성',
    content: '디지털 마케팅에서 데이터 분석이 중요한 이유는 무엇인가요?',
    answerCount: 2,
    createdDate: '2025-02-18T09:30:00Z',
  },
  {
    id: 5,
    title: 'React와 Vue의 차이점',
    content: 'React와 Vue 중 어떤 것을 선택해야 할까요?',
    answerCount: 1,
    createdDate: '2025-02-17T14:10:00Z',
  },
  {
    id: 6,
    title: 'Next.js에서 API 호출 최적화',
    content: 'Next.js에서 API 요청을 최적화하는 방법은 무엇인가요?',
    answerCount: 4,
    createdDate: '2025-02-16T11:45:00Z',
  },
  {
    id: 7,
    title: 'GraphQL과 REST API 비교',
    content: 'GraphQL과 REST API의 차이점과 장단점은 무엇인가요?',
    answerCount: 3,
    createdDate: '2025-02-15T08:25:00Z',
  },
  {
    id: 8,
    title: 'TypeScript의 장점과 단점',
    content: 'TypeScript를 사용할 때 얻을 수 있는 이점과 단점은 무엇인가요?',
    answerCount: 6,
    createdDate: '2025-02-14T18:05:00Z',
  },
  {
    id: 9,
    title: '웹 보안 기본 개념',
    content: '웹 애플리케이션 보안에서 중요한 요소는 무엇인가요?',
    answerCount: 0,
    createdDate: '2025-02-13T20:55:00Z',
  },
  {
    id: 10,
    title: 'UI/UX 디자인 트렌드 2025',
    content: '2025년의 최신 UI/UX 디자인 트렌드는 무엇인가요?',
    answerCount: 5,
    createdDate: '2025-02-12T13:15:00Z',
  },
];

for (let i = 11; i <= 50; i++) {
  mockQuestions.push({
    id: i,
    title: `랜덤 질문 ${i}`,
    content: `이것은 ${i}번째 목업 질문입니다. 해당 질문에 대한 상세 내용을 입력해주세요.`,
    answerCount: Math.floor(Math.random() * 11),
    createdDate: `2025-02-${String(Math.floor(Math.random() * 21) + 1).padStart(2, '0')}T${String(Math.floor(Math.random() * 24)).padStart(2, '0')}:${String(Math.floor(Math.random() * 60)).padStart(2, '0')}:00Z`,
  });
}
