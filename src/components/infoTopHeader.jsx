import { NavLink } from "react-router"


const InfoTopHeader = () => {
    return (
        <section className="hidden lg:flex justify-center  items-center w-full">
            <div className="w-full flex max-w-[1450px] px-4 xl:px-44 justify-between items-center py-6">
                <img src="/syr 2.png" alt="Vite Logo" className="h-16 w-16  object-cover mr-2" />
                <div className="grid grid-cols-4 gap-8">
                    <div className="">
                        <div className="flex flex-col gap-y-2 justify-start items-start">

                            <div className="flex gap-2 justify-start items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    fill="none"
                                    viewBox="0 0 21 21"
                                >
                                    <path
                                        stroke="#FFB909"
                                        strokeLinecap="square"
                                        strokeWidth="1.667"
                                        d="M17.985 6.535a5 5 0 0 0-3.522-3.523m.707 4.283a2.08 2.08 0 0 0-1.467-1.468M18 18.833c-3.167 0-6.115-.929-8.59-2.53a15.9 15.9 0 0 1-4.713-4.714A15.75 15.75 0 0 1 2.167 3h5.648l.993 4.477-1.686 1.686a12.56 12.56 0 0 0 4.714 4.714l1.687-1.687 4.477.996z"
                                    ></path>
                                </svg>
                                <span className="font-bold text-sm">Call Support</span>
                            </div>
                            <span className="text-sm font-medium">+237 699 99 99 99</span>

                        </div>

                    </div>

                    <div className="">
                        <div className="flex flex-col gap-y-2 justify-start items-start">

                            <div className="flex gap-2 justify-start items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    fill="none"
                                    viewBox="0 0 21 21"
                                >
                                    <path
                                        fill="#FFB909"
                                        fillRule="evenodd"
                                        d="M2.167 3v11.667h6.682A5.5 5.5 0 0 1 8.98 13H3.832V5.5l5.834 5.04L15.5 5.5v3.478c.591.14 1.155.379 1.667.707V3zm11.875 1.667-4.375 3.75-4.375-3.75zM16.47 17.51l.174.965a7 7 0 0 1-2.214.357q-2.076 0-3.377-1.209-1.386-1.278-1.386-3.383 0-1.987 1.313-3.265 1.356-1.31 3.438-1.31 1.884 0 3.114 1.016.61.507.953 1.247a4 4 0 0 1 .348 1.685q0 1.46-.81 2.33-.726.778-1.637.778-.972 0-1.068-.884-.6.885-1.62.884-.822 0-1.302-.476-.522-.515-.522-1.41 0-.596.237-1.169t.657-.993q.798-.795 2.052-.796.948 0 1.77.307l-.402 2.607q-.06.382-.06.558 0 .432.366.432.48 0 .858-.583.462-.708.462-1.679 0-1.335-.9-2.08-.996-.82-2.472-.82-1.14 0-2.076.563a3.4 3.4 0 0 0-1.325 1.441 3.75 3.75 0 0 0-.354 1.642q0 1.71 1.187 2.713 1.044.883 2.652.883.918 0 1.944-.35m-1.134-4.674a2 2 0 0 0-.498-.088q-.342 0-.678.179-.336.178-.576.492a2.25 2.25 0 0 0-.492 1.416q0 .438.216.692t.588.254q.54 0 .894-.464.186-.238.294-.92z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <span className="font-bold text-sm">Email Support</span>
                            </div>
                            <span className="text-sm font-medium">syrafrica@gmail.com</span>

                        </div>

                    </div>
                    <div className="">
                        <div className="flex flex-col gap-y-2 justify-start items-start">

                            <div className="flex gap-2 justify-start items-start">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="19"
                                    fill="none"
                                    viewBox="0 0 18 19"
                                >
                                    <path
                                        fill="#FFB909"
                                        d="M9 .167a8.333 8.333 0 1 1 0 16.666A8.333 8.333 0 0 1 9 .167m0 1.667a6.667 6.667 0 1 0 0 13.333A6.667 6.667 0 0 0 9 1.834M9 3.5a.833.833 0 0 1 .827.736l.006.098v3.821l2.256 2.256a.833.833 0 0 1-1.1 1.248l-.078-.07-2.5-2.5a.83.83 0 0 1-.237-.48L8.166 8.5V4.334A.833.833 0 0 1 9 3.5"
                                    ></path>
                                </svg>
                                <span className="font-bold text-sm">Work Hour</span>
                            </div>
                            <span className="text-sm font-medium">24h/24 7j/7</span>

                        </div>

                    </div>

                    <div className="">
                        <div className="flex flex-col gap-y-2 justify-start items-start">

                            <div className="flex gap-2 justify-start items-start">

                                <span className="font-bold text-sm">Social networks</span>
                            </div>
                            <div className="w-full">
                                <div className="text-sm flex w-full  justify-between items-center font-medium">
                                    <NavLink to={"#"} className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="25"
                                            fill="none"
                                            viewBox="0 0 24 25"
                                        >
                                            <path
                                                fill="#09090B"
                                                d="M22 12.5c0-5.52-4.48-10-10-10S2 6.98 2 12.5c0 4.84 3.44 8.87 8 9.8v-6.8H8v-3h2V10c0-1.93 1.57-3.5 3.5-3.5H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                                            ></path>
                                        </svg>
                                    </NavLink>
                                    <NavLink to={"#"} className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="25"
                                            fill="none"
                                            viewBox="0 0 24 25"
                                        >
                                            <path
                                                fill="#09090B"
                                                d="M20.47 2.5H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14a1.45 1.45 0 0 0 1.47 1.43h16.94a1.45 1.45 0 0 0 1.47-1.43V3.93a1.45 1.45 0 0 0-1.47-1.43M8.09 19.24h-3v-9h3zM6.59 8.98a1.56 1.56 0 0 1 0-3.12 1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2a1.65 1.65 0 0 0-1.54 1.09 2 2 0 0 0-.1.73v5h-3v-9h3v1.27a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06z"
                                            ></path>
                                        </svg>
                                    </NavLink>

                                    <NavLink to={"#"} className="mr-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="25"
                                            fill="none"
                                            viewBox="0 0 24 25"
                                        >
                                            <path
                                                fill="#09090B"
                                                d="M19.05 5.41a9.82 9.82 0 0 0-7.01-2.91c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95l-1.4 5.14 5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"
                                            ></path>
                                        </svg>
                                    </NavLink>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default InfoTopHeader
