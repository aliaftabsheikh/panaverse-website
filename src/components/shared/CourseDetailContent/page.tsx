import { QuartersData } from "@/types/types";
import React from "react";

function CourseDetailContent({ data }: { data: QuartersData }) {
  return (
    <div className="text-gray-300">
      <h1 className="text_gradient text-5xl md:text-3xl font-bold">
        Course Description
      </h1>
      <div className="mt-6">
        {data.description.map((item, index) => (
          <p
            key={index}
            className="bg-primary-color border border-gray-800 p-5 rounded-xl mb-5 word_spacing text-base md:text-sm"
          >
            {item}
          </p>
        ))}
      </div>

      <div className="mt-16 sm:mt-12">
        <h1 className="text_gradient text-5xl md:text-3xl font-bold">
          Course Outline
        </h1>

        <div className="mt-8">
          {data.outline.map((item, index) => (
            <div key={index}>
              <h1 className="text-2xl sm:text-xl font-bold my-5">
                {item.title}
              </h1>

              <div
                className={
                  item.children?.length
                    ? "bg-primary-color border border-gray-800 p-5 rounded-xl mb-5 word_spacing text-base md:text-sm"
                    : ""
                }
              >
                {item.children?.map((item, index) => (
                  <div key={index} className="my-5">
                    {item.map((subItem : any, subIndex)=>(
                        <div key={subIndex}>
                            {subItem.type === "text" ? (
                                <p>{subItem.text}</p>
                            ) : subItem.type === "link" ? (
                                <a
                                    href={subItem.url}
                                    className="text-blue-400 flex items-center gap-3 w-fit">
                                        <span className="lowercase">
                                      {subItem.text}
                                    </span>
                                    </a>
                            ) : subItem.type === "sub-heading" ? (
                                <p className="text-xl font-bold">
                                  {subItem.text}
                                </p>
                            ) : subItem.type === "h3" ? (
                                <p className="text-lg font-bold">
                                  {subItem.text}
                                </p>
                              ) : subItem.type === "note" ? (
                                <p className="flex items-start gap-3 font-bold">
                                  <span className="text-2xl text_gradient">
                                   *
                                  </span>
                                  Note : {subItem.text}
                                </p>
                              ) : subItem.type === "list" ? (
                                <ul className="list-disc ml-10">
                                    {subItem.children.map((list: any, listIndex: number)=>(
                                        <li key={listIndex
                                        } className="my-2">
                                            {list.map((list_item: any, listItemIndex: number)=>(
                                                <div key={listItemIndex}>
                                                {list_item.type ===
                                                "text" ? (
                                                  <p>{list_item.text}</p>
                                                ) : list_item.type ===
                                                  "link" ? (
                                                  <a
                                                    href={list_item.url}
                                                    className="text-blue-400 "
                                                  >
                                                  
                                                    <span className="lowercase">
                                                      {list_item.text}
                                                    </span>
                                                  </a>
                                                ) : (
                                                  false
                                                )}
                                              </div>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                              ) : (
                                false
                              )
                             }
                        </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetailContent;
