const Fingerprint = ({color, stroke, width, height}) => {
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke={color} transform="matrix(1, 0, 0, 1, 0, 0)">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier"> 
                <path d="M6.89258 17.7897C6.9083 17.7633 6.92441 17.7369 6.9409 17.7107C8.14358 15.7988 8.8398 13.5379 8.8398 11.1034C8.8398 9.14189 10.4299 7.55176 12.3915 7.55176C14.353 7.55176 15.9431 9.14189 15.9431 11.1034C15.9431 12.0065 15.8816 12.8957 15.7626 13.7672M13.8825 19.8437C14.4257 18.7596 14.871 17.6179 15.2069 16.4309M18.6156 17.4359C19.1883 15.4236 19.4949 13.2993 19.4949 11.1033C19.4949 7.18026 16.3147 4 12.3916 4C11.0978 4 9.88477 4.34591 8.83997 4.9503M4.40039 14.9783C4.96924 13.8073 5.28831 12.4926 5.28831 11.1033C5.28831 9.8095 5.63422 8.59646 6.2386 7.55166M12.3915 11.1035C12.3915 14.2265 11.4958 17.1403 9.94727 19.6019" stroke={color} stroke-width={stroke} stroke-linecap="round" stroke-linejoin="round"></path> 
            </g>
        </svg>
    )
}

export default Fingerprint