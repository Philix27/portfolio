"use client";
import { TextH, TextP } from "@/comps";
import React from "react";
import { projectData } from "./data";
import { cn, useAppRouter, useAppTheme } from "@/lib";

export default function ProjectPage() {
  const { gradient } = useAppTheme();
  const { router } = useAppRouter();

  return (
    <div className={`flex w-full h-full items-center justify-center`}>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-y-3  md:gap-x-5 w-[90%] md:w-[80%]">
        {projectData.map((val, i) => (
          <div
            key={i}
            className={cn(
              "rounded-lg border flex md:flex-row flex-col w-full",
              gradient,
            )}
          >
            <div className="md:w-[230px] md:h-full w-full rounded-md">
              <img src={val.coverImg} className="w-full h-full rounded-md" />
            </div>
            <div className="w-full px-3 py-2">
              <div className="flex items-center justify-between w-full mb-2">
                <TextH className="tracking-wide">{val.title} </TextH>
                <div className="flex gap-x-2">
                  <Tag
                    text="live"
                    className="cursor-pointer"
                    onClick={() => router.push(val.liveLink)}
                  />
                  <Tag
                    text="source"
                    className="cursor-pointer"
                    onClick={() => router.push(val.sourceCode)}
                  />
                </div>
              </div>
              <TextP>{val.subtitle} </TextP>
              <div className="flex gap-x-1">
                {val.tags.map((tag, tagIndex) => (
                  <p key={tagIndex} className="mt-1 text-xs text-primary">
                    {tag} |
                  </p>
                ))}
              </div>
              <div className="flex gap-x-1">
                {val.categories.map((category, categoryIndex) => (
                  <Tag
                    key={categoryIndex}
                    text={category}
                    className="mt-1 bg-purple-600"
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-1">
                  {val.language.map((language, languageIndex) => (
                    <Tag
                      key={languageIndex}
                      text={language}
                      className="mt-1 bg-teal-600"
                    />
                  ))}
                </div>

                <div className="flex gap-x-1">
                  {val.devices.map((device, deviceIndex) => (
                    <Tag
                      key={deviceIndex}
                      text={device}
                      className="mt-1 bg-blue-600"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Tag(props: {
  text: string;
  className?: string;
  onClick?: VoidFunction;
}) {
  return (
    <p
      onClick={props.onClick}
      className={cn(
        "px-3 py-1 bg-primary rounded-md text-[10px] text-primary-foreground",
        props.className,
      )}
    >
      {props.text}
    </p>
  );
}
