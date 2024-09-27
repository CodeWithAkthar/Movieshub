import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3" >
      <Skeleton className="h-[160px] w-[] rounded-xl bg-[#153f64] " />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250p] bg-[#153f64]" />
        <Skeleton className="h-4 w-[100px] bg-[#153f64]" />
      </div>
    </div>
  )
}
