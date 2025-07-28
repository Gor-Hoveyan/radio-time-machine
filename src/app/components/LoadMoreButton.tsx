interface myComponentProps {
  page: number;
  limit?: number;
  getData: (page: number, limit?: number) => void;
}

export default function LoadMoreButton(props: myComponentProps) {
  const { page, limit, getData } = props;
  return (
    <div className="flex justify-center mt-8">
      <button
        onClick={limit ? () => getData(page, limit) : () => getData(page)}
        className="px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full shadow hover:bg-gray-700 cursor-pointer hover:shadow-md transition duration-400"
      >
        Load More
      </button>
    </div>
  );
}
