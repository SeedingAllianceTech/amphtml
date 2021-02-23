/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as Preact from '../../../src/preact';

/**
 * @param {!JsonObject} props
 * @return {PreactDef.Renderable}
 */
export function SocialShareIcon(props) {
  switch (props['type']) {
    case 'FACEBOOK':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill="currentColor"
            d="M44 22.134C44 9.90843 34.1516 0 22 0C9.84844 0 0 9.90843 0 22.134C0 33.1837 8.04375 42.34 18.5625 44V28.5321H12.9766V22.134H18.5625V17.2576C18.5625 11.7111 21.8453 8.6461 26.8727 8.6461C29.2789 8.6461 31.7969 9.0784 31.7969 9.0784V14.5254H29.0211C26.2883 14.5254 25.4375 16.2331 25.4375 17.9839V22.134H31.5391L30.5637 28.5321H25.4375V44C35.9562 42.34 44 33.1837 44 22.134Z"
          />
        </svg>
      );
    case 'PINTEREST':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill="currentColor"
            d="M22.0181 0C9.8583 0 0 9.8421 0 21.9819C0 31.2993 5.799 39.2599 13.9901 42.4622C13.7907 40.7253 13.6276 38.0477 14.0626 36.148C14.4613 34.4293 16.6359 25.2204 16.6359 25.2204C16.6359 25.2204 15.9835 23.8997 15.9835 21.9638C15.9835 18.9062 17.7594 16.6266 19.9703 16.6266C21.855 16.6266 22.7611 18.0378 22.7611 19.7204C22.7611 21.602 21.565 24.4243 20.9308 27.0477C20.4052 29.2368 22.0362 31.028 24.1927 31.028C28.107 31.028 31.1153 26.903 31.1153 20.9688C31.1153 15.7039 27.3278 12.0312 21.9093 12.0312C15.6392 12.0313 11.9604 16.7171 11.9604 21.5658C11.9604 23.4474 12.6853 25.4737 13.5914 26.5773C13.7726 26.7944 13.7907 26.9934 13.7364 27.2105C13.5733 27.898 13.1927 29.3997 13.1202 29.7072C13.0296 30.1053 12.794 30.1957 12.3772 29.9967C9.62271 28.7122 7.90114 24.7138 7.90114 21.4753C7.90114 14.5461 12.939 8.17763 22.453 8.17763C30.0823 8.17763 36.0263 13.6053 36.0263 20.8783C36.0263 28.4589 31.2421 34.5559 24.6095 34.5559C22.3805 34.5559 20.2784 33.398 19.5716 32.023C19.5716 32.023 18.4662 36.2204 18.1944 37.2516C17.7051 39.1694 16.364 41.5576 15.458 43.023C17.5238 43.6562 19.6985 44 21.9818 44C34.1416 44 43.9999 34.1579 43.9999 22.0181C44.0361 9.8421 34.1778 0 22.0181 0Z"
          />
        </svg>
      );
    case 'LINKEDIN':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill="currentColor"
            d="M15.1765 33H10.4706V15.7044H15.1765V33ZM12.8235 13.6604C11.2549 13.6604 10 12.4025 10 10.8302C10 9.25786 11.2549 8 12.8235 8C14.3922 8 15.4902 9.41509 15.4902 10.9874C15.4902 12.5597 14.3922 13.6604 12.8235 13.6604ZM34 33H29.2941V24.195C29.2941 18.8491 23.0196 19.3208 23.0196 24.195V33H18.3137V15.7044H23.0196V18.5346C25.2157 14.4465 34 14.1321 34 22.4654V33Z"
          />
        </svg>
      );
    case 'EMAIL':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill="currentColor"
            d="M31.6 12H12.4C11.08 12 10 13.08 10 14.4V28.8C10 30.12 11.08 31.2 12.4 31.2H31.6C32.92 31.2 34 30.12 34 28.8V14.4C34 13.08 32.92 12 31.6 12ZM30.64 14.4L22 20.16L13.36 14.4H30.64ZM12.4 28.8V16.644L22 23.04L31.6 16.644V28.8H12.4Z"
          />
        </svg>
      );
    case 'TWITTER':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill="currentColor"
            d="M16.974 32.605C26.731 32.605 32.066 24.52 32.066 17.513C32.066 17.282 32.066 17.051 32.055 16.831C33.089 16.083 33.991 15.148 34.706 14.081C33.76 14.499 32.737 14.785 31.659 14.917C32.759 14.257 33.595 13.223 33.991 11.98C32.968 12.585 31.835 13.025 30.625 13.267C29.657 12.233 28.282 11.595 26.753 11.595C23.827 11.595 21.451 13.971 21.451 16.897C21.451 17.315 21.495 17.722 21.594 18.107C17.183 17.887 13.278 15.775 10.66 12.563C10.209 13.344 9.945 14.257 9.945 15.225C9.945 17.062 10.88 18.69 12.31 19.636C11.441 19.614 10.627 19.372 9.912 18.976C9.912 18.998 9.912 19.02 9.912 19.042C9.912 21.616 11.738 23.75 14.169 24.245C13.729 24.366 13.256 24.432 12.772 24.432C12.431 24.432 12.101 24.399 11.771 24.333C12.442 26.445 14.4 27.974 16.721 28.018C14.906 29.437 12.618 30.284 10.132 30.284C9.703 30.284 9.285 30.262 8.867 30.207C11.188 31.725 13.982 32.605 16.974 32.605Z"
          />
        </svg>
      );
    case 'TUMBLR':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill="currentColor"
            d="M23.7527 26.9388C23.7527 28.9311 24.7623 29.6046 26.3327 29.6046H28.6042V34.6556H24.3136C20.4716 34.6556 17.5832 32.6632 17.5832 27.9209V20.3163H14.0778V16.2194C17.9477 15.2092 19.5462 11.8979 19.7425 9.00763H23.7527V15.5459H28.4079V20.3163H23.7527V26.9388Z"
          />
        </svg>
      );
    case 'WHATSAPP':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M31.9103 12.0713C29.284 9.44357 25.7823 8 22.0535 8C14.3752 8 8.12029 14.2267 8.1136 21.8703C8.1136 24.3184 8.75513 26.6999 9.97136 28.8087L8 36L15.3909 34.0708C17.4291 35.1751 19.7212 35.7605 22.0535 35.7605H22.0601C29.7384 35.7605 35.9933 29.5339 36 21.8836C35.9933 18.1782 34.5432 14.6923 31.9103 12.0713ZM22.0535 33.4122C19.9685 33.4122 17.9303 32.8534 16.1527 31.8023L15.7317 31.5495L11.348 32.6938L12.5174 28.4362L12.2434 27.9972C11.0807 26.1611 10.4726 24.039 10.4726 21.8636C10.4726 15.5172 15.6716 10.3416 22.0601 10.3416C25.1542 10.3416 28.0611 11.5457 30.253 13.7211C32.4382 15.9031 33.6411 18.7969 33.6411 21.8769C33.6344 28.2433 28.4353 33.4122 22.0535 33.4122ZM28.4086 24.7774C28.0611 24.6044 26.3504 23.7662 26.0296 23.6465C25.7088 23.5334 25.4749 23.4735 25.2477 23.8194C25.0138 24.1654 24.3456 24.9503 24.1451 25.1765C23.9446 25.4094 23.7375 25.436 23.39 25.263C23.0425 25.09 21.9198 24.7242 20.59 23.54C19.5542 22.622 18.8592 21.4844 18.652 21.1385C18.4516 20.7926 18.632 20.6063 18.8057 20.4334C18.9594 20.2804 19.1532 20.0276 19.327 19.828C19.5007 19.6284 19.5609 19.4821 19.6745 19.2492C19.7881 19.0164 19.7346 18.8168 19.6477 18.6439C19.5609 18.4709 18.8659 16.7612 18.5718 16.0694C18.2912 15.3908 18.0038 15.484 17.79 15.4773C17.5895 15.464 17.3556 15.464 17.1217 15.464C16.8878 15.464 16.5136 15.5505 16.1928 15.8964C15.8721 16.2423 14.9766 17.0805 14.9766 18.7902C14.9766 20.4999 16.2263 22.143 16.4 22.3759C16.5737 22.6087 18.8525 26.1079 22.3475 27.6113C23.1761 27.9705 23.8243 28.1834 24.3322 28.3431C25.1675 28.6092 25.9227 28.5693 26.5241 28.4828C27.1924 28.383 28.5823 27.6446 28.8764 26.833C29.1637 26.0214 29.1637 25.3295 29.0768 25.1832C28.99 25.0368 28.7561 24.9503 28.4086 24.7774Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'LINE':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.0233 7C30.86 7 38.0467 12.83 38.0467 20.0167C38.0467 22.8767 36.9467 25.48 34.5633 28.0467C31.2267 31.9333 23.71 36.6267 21.9867 37.36C20.3059 38.0395 20.5085 36.9401 20.5876 36.5112C20.5896 36.5004 20.5915 36.49 20.5933 36.48C20.63 36.26 20.8133 35.1233 20.8133 35.1233C20.8867 34.6833 20.9233 34.06 20.7767 33.6567C20.63 33.18 19.8967 32.96 19.3833 32.85C11.6833 31.8233 6 26.4333 6 20.0167C6 12.83 13.1867 7 22.0233 7ZM32.5967 18.3333C32.78 18.3333 32.89 18.1867 32.89 18.0033V16.8667C32.89 16.6833 32.7433 16.5367 32.5967 16.5367H28.1233C28.05 16.5367 27.9767 16.5733 27.9033 16.61C27.8667 16.6833 27.83 16.7567 27.83 16.83V23.7967C27.83 23.87 27.8667 23.9433 27.9033 24.0167C27.9767 24.0533 28.05 24.09 28.1233 24.09H32.5967C32.78 24.09 32.89 23.9433 32.89 23.76V22.6233C32.89 22.44 32.7433 22.2933 32.5967 22.2933H29.5533V21.2667H32.5967C32.78 21.2667 32.89 21.12 32.89 20.9367V19.8C32.89 19.6167 32.7433 19.47 32.5967 19.47H29.5533V18.3333H32.5967ZM12.9067 22.44H15.95C16.1333 22.44 16.28 22.5867 16.17 22.6967V23.8333C16.17 24.0167 16.06 24.1633 15.8767 24.1633H11.4033C11.33 24.1633 11.2567 24.1267 11.1834 24.09L11.1833 24.09C11.1467 24.0167 11.11 23.9433 11.11 23.87V16.9033C11.11 16.72 11.2567 16.5733 11.44 16.5733H12.5767C12.76 16.5733 12.9067 16.72 12.9067 16.9033V22.44ZM18.6633 16.61H17.5267C17.3433 16.61 17.1967 16.7567 17.1967 16.9033V23.87C17.1967 24.0533 17.3433 24.1633 17.5267 24.1633H18.6633C18.8467 24.1633 18.9933 24.0166 18.9933 23.87V16.9033C18.9933 16.7567 18.8467 16.61 18.6633 16.61ZM26.4 16.61H25.3C25.1167 16.61 24.97 16.7567 24.97 16.9033V21.0467L21.78 16.72C21.78 16.72 21.78 16.6833 21.7433 16.6833L21.7067 16.6467H21.67H20.5333C20.35 16.6467 20.2033 16.7933 20.2033 16.94V23.9067C20.2033 24.09 20.35 24.2 20.5333 24.2H21.67C21.8533 24.2 22 24.0533 22 23.9067V19.7633L25.19 24.09C25.204 24.104 25.2127 24.118 25.2201 24.13C25.232 24.1493 25.2407 24.1633 25.2633 24.1633H25.3H25.3367H25.41H26.4C26.5833 24.1633 26.73 24.0167 26.73 23.87V16.9033C26.73 16.7567 26.5833 16.61 26.4 16.61Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'SMS':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill="currentColor"
            d="M30.8 12H13.2C11.99 12 11 12.99 11 14.2V34L15.4 29.6H30.8C32.01 29.6 33 28.61 33 27.4V14.2C33 12.99 32.01 12 30.8 12ZM30.8 27.4H13.2V14.2H30.8V27.4Z"
          />
        </svg>
      );
    case 'SYSTEM':
      return (
        <svg {...props} viewBox="0 0 44 44">
          <path
            fill="currentColor"
            d="M27.6667 26.5556C26.7889 26.5556 26 26.9 25.4111 27.4556L17.5667 22.8889C17.6222 22.6333 17.6667 22.3778 17.6667 22.1111C17.6667 21.8444 17.6222 21.5889 17.5667 21.3333L25.4 16.7667C25.9889 17.3222 26.7889 17.6667 27.6667 17.6667C29.5111 17.6667 31 16.1778 31 14.3333C31 12.4889 29.5111 11 27.6667 11C25.8222 11 24.3333 12.4889 24.3333 14.3333C24.3333 14.6 24.3778 14.8667 24.4333 15.1111L16.6 19.6778C16 19.1222 15.2111 18.7778 14.3333 18.7778C12.4889 18.7778 11 20.2667 11 22.1111C11 23.9556 12.4889 25.4444 14.3333 25.4444C15.2111 25.4444 16 25.1 16.6 24.5444L24.4333 29.1222C24.3778 29.3667 24.3333 29.6222 24.3333 29.8889C24.3333 31.7333 25.8222 33.2222 27.6667 33.2222C29.5111 33.2222 31 31.7333 31 29.8889C31 28.0444 29.5111 26.5556 27.6667 26.5556ZM27.6667 13.2222C28.2778 13.2222 28.7778 13.7222 28.7778 14.3333C28.7778 14.9444 28.2778 15.4444 27.6667 15.4444C27.0556 15.4444 26.5556 14.9444 26.5556 14.3333C26.5556 13.7222 27.0556 13.2222 27.6667 13.2222ZM14.3333 23.2222C13.7222 23.2222 13.2222 22.7222 13.2222 22.1111C13.2222 21.5 13.7222 21 14.3333 21C14.9444 21 15.4444 21.5 15.4444 22.1111C15.4444 22.7222 14.9444 23.2222 14.3333 23.2222ZM27.6667 31C27.0556 31 26.5556 30.5 26.5556 29.8889C26.5556 29.2778 27.0556 28.7778 27.6667 28.7778C28.2778 28.7778 28.7778 29.2778 28.7778 29.8889C28.7778 30.5 28.2778 31 27.6667 31Z"
          />
        </svg>
      );
    default:
      return <svg {...props}></svg>;
  }
}
