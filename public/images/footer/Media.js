const Media = ({ stroke = '#f1f1f1', ...props }) => {
    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M25.6328 18.5V12.5C25.6328 7.5 23.6328 5.5 18.6328 5.5H12.6328C7.63281 5.5 5.63281 7.5 5.63281 12.5V18.5C5.63281 23.5 7.63281 25.5 12.6328 25.5H18.6328C23.6328 25.5 25.6328 23.5 25.6328 18.5Z" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.15234 10.61H25.1123" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.1523 5.60999V10.47" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.1133 5.60999V10.02" stroke={stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M13.3828 17.95V16.75C13.3828 15.21 14.4728 14.58 15.8028 15.35L16.8428 15.95L17.8828 16.55C19.2128 17.32 19.2128 18.58 17.8828 19.35L16.8428 19.95L15.8028 20.55C14.4728 21.32 13.3828 20.69 13.3828 19.15V17.95V17.95Z" stroke={stroke} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export default Media;