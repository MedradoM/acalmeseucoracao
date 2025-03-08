import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import questions from "./questions.json";
import Title from "@/components/ui/title";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const QuestionSection = () => {
  useEffect(() => {
    const elements = gsap.utils.toArray<HTMLElement>(".questions");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none ",
          },
        }
      );
    });
  }, []);

  return (
    <div id="duvidas" className=" px-[4%] lg:px-0  flex justify-center">
      <div className="container h-full flex flex-col gap-16 px-[2%] lg:px-[8%]">
        <Title
          title="Perguntas Frequentes"
          description="Algumas das perguntas mais respondidas"
        />

        <div className="flex flex-col">
          <Accordion type="multiple">
            {questions.map((question) => (
              <AccordionItem
                key={`question-${question.id}`}
                value={`question-${question.id}`}
                className="questions"
              >
                <AccordionTrigger className="text-base">
                  {question.question}
                </AccordionTrigger>
                <AccordionContent className="">
                  {question.response}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
