import React from "react";
import { Compare } from "@/components/ui/compare";

export function CompareCloud() {
  return (
    <div className="p-1  rounded-3xl  px-2">
      <Compare
        firstImage="https://salad-storage.s3.us-east-005.backblazeb2.com/2000-03.png"
        secondImage="https://salad-storage.s3.us-east-005.backblazeb2.com/2016-06.png"
        firstImageClassName="object-cover object-left-top"
        secondImageClassname="object-cover object-left-top"
        className="h-[250px] w-full md:h-[500px] md:w-[800px]"
        slideMode="hover"
      />
    </div>
  );
}
