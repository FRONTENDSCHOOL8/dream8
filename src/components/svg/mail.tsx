export const Mail = ({ color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.02474 33.3332C6.10807 33.3332 5.32335 33.0068 4.67057 32.354C4.0178 31.7012 3.69141 30.9165 3.69141 29.9998V9.99984C3.69141 9.08317 4.0178 8.29845 4.67057 7.64567C5.32335 6.99289 6.10807 6.6665 7.02474 6.6665H33.6914C34.6081 6.6665 35.3928 6.99289 36.0456 7.64567C36.6983 8.29845 37.0247 9.08317 37.0247 9.99984V29.9998C37.0247 30.9165 36.6983 31.7012 36.0456 32.354C35.3928 33.0068 34.6081 33.3332 33.6914 33.3332H7.02474ZM20.3581 21.6665L7.02474 13.3332V29.9998H33.6914V13.3332L20.3581 21.6665ZM20.3581 18.3332L33.6914 9.99984H7.02474L20.3581 18.3332ZM7.02474 13.3332V9.99984V29.9998V13.3332Z"
        fill={`${color}`}
      />
    </svg>
  );
};