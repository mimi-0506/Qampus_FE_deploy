export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-red-500">
        404 - 페이지를 찾을 수 없습니다.
      </h1>
      <p className="mt-2 text-gray-500">
        요청하신 페이지가 존재하지 않거나 이동되었습니다.
      </p>
    </div>
  );
}
