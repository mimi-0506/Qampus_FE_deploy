import {IoIosSearch} from 'react-icons/io';

export default function SearchBar() {
  return (
    <div className="w-[600px] h-[40px] flex items-center border border-[#D9D9D9] text-sm rounded-3xl px-4">
      <input
        type="text"
        className="w-full h-full bg-transparent focus:outline-none text-black pd-2"
      />
      <IoIosSearch className="w-5 h-5 text-black cursor-pointer pd-2" />
    </div>
  );
}
