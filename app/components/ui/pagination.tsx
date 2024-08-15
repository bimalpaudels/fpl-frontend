type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <div className="flex justify-end items-center mt-4">
      <span className="text-gray-700 mr-4">
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
        disabled={currentPage === 0}
      >
        &lt;
      </button>
      <button
        className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages - 1}
      >
        &gt;
      </button>
    </div>
  );
}
