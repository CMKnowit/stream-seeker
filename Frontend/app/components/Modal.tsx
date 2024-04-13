"use client";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ReactPlayer from "react-player";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVolumeHigh,
  faVolumeXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export default function Modal({
  isOpen,
  closeModal,
}: {
  isOpen: boolean;
  closeModal: () => void;
}) {
  const [muted, setMuted] = useState(true);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 h-full" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto h-full">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-[90%] h-full transform overflow-hidden rounded-2xl bg-black p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-white"
                >
                  Movie title
                </Dialog.Title>
                {/* <div className="mt-2">
                  <p className="text-sm text-gray-500">Text...</p>
                </div>

                <div className="mt-4">
                  <button type="button" onClick={closeModal}>
                    Close
                  </button>
                </div> */}
                <>
                  <button
                    onClick={closeModal}
                    className="modalButton absolute right-5 top-5 !z-40 h-9 w-9 border-none hover:bg-opacity-70 text-white"
                  >
                    {/* <XMarkIcon className="h-6 w-6 text-white" /> */}
                    <FontAwesomeIcon icon={faXmark} size="xl" />
                  </button>

                  <div className="relative pt-[40.25%]">
                    <ReactPlayer
                      url={`https://www.youtube.com/watch?v=N6HGuJC--rk`}
                      width="100%"
                      height="100%"
                      style={{ position: "absolute", top: "0", left: "0" }}
                      playing
                      muted={muted}
                    />
                    <div className="absolute bottom-10 flex w-full items-center px-10">
                      <div className="flex space-x-2">
                        <button
                          className="flex items-center gap-x-2 rounded bg-red-700 px-8 text-xl font-bold text-white transition hover:bg-red-800"
                          onClick={() => {
                            window.open(
                              "https://www.primevideo.com/",
                              "_blank"
                            );
                          }}
                        >
                          {/* <FaPlay className="h-7 w-7 text-white" /> */}
                          Go To Stream
                        </button>

                        <button className="modalButton">
                          {/* <PlusIcon className="h-7 w-7 text-white" /> */}
                        </button>

                        <button className="modalButton">
                          {/* <HandThumbUpIcon className="h-7 w-7 text-white" /> */}
                        </button>
                      </div>
                      <button
                        className="modalButton"
                        onClick={() => setMuted(!muted)}
                      >
                        <div className="h-6 w-6 text-white">
                          {muted ? (
                            <FontAwesomeIcon icon={faVolumeXmark} size="xl" />
                          ) : (
                            <FontAwesomeIcon icon={faVolumeHigh} size="xl" />
                          )}
                        </div>
                      </button>
                    </div>
                  </div>

                  <div className="flex space-x-16 rounded-b-md bg-black px-10 py-8 w-full">
                    <div className="space-y-6 text-lg text-white w-full">
                      <div className="flex items-center space-x-2 text-sm">
                        <p className="font-semibold text-green-400">3.5</p>
                        <p className="font-light">12 Apr 2024</p>
                        <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
                          HD
                        </div>
                      </div>

                      <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
                        <div className="flex flex-col space-y-3 text-sm w-1/2">
                          <div>
                            <span className="text-gray-400">
                              Where to stream:{" "}
                            </span>
                            Prime
                          </div>

                          <div>
                            <span className="text-gray-400">
                              Original language:{" "}
                            </span>
                            English
                          </div>

                          {/* <div>
                            <span className="text-gray-400">Total votes: </span>
                            12
                          </div> */}
                        </div>
                        <p className="w-1/2">Overview...</p>
                      </div>
                    </div>
                  </div>
                </>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
