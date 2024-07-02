"use client";
import "../../css/selection.css";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { useRouter } from "next/navigation";

const selection = () => {
  const router = useRouter();
  const handelButton = () => {
    router.push("/pages/organiser");
  };
  return (
    <div className="selection-container">
      <div
        className="organiser"
        style={{ display: "flex", flexDirection: "column", gap: 0 }}
      >
        <CardContainer className="inter-var">
          <CardBody className=" relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-3xl p-6 border cursor-pointer">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              ORGANISER
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Who want to post event Click here
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                onClick={handelButton}
                src="/Images/organiser.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20"></div>
          </CardBody>
        </CardContainer>
      </div>
      <div
        className="participent"
        style={{ display: "flex", flexDirection: "column", gap: 0 }}
      >
        <CardContainer className="inter-var">
          <CardBody className="bg-cream relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-3xl p-6 border cursor-pointer">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              PARTICIPENT
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Willing Candidate click here
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src="/Images/participent.png"
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20"></div>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
};

export default selection;
