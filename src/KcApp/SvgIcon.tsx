import { useMemo } from "react";

const lockSvg = (
  <svg
    width="16"
    height="21"
    viewBox="0 0 16 21"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.5 20.1667C1.99583 20.1667 1.56439 19.9873 1.20567 19.6286C0.846333 19.2692 0.666667 18.8375 0.666667 18.3333V9.16667C0.666667 8.6625 0.846333 8.23075 1.20567 7.87142C1.56439 7.51269 1.99583 7.33333 2.5 7.33333H3.41667V5.5C3.41667 4.23194 3.86369 3.15089 4.75775 2.25683C5.65119 1.36339 6.73194 0.916667 8 0.916667C9.26806 0.916667 10.3491 1.36339 11.2432 2.25683C12.1366 3.15089 12.5833 4.23194 12.5833 5.5V7.33333H13.5C14.0042 7.33333 14.4359 7.51269 14.7953 7.87142C15.154 8.23075 15.3333 8.6625 15.3333 9.16667V18.3333C15.3333 18.8375 15.154 19.2692 14.7953 19.6286C14.4359 19.9873 14.0042 20.1667 13.5 20.1667H2.5ZM8 15.5833C8.50417 15.5833 8.93592 15.404 9.29525 15.0453C9.65397 14.6859 9.83333 14.2542 9.83333 13.75C9.83333 13.2458 9.65397 12.8141 9.29525 12.4547C8.93592 12.096 8.50417 11.9167 8 11.9167C7.49583 11.9167 7.06439 12.096 6.70567 12.4547C6.34633 12.8141 6.16667 13.2458 6.16667 13.75C6.16667 14.2542 6.34633 14.6859 6.70567 15.0453C7.06439 15.404 7.49583 15.5833 8 15.5833ZM5.25 7.33333H10.75V5.5C10.75 4.73611 10.4826 4.08681 9.94792 3.55208C9.41319 3.01736 8.76389 2.75 8 2.75C7.23611 2.75 6.58681 3.01736 6.05208 3.55208C5.51736 4.08681 5.25 4.73611 5.25 5.5V7.33333Z" />
  </svg>
);

const profileSvg = (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 8C6.99167 8 6.12847 7.64097 5.41042 6.92291C4.69236 6.20486 4.33333 5.34166 4.33333 4.33333C4.33333 3.325 4.69236 2.4618 5.41042 1.74375C6.12847 1.02569 6.99167 0.666664 8 0.666664C9.00833 0.666664 9.87153 1.02569 10.5896 1.74375C11.3076 2.4618 11.6667 3.325 11.6667 4.33333C11.6667 5.34166 11.3076 6.20486 10.5896 6.92291C9.87153 7.64097 9.00833 8 8 8ZM2.5 15.3333C1.99583 15.3333 1.56439 15.154 1.20567 14.7952C0.846333 14.4359 0.666667 14.0042 0.666667 13.5V12.7667C0.666667 12.2472 0.8005 11.7696 1.06817 11.3339C1.33522 10.8988 1.69028 10.5667 2.13333 10.3375C3.08056 9.86389 4.04306 9.50853 5.02083 9.27141C5.99861 9.03491 6.99167 8.91666 8 8.91666C9.00833 8.91666 10.0014 9.03491 10.9792 9.27141C11.9569 9.50853 12.9194 9.86389 13.8667 10.3375C14.3097 10.5667 14.6648 10.8988 14.9318 11.3339C15.1995 11.7696 15.3333 12.2472 15.3333 12.7667V13.5C15.3333 14.0042 15.154 14.4359 14.7953 14.7952C14.4359 15.154 14.0042 15.3333 13.5 15.3333H2.5Z" />
  </svg>
);

const logoSvg = (
  <svg
    width="276"
    height="71"
    viewBox="0 0 276 71"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.1353 35.6422V35.5014C13.1353 22.7942 23.1668 12.3596 37.0392 12.3596C50.9116 12.3596 60.7991 22.6535 60.7991 35.3578V35.4986C60.7991 48.2058 50.7676 58.6404 36.8952 58.6404C23.0228 58.6404 13.1353 48.3494 13.1353 35.6422ZM50.4855 35.6422V35.5014C50.4855 27.8363 44.8651 21.4468 36.8981 21.4468C28.9311 21.4468 23.4518 27.6927 23.4518 35.3607V35.5014C23.4518 43.1666 29.0722 49.5561 37.0392 49.5561C45.0062 49.5561 50.4855 43.3102 50.4855 35.6422Z" />
    <path d="M69.5493 13.141H79.4367V32.6601L97.6482 13.1381H109.528L91.2447 32.0912L110.311 57.859H98.4314L84.631 38.8341L79.4367 44.2296V57.9308H69.5493V13.141Z" />
    <path d="M116.289 13.141H134.572C145.243 13.141 151.718 19.4587 151.718 28.6149V28.7557C151.718 39.1185 143.679 44.4422 133.579 44.4422H126.11V57.859H116.223V13.141H116.294H116.289ZM134.002 35.714C138.911 35.714 141.828 32.8037 141.828 28.9711V28.8304C141.828 24.429 138.77 22.0875 133.861 22.0875H126.248V35.7887L134.002 35.7169V35.714Z" />
    <path d="M179.178 48.2058H157.267L155.7 41.2503L180.315 12.7848H188.639V40.1844H194.686V48.2058H188.639V57.859H179.25V48.2058H179.178ZM179.178 40.2562V26.3424L167.298 40.2562H179.178Z" />
    <path d="M30.2815 49.1998L14.2035 65.1707L7.23279 58.2152L59.7309 5.82928L66.7016 12.7848L43.722 35.714L30.2757 49.1998H30.2815Z" />
    <path d="M211.786 12.7848H232.759C237.921 12.7848 241.987 14.2011 244.57 16.7782C246.634 18.8381 247.668 21.3491 247.668 24.4405V24.5697C247.668 29.6578 244.958 32.4906 241.731 34.2919C246.957 36.2886 250.184 39.3139 250.184 45.3673V45.4965C250.184 53.7391 243.473 57.859 233.277 57.859H211.786V12.7848ZM237.795 26.1154C237.795 23.1534 235.471 21.4784 231.276 21.4784H221.466V31.0081H230.631C235.019 31.0081 237.795 29.5917 237.795 26.2418V26.1125V26.1154ZM232.955 39.2507H221.466V49.1682H233.277C237.665 49.1682 240.311 47.6225 240.311 44.2755V44.1462C240.311 41.121 238.054 39.2536 232.955 39.2536V39.2507Z" />
    <path d="M258.831 12.7848H268.77V57.8618H258.831V12.7848Z" />
  </svg>
);

type SvgIconProps = {
  type: string;
};

export const SvgIcon = ({ type }: SvgIconProps) => {
  const renderIcon = useMemo(() => {
    switch (type) {
      case "lock":
        return lockSvg;
      case "profile":
        return profileSvg;
      default:
        return logoSvg;
    }
  }, [type]);

  return renderIcon;
};