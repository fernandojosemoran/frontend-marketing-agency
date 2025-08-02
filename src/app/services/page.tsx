"use client";

import { useEffect } from "react";
import { ServiceHeader, ServiceList } from "./(components)";
import { postsDesign, postsSoftware } from "../(shared)/data/posts";

import useToggleDarkMode from "../(shared)/hooks/useToggleDarkModel";

export default function ServicePage() {
  const { handlerTheme } = useToggleDarkMode();

  useEffect(() => handlerTheme(), []);

  return (
    <>
      <ServiceHeader />
      <div className="py-12 mt-40 bg-gray-50 dark:bg-dm-third">
        <ServiceList
          posts={postsSoftware}
          sectionTitle={"Software and Product Development"}
        />
        <ServiceList posts={postsDesign} sectionTitle={"Design Services"} />
      </div>
    </>
  );
}
