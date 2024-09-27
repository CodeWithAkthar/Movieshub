import {
  Pagination,
  PaginationContent,
  // PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationDemoProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function PaginationDemo({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationDemoProps) {
  return (
    <Pagination className="h-10 w-28 lg:h-10 md:h-10">
      <PaginationContent className="flex justify-center w-full h-10 pt-5 mb-10">
        <PaginationItem>
          <PaginationPrevious
            className="text-sm text-white sm:text-base"
            onClick={
              currentPage === 1
                ? undefined
                : () => onPageChange(currentPage - 1)
            }
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              className={`text-sm sm:text-base ${
                currentPage === index + 1 ? "text-cyan-500" : "text-white"
              }`}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            className="text-sm text-white sm:text-base"
            onClick={
              currentPage === totalPages
                ? undefined
                : () => onPageChange(currentPage + 1)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
