// @ts-nocheck
import React from "react"
// import { TabBarStyled, SplitBarStyled } from "./styled"

type TabBarProps = {
  handleSelectTab: any,
  tabSeleceted: any
}

type SplitBarProps = {
  handleSplit: any,
  split: any
}

export const TabBar: React.FC<TabBarProps> = React.memo(({handleSelectTab, tabSeleceted}) => {
  return (
    <div className="px-4">
      <div className="flex items-center text-sm rounded-md border text-gray-300 border-blueGray-800 bg-blueGray-800 ">
        <div>
          <button onClick={() => handleSelectTab("html")} className={`px-2 py-1 rounded-tl-md w-14 text-center rounded-bl-md ${tabSeleceted("html")}`}>HTML</button>
        </div>
        <div>
          <button onClick={() => handleSelectTab("scss")} className={`px-2 py-1 w-14 text-center ${tabSeleceted("scss")}`}>CSS</button>
        </div>
        <div>
          <button onClick={() => handleSelectTab("javascript")} className={`px-2 py-1 w-14 text-center rounded-tr-md rounded-br-md ${tabSeleceted("javascript")}`}>JS</button>
        </div>
      </div>
    </div>
  )
})

export const SplitBar: React.FC<SplitBarProps> = ({handleSplit, split}) => {
  const siSplit = (val) => split === val ? ({
    stroke: "rgba(86, 204, 242, var(--tw-text-opacity))",
    fill: "rgba(86, 204, 242, var(--tw-text-opacity))",
  }) : ({
    stroke: "rgba(71, 85, 105, var(--tw-bg-opacity))",
    fill: "rgba(71, 85, 105, var(--tw-bg-opacity))"
  })
  
  return (
    <div className="flex items-center">
      <div>
        <button onClick={() => handleSplit("vertical")} type="button" className="group align-middle rounded-md border border-transparent focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-700 dark:text-white">
          <span className="sr-only">Switch to vertical split layout</span>
          <svg width="28" height="28" viewBox="-5 -5 34 34" strokeWidth="1.5" {...siSplit("vertical")}>
            <rect x="2.75" y="4.75" width="18.5" height="14.5" rx="1.25" fill="none"></rect><path d="M2.75 6c0-.69.56-1.25 1.25-1.25h7.25v14.5H4c-.69 0-1.25-.56-1.25-1.25V6z"></path>
          </svg>
        </button>
      </div>
      <div>
        <button onClick={() => handleSplit("horizontal")} type="button" className="group align-middle rounded-md border border-transparent focus:outline-none dark:focus:bg-black dark:focus:border-gray-800 text-gray-400">
          <span className="sr-only">Switch to horizontal split layout</span>
          <svg width="28" height="28" viewBox="-5 -5 34 34" strokeWidth="1.5" {...siSplit("horizontal")}>
            <rect x="21.25" y="19.25" width="18.5" height="14.5" rx="1.25" transform="rotate(-180 21.25 19.25)" fill="none"></rect><path d="M21.25 11.25H2.75V6c0-.69.56-1.25 1.25-1.25h16c.69 0 1.25.56 1.25 1.25v5.25z"></path>
          </svg>
        </button>
      </div>
    </div>
  )
}