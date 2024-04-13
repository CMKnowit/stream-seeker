"use client";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

export default function Card({ item }: { item: any }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div
        className="inline-block relative flex-shrink-0 h-60 w-40 cursor-pointer transition duration-200 ease-out hover:scale-110"
        onClick={openModal}
      >
        <Image src={`/${item.image}`} className="" fill alt="" />
        <Modal isOpen={isOpen} closeModal={closeModal} />
      </div>
    </>
  );
}
