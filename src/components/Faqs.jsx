import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./Faqs.css";
import arrowRight from "../assets/arrow-right.png";
export const Faqs = ({ className }) => {
  return (
    <div className={`${className}`}>
      <div className="text-2xl mt-[75px] mb-[40px]">You Might Want to Know</div>
      <Accordion.Root
        className="AccordionRoot w-full"
        type="single"
        collapsible
      >
        <Accordion.Item
          className="AccordionItem border-b-[1px] border-gray"
          value="item-1"
        >
          <AccordionTrigger>Why should I trust this tool?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item
          className="AccordionItem border-b-[1px] border-gray"
          value="item-2"
        >
          <AccordionTrigger>
            What risks are related to investments?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It's unstyled by default, giving you freedom over the look and
            feel.
          </AccordionContent>
        </Accordion.Item>

        <Accordion.Item
          className="AccordionItem border-b-[1px] border-gray"
          value="item-3"
        >
          <AccordionTrigger>What is Auto-investment?</AccordionTrigger>
          <Accordion.Content className="AccordionContent">
            <div className="AccordionContentText">
              Yes! You can animate the Accordion with CSS or JavaScript.
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <img className="AccordionChevron" src={arrowRight} alt="" />
        {/* <ChevronDownIcon className="AccordionChevron" aria-hidden /> */}
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);
