export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold text-red-500">
        404 - 페이지를 찾을 수 없습니다.
      </h1>
      <p className="text-gray-500 mt-2">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
    </div>
  );
}
