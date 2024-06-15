const Travel = ({fill = '#f1f1f1', ...props}) => {
    return (
        <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M5.94109 12.53L7.90109 14.86C8.20109 15.21 8.20109 15.79 7.90109 16.14L5.94109 18.47C5.67109 19.01 5.94109 19.67 6.52109 19.87L7.85109 20.31C8.17109 20.42 8.64109 20.31 8.88109 20.07L11.1611 17.8C11.3211 17.63 11.6411 17.5 11.8711 17.5L14.7211 17.5C15.1411 17.5 15.3411 17.81 15.1811 18.2L13.0611 23.11C12.7311 23.88 13.1411 24.51 13.9811 24.51L15.2711 24.51C15.9411 24.51 16.7111 24.01 16.9711 23.39L19.3811 17.8C19.4511 17.64 19.6611 17.5 19.8411 17.5L22.8411 17.5C23.7811 17.5 24.8911 16.81 25.3211 15.97C25.4711 15.67 25.4711 15.32 25.3211 15.02C24.8911 14.18 23.7711 13.49 22.8311 13.49L19.8311 13.49C19.6511 13.49 19.4411 13.35 19.3711 13.19L16.9611 7.60999C16.7111 6.98999 15.9411 6.48999 15.2711 6.48999L13.9811 6.48999C13.1411 6.48999 12.7311 7.11999 13.0611 7.88999L15.1811 12.8C15.3511 13.18 15.1411 13.5 14.7211 13.5L11.8711 13.5C11.6411 13.5 11.3211 13.37 11.1611 13.21L8.88109 10.94C8.64109 10.7 8.18109 10.59 7.85109 10.7L6.52109 11.14C5.94109 11.32 5.66109 11.98 5.94109 12.53Z" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export default Travel;