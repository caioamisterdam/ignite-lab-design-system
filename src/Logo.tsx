import { SVGAttributes } from "react";

interface LogoProps extends React.SVGAttributes <HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={135}
      height={120}
      viewBox="0 0 135 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M134.749 60.014c0-8.927-11.178-17.386-28.317-22.633 3.955-17.468 2.197-31.366-5.549-35.815C99.098.522 97.011.027 94.731.027v6.125c1.264 0 2.28.248 3.131.715 3.736 2.142 5.356 10.3 4.093 20.791-.302 2.582-.797 5.301-1.401 8.076-5.383-1.319-11.261-2.335-17.441-2.994-3.708-5.082-7.553-9.696-11.426-13.733C80.64 10.684 89.046 6.125 94.759 6.125V0c-7.554 0-17.442 5.383-27.44 14.722C57.323 5.438 47.435.11 39.882.11v6.125c5.685 0 14.118 4.532 23.072 12.8A129.715 129.715 0 0051.609 32.74c-6.207.659-12.085 1.675-17.468 3.021a82.867 82.867 0 01-1.429-7.965c-1.29-10.492.302-18.65 4.01-20.82.824-.494 1.895-.714 3.159-.714V.137c-2.307 0-4.395.495-6.207 1.538-7.718 4.45-9.449 18.32-5.466 35.734C11.124 42.682 0 51.115 0 60.014 0 68.94 11.179 77.4 28.318 82.646c-3.955 17.468-2.198 31.366 5.548 35.816 1.785 1.044 3.873 1.538 6.18 1.538 7.553 0 17.44-5.383 27.438-14.722 9.998 9.284 19.886 14.612 27.44 14.612 2.306 0 4.394-.494 6.207-1.538 7.718-4.45 9.448-18.32 5.465-35.734 17.03-5.246 28.153-13.705 28.153-22.604zm-35.76-18.32c-1.017 3.543-2.28 7.196-3.709 10.849a129.983 129.983 0 00-3.598-6.592c-1.263-2.197-2.609-4.34-3.955-6.427 3.9.577 7.663 1.29 11.261 2.17zm-12.58 29.251c-2.143 3.708-4.34 7.224-6.62 10.492-4.092.358-8.24.55-12.414.55-4.148 0-8.295-.192-12.36-.522a151.417 151.417 0 01-6.647-10.437 143.054 143.054 0 01-5.713-10.932c1.703-3.68 3.626-7.36 5.686-10.959 2.142-3.708 4.34-7.224 6.619-10.492a142.9 142.9 0 0112.415-.55c4.147 0 8.294.193 12.36.523a151.38 151.38 0 016.646 10.437 143.055 143.055 0 015.713 10.931c-1.73 3.68-3.625 7.361-5.685 10.96zm8.871-3.57c1.483 3.68 2.747 7.36 3.79 10.931-3.597.88-7.388 1.62-11.315 2.198 1.346-2.115 2.691-4.285 3.955-6.51a156.047 156.047 0 003.57-6.62zM67.43 96.68c-2.555-2.637-5.11-5.575-7.636-8.789 2.472.11 4.999.192 7.553.192 2.582 0 5.136-.055 7.636-.192a107.21 107.21 0 01-7.553 8.79zM46.995 80.504c-3.9-.577-7.663-1.291-11.261-2.17 1.016-3.543 2.28-7.196 3.707-10.85a129.98 129.98 0 003.599 6.592c1.29 2.198 2.609 4.34 3.955 6.428zm20.297-57.158c2.555 2.637 5.109 5.576 7.636 8.79-2.472-.11-4.999-.193-7.553-.193-2.582 0-5.136.055-7.636.192a107.193 107.193 0 017.553-8.789zM46.967 39.524c-1.346 2.115-2.691 4.285-3.955 6.51a155.194 155.194 0 00-3.57 6.591 117.691 117.691 0 01-3.79-10.931 133.414 133.414 0 0111.315-2.17zM22.11 73.912c-9.723-4.148-16.012-9.586-16.012-13.898 0-4.313 6.29-9.778 16.012-13.898 2.362-1.016 4.944-1.923 7.608-2.774 1.566 5.383 3.626 10.986 6.18 16.727-2.527 5.713-4.559 11.288-6.097 16.644-2.72-.851-5.301-1.785-7.69-2.801zm14.777 39.249c-3.735-2.142-5.356-10.3-4.092-20.792.302-2.582.796-5.301 1.4-8.075 5.384 1.318 11.262 2.335 17.441 2.994 3.708 5.08 7.554 9.695 11.426 13.733-8.953 8.322-17.358 12.881-23.071 12.881-1.236-.027-2.28-.274-3.104-.741zm65.15-20.93c1.291 10.493-.302 18.65-4.01 20.82-.824.494-1.895.714-3.159.714-5.685 0-14.117-4.532-23.071-12.799A129.739 129.739 0 0083.14 87.26c6.208-.659 12.085-1.675 17.469-3.021.632 2.774 1.126 5.438 1.428 7.993zm10.575-18.32c-2.363 1.017-4.944 1.923-7.609 2.775-1.565-5.384-3.625-10.987-6.18-16.727 2.527-5.713 4.56-11.289 6.098-16.645a87.127 87.127 0 017.718 2.802c9.723 4.147 16.013 9.586 16.013 13.898-.028 4.312-6.317 9.778-16.04 13.898z"
        fill="#81D8F7"
      />
      <path
        d="M67.552 72.566c6.932 0 12.552-5.62 12.552-12.552 0-6.933-5.62-12.552-12.552-12.552C60.62 47.462 55 53.082 55 60.014c0 6.932 5.62 12.552 12.552 12.552z"
        fill="#81D8F7"
      />
    </svg>
  )
}

