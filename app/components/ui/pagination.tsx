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
      <span className="mr-4 text-sm text-slate-400	">
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        className="px-4 py-2 bg-slate-100	disabled:opacity-20 text-slate-400"
        onClick={() => onPageChange(Math.max(currentPage - 1, 0))}
        disabled={currentPage === 0}
      >
        &lt;
      </button>
      <button
        className="px-4 py-2 mx-2 my-2 bg-slate-100	disabled:opacity-20 text-slate-400"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages - 1}
      >
        &gt;
      </button>
    </div>
  );
}
