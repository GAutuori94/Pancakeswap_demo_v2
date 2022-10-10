import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Toggle } from "./Toggle";
import { ToggleGeneric } from "./ToggleGeneric";

export default function SettingsModal({
  isDialogOpen,
  closeModal,
}: {
  isDialogOpen: boolean;
  closeModal: () => void;
}) {
  return (
    <Transition appear show={isDialogOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            id="background-overlay"
            className="fixed inset-0 bg-lightText99 dark:bg-darkText99 bg-opacity-25"
            onClick={closeModal}
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
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
              <Dialog.Panel className="w-full max-w-md items-center transform overflow-hidden rounded-[2rem] text-left align-middle shadow-xl transition-all bg-lightBackgroundAlt dark:bg-darkBackgroundAlt">
                <div className="lightGradientCardHeader  dark:darkGradientCardHeader py-3 px-6">
                  <Dialog.Title
                    as="div"
                    className=" flex justify-between items-center text-lg font-medium leading-6 text-lightText dark:text-darkText "
                  >
                    <div>
                      <h1 className="text-xl">Settings</h1>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="rounded-md border border-transparent px-4 py-2 text-sm "
                        onClick={closeModal}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          color="primary"
                          width="20px"
                          xmlns="http://www.w3.org/2000/svg"
                          className="sc-8a800401-0 wNVai"
                        >
                          <path
                            fill="currentColor"
                            d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </Dialog.Title>
                </div>

                <div className="mt-2 p-6 flex justify-between">
                  <h3 className="text-xl font-bold text-lightSecondary dark:text-darkSecondary">
                    GLOBAL
                  </h3>
                </div>
                <div className="mt-2 p-6 flex justify-between">
                  <p className="text-s  text-darkTertiary dark:text-darkSecondary">
                    Dark Mode
                  </p>
                  <p>
                    <Toggle />
                  </p>
                </div>
                <div className="mt-2 p-6 flex justify-between">
                  <p className="text-s  text-darkTertiary dark:text-darkSecondary">
                    SubGraph Health Indicator
                  </p>
                  <p>
                    <ToggleGeneric />
                  </p>
                </div>
                <div className="mt-2 p-6 flex justify-between">
                  <p className="text-s  text-darkTertiary dark:text-darkSecondary">
                    Default Transaction Speed (GWEI)
                  </p>
                </div>
                <div className="mt-2 p-6 flex justify-around">
                  <button className="connectWalletButton">Standard</button>
                  <button className="connectWalletButton">Fast</button>
                  <button className="connectWalletButton">Instant</button>
                </div>
                <div className="mt-4 flex items-center justify-between"></div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
