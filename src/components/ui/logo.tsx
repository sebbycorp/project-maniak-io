import { useTheme } from 'next-themes';
import React from 'react';

type LogoProps = {
  variant?: 'dark' | 'light';
};

export function Logo({ variant = 'dark' }: LogoProps) {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const fillColor = variant === 'dark' && theme !== 'dark' ? '#000' : '#fff';

  if (!mounted) {
    return null;
  }

  return (
    <svg
      className="max-w-full"
      width="191"
      height="40"
      viewBox="0 0 191 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="40" rx="10" fill="#2463EB" />
      <path
        d="M25.6953 23.9043V21.8085L31.2937 19.4606V20.1855L25.6953 17.8376V15.7261L33.0003 18.8146V20.8315L25.6953 23.9043Z"
        fill="white"
      />
      <path d="M16.2227 26L21.518 13H23.7988L18.5035 26H16.2227Z" fill="white" />
      <path
        d="M14.3209 23.9043L7 20.8315V18.8146L14.3209 15.7261V17.8376L8.70662 20.1855V19.4606L14.3209 21.8085V23.9043Z"
        fill="white"
      />
      <path
        d="M48.8438 13.9043H52.2627L55.8662 22.7021H56.0156L59.6279 13.9043H63.0557V27H60.3486V18.4746H60.2432L56.8418 26.9385H55.0137L51.6387 18.457H51.5332V27H48.8438V13.9043ZM67.5029 27.1846C66.8818 27.1846 66.3223 27.0762 65.8242 26.8594C65.332 26.6367 64.9453 26.3086 64.6641 25.875C64.3828 25.4414 64.2422 24.9023 64.2422 24.2578C64.2422 23.707 64.3418 23.25 64.541 22.8867C64.7402 22.5176 65.0127 22.2188 65.3584 21.9902C65.7041 21.7617 66.0967 21.5889 66.5361 21.4717C66.9756 21.3545 67.4414 21.2725 67.9336 21.2256C68.502 21.1729 68.959 21.1201 69.3047 21.0674C69.6504 21.0146 69.9023 20.9355 70.0605 20.8301C70.2246 20.7188 70.3066 20.5605 70.3066 20.3555V20.3115C70.3066 19.9072 70.1777 19.5938 69.9199 19.3711C69.668 19.1484 69.3105 19.0371 68.8477 19.0371C68.3613 19.0371 67.9717 19.1455 67.6787 19.3623C67.3916 19.5732 67.2012 19.8428 67.1074 20.1709L64.585 19.9688C64.7139 19.3711 64.9658 18.8555 65.3408 18.4219C65.7158 17.9824 66.1992 17.6455 66.791 17.4111C67.3887 17.1709 68.0801 17.0508 68.8652 17.0508C69.4102 17.0508 69.9316 17.1152 70.4297 17.2441C70.9277 17.373 71.3701 17.5723 71.7568 17.8418C72.1494 18.1055 72.46 18.4482 72.6885 18.8701C72.917 19.292 73.0312 19.793 73.0312 20.373V27H70.4385V25.6289H70.3682C70.21 25.9395 69.999 26.2119 69.7354 26.4463C69.4717 26.6748 69.1553 26.8564 68.7861 26.9912C68.417 27.1201 67.9893 27.1846 67.5029 27.1846ZM68.2852 25.3037C68.6836 25.3037 69.0352 25.2246 69.3398 25.0664C69.6504 24.9023 69.8906 24.6855 70.0605 24.416C70.2363 24.1406 70.3242 23.833 70.3242 23.4932V22.4473C70.2422 22.5 70.125 22.5498 69.9727 22.5967C69.8262 22.6436 69.6621 22.6846 69.4805 22.7197C69.2988 22.7549 69.1172 22.7871 68.9355 22.8164C68.7539 22.8398 68.5898 22.8633 68.4434 22.8867C68.1211 22.9336 67.8398 23.0098 67.5996 23.1152C67.3594 23.2148 67.1719 23.3525 67.0371 23.5283C66.9082 23.6982 66.8438 23.9121 66.8438 24.1699C66.8438 24.5391 66.9785 24.8203 67.248 25.0137C67.5176 25.207 67.8633 25.3037 68.2852 25.3037ZM77.3379 21.3223V27H74.6221V17.1738H77.2939V18.9229H77.3906C77.6133 18.3428 77.9678 17.8857 78.4541 17.5518C78.9404 17.2178 79.5498 17.0508 80.2822 17.0508C80.9619 17.0508 81.5537 17.2002 82.0576 17.499C82.5674 17.7979 82.9629 18.2227 83.2441 18.7734C83.5254 19.3242 83.666 19.9834 83.666 20.751V27H80.9502V21.2344C80.9502 20.6367 80.7949 20.168 80.4844 19.8281C80.1738 19.4824 79.7461 19.3096 79.2012 19.3096C78.8379 19.3096 78.5156 19.3916 78.2344 19.5557C77.9531 19.7139 77.7334 19.9424 77.5752 20.2412C77.417 20.54 77.3379 20.9004 77.3379 21.3223ZM85.2744 27V17.1738H87.9902V27H85.2744ZM86.6279 15.917C86.2236 15.917 85.8779 15.7822 85.5908 15.5127C85.3037 15.2432 85.1602 14.918 85.1602 14.5371C85.1602 14.1562 85.3037 13.834 85.5908 13.5703C85.8779 13.3008 86.2236 13.166 86.6279 13.166C87.0381 13.166 87.3867 13.3008 87.6738 13.5703C87.9609 13.834 88.1045 14.1562 88.1045 14.5371C88.1045 14.918 87.9609 15.2432 87.6738 15.5127C87.3867 15.7822 87.0381 15.917 86.6279 15.917ZM92.3936 27.1846C91.7725 27.1846 91.2129 27.0762 90.7148 26.8594C90.2227 26.6367 89.8359 26.3086 89.5547 25.875C89.2734 25.4414 89.1328 24.9023 89.1328 24.2578C89.1328 23.707 89.2324 23.25 89.4316 22.8867C89.6309 22.5176 89.9033 22.2188 90.249 21.9902C90.5947 21.7617 90.9873 21.5889 91.4268 21.4717C91.8662 21.3545 92.332 21.2725 92.8242 21.2256C93.3926 21.1729 93.8496 21.1201 94.1953 21.0674C94.541 21.0146 94.793 20.9355 94.9512 20.8301C95.1152 20.7188 95.1973 20.5605 95.1973 20.3555V20.3115C95.1973 19.9072 95.0684 19.5938 94.8105 19.3711C94.5586 19.1484 94.2012 19.0371 93.7383 19.0371C93.252 19.0371 92.8623 19.1455 92.5693 19.3623C92.2822 19.5732 92.0918 19.8428 91.998 20.1709L89.4756 19.9688C89.6045 19.3711 89.8564 18.8555 90.2314 18.4219C90.6064 17.9824 91.0898 17.6455 91.6816 17.4111C92.2793 17.1709 92.9707 17.0508 93.7559 17.0508C94.3008 17.0508 94.8223 17.1152 95.3203 17.2441C95.8184 17.373 96.2607 17.5723 96.6475 17.8418C97.04 18.1055 97.3506 18.4482 97.5791 18.8701C97.8076 19.292 97.9219 19.793 97.9219 20.373V27H95.3291V25.6289H95.2588C95.1006 25.9395 94.8896 26.2119 94.626 26.4463C94.3623 26.6748 94.0459 26.8564 93.6768 26.9912C93.3076 27.1201 92.8799 27.1846 92.3936 27.1846ZM93.1758 25.3037C93.5742 25.3037 93.9258 25.2246 94.2305 25.0664C94.541 24.9023 94.7812 24.6855 94.9512 24.416C95.127 24.1406 95.2148 23.833 95.2148 23.4932V22.4473C95.1328 22.5 95.0156 22.5498 94.8633 22.5967C94.7168 22.6436 94.5527 22.6846 94.3711 22.7197C94.1895 22.7549 94.0078 22.7871 93.8262 22.8164C93.6445 22.8398 93.4805 22.8633 93.334 22.8867C93.0117 22.9336 92.7305 23.0098 92.4902 23.1152C92.25 23.2148 92.0625 23.3525 91.9277 23.5283C91.7988 23.6982 91.7344 23.9121 91.7344 24.1699C91.7344 24.5391 91.8691 24.8203 92.1387 25.0137C92.4082 25.207 92.7539 25.3037 93.1758 25.3037ZM101.974 24.1699L101.982 20.9092H102.378L105.516 17.1738H108.645L104.426 22.1221H103.767L101.974 24.1699ZM99.5127 27V13.9043H102.229V27H99.5127ZM105.639 27L102.756 22.7285L104.566 20.7949L108.829 27H105.639ZM115.271 27H112.31L116.827 13.9043H120.396L124.904 27H121.951L118.664 16.8926H118.559L115.271 27ZM115.096 21.8496H122.101V24.0117H115.096V21.8496ZM129.809 27.1934C128.807 27.1934 127.945 26.9795 127.225 26.5518C126.504 26.1182 125.95 25.5234 125.563 24.7676C125.177 24.0059 124.983 23.127 124.983 22.1309C124.983 21.123 125.177 20.2383 125.563 19.4766C125.956 18.7148 126.513 18.1201 127.233 17.6924C127.954 17.2646 128.812 17.0508 129.809 17.0508C130.664 17.0508 131.411 17.2061 132.05 17.5166C132.694 17.8271 133.204 18.2637 133.579 18.8262C133.954 19.3887 134.159 20.0508 134.194 20.8125H131.628C131.581 20.4844 131.481 20.1973 131.329 19.9512C131.177 19.7051 130.975 19.5146 130.723 19.3799C130.471 19.2451 130.178 19.1777 129.844 19.1777C129.422 19.1777 129.053 19.292 128.736 19.5205C128.426 19.7432 128.183 20.0742 128.007 20.5137C127.837 20.9473 127.752 21.4746 127.752 22.0957C127.752 22.7168 127.837 23.25 128.007 23.6953C128.183 24.1406 128.426 24.4805 128.736 24.7148C129.053 24.9492 129.422 25.0664 129.844 25.0664C130.312 25.0664 130.708 24.9199 131.03 24.627C131.353 24.3281 131.552 23.918 131.628 23.3965H134.194C134.153 24.1465 133.951 24.8086 133.588 25.3828C133.225 25.9512 132.724 26.3965 132.085 26.7188C131.446 27.0352 130.688 27.1934 129.809 27.1934ZM138.167 27.1846C137.546 27.1846 136.986 27.0762 136.488 26.8594C135.996 26.6367 135.609 26.3086 135.328 25.875C135.047 25.4414 134.906 24.9023 134.906 24.2578C134.906 23.707 135.006 23.25 135.205 22.8867C135.404 22.5176 135.677 22.2188 136.022 21.9902C136.368 21.7617 136.761 21.5889 137.2 21.4717C137.64 21.3545 138.105 21.2725 138.598 21.2256C139.166 21.1729 139.623 21.1201 139.969 21.0674C140.314 21.0146 140.566 20.9355 140.725 20.8301C140.889 20.7188 140.971 20.5605 140.971 20.3555V20.3115C140.971 19.9072 140.842 19.5938 140.584 19.3711C140.332 19.1484 139.975 19.0371 139.512 19.0371C139.025 19.0371 138.636 19.1455 138.343 19.3623C138.056 19.5732 137.865 19.8428 137.771 20.1709L135.249 19.9688C135.378 19.3711 135.63 18.8555 136.005 18.4219C136.38 17.9824 136.863 17.6455 137.455 17.4111C138.053 17.1709 138.744 17.0508 139.529 17.0508C140.074 17.0508 140.596 17.1152 141.094 17.2441C141.592 17.373 142.034 17.5723 142.421 17.8418C142.813 18.1055 143.124 18.4482 143.353 18.8701C143.581 19.292 143.695 19.793 143.695 20.373V27H141.103V25.6289H141.032C140.874 25.9395 140.663 26.2119 140.399 26.4463C140.136 26.6748 139.819 26.8564 139.45 26.9912C139.081 27.1201 138.653 27.1846 138.167 27.1846ZM138.949 25.3037C139.348 25.3037 139.699 25.2246 140.004 25.0664C140.314 24.9023 140.555 24.6855 140.725 24.416C140.9 24.1406 140.988 23.833 140.988 23.4932V22.4473C140.906 22.5 140.789 22.5498 140.637 22.5967C140.49 22.6436 140.326 22.6846 140.145 22.7197C139.963 22.7549 139.781 22.7871 139.6 22.8164C139.418 22.8398 139.254 22.8633 139.107 22.8867C138.785 22.9336 138.504 23.0098 138.264 23.1152C138.023 23.2148 137.836 23.3525 137.701 23.5283C137.572 23.6982 137.508 23.9121 137.508 24.1699C137.508 24.5391 137.643 24.8203 137.912 25.0137C138.182 25.207 138.527 25.3037 138.949 25.3037ZM148.872 27.1582C148.122 27.1582 147.445 26.9648 146.842 26.5781C146.238 26.1914 145.761 25.623 145.409 24.873C145.058 24.1172 144.882 23.1943 144.882 22.1045C144.882 20.9795 145.063 20.042 145.427 19.292C145.79 18.542 146.273 17.9824 146.877 17.6133C147.48 17.2383 148.14 17.0508 148.854 17.0508C149.405 17.0508 149.865 17.1445 150.234 17.332C150.604 17.5137 150.902 17.7422 151.131 18.0176C151.359 18.293 151.532 18.5654 151.649 18.835H151.729V13.9043H154.453V27H151.772V25.4268H151.649C151.526 25.6963 151.348 25.9658 151.113 26.2354C150.879 26.499 150.577 26.7188 150.208 26.8945C149.845 27.0703 149.399 27.1582 148.872 27.1582ZM149.725 24.9961C150.164 24.9961 150.536 24.876 150.841 24.6357C151.151 24.3896 151.386 24.0498 151.544 23.6162C151.708 23.1826 151.79 22.6758 151.79 22.0957C151.79 21.5098 151.711 21.0029 151.553 20.5752C151.395 20.1416 151.16 19.8076 150.85 19.5732C150.539 19.333 150.164 19.2129 149.725 19.2129C149.279 19.2129 148.904 19.3359 148.6 19.582C148.295 19.8281 148.063 20.168 147.905 20.6016C147.747 21.0293 147.668 21.5273 147.668 22.0957C147.668 22.6641 147.747 23.168 147.905 23.6074C148.063 24.041 148.295 24.3809 148.6 24.627C148.91 24.873 149.285 24.9961 149.725 24.9961ZM160.518 27.1934C159.51 27.1934 158.64 26.9883 157.907 26.5781C157.175 26.168 156.612 25.585 156.22 24.8291C155.833 24.0674 155.64 23.168 155.64 22.1309C155.64 21.123 155.833 20.2383 156.22 19.4766C156.612 18.7148 157.163 18.1201 157.872 17.6924C158.587 17.2646 159.425 17.0508 160.386 17.0508C161.036 17.0508 161.643 17.1562 162.205 17.3672C162.768 17.5723 163.26 17.8828 163.682 18.2988C164.104 18.709 164.432 19.2275 164.666 19.8545C164.9 20.4756 165.018 21.2051 165.018 22.043V22.7812H156.721V21.1025H163.699L162.434 21.542C162.434 21.0439 162.357 20.6104 162.205 20.2412C162.053 19.8721 161.824 19.5879 161.52 19.3887C161.221 19.1836 160.849 19.0811 160.403 19.0811C159.958 19.0811 159.58 19.1836 159.27 19.3887C158.965 19.5938 158.73 19.8721 158.566 20.2236C158.402 20.5752 158.32 20.9795 158.32 21.4365V22.623C158.32 23.1562 158.414 23.6133 158.602 23.9941C158.789 24.3691 159.05 24.6592 159.384 24.8643C159.724 25.0635 160.113 25.1631 160.553 25.1631C160.857 25.1631 161.133 25.1191 161.379 25.0312C161.625 24.9434 161.836 24.8145 162.012 24.6445C162.193 24.4746 162.328 24.2695 162.416 24.0293L164.93 24.1963C164.807 24.7998 164.549 25.3271 164.156 25.7783C163.77 26.2236 163.269 26.5723 162.653 26.8242C162.038 27.0703 161.326 27.1934 160.518 27.1934ZM166.187 27V17.1738H168.762V18.9229H168.885C169.09 18.3428 169.433 17.8857 169.913 17.5518C170.394 17.2178 170.965 17.0508 171.627 17.0508C172.301 17.0508 172.872 17.2207 173.341 17.5605C173.815 17.8945 174.132 18.3486 174.29 18.9229H174.396C174.595 18.3545 174.958 17.9004 175.485 17.5605C176.013 17.2207 176.634 17.0508 177.349 17.0508C178.263 17.0508 179.007 17.3408 179.581 17.9209C180.161 18.501 180.451 19.3242 180.451 20.3906V27H177.727V20.9355C177.727 20.3848 177.58 19.9746 177.287 19.7051C177 19.4355 176.64 19.3008 176.206 19.3008C175.714 19.3008 175.327 19.459 175.046 19.7754C174.771 20.0859 174.633 20.4961 174.633 21.0059V27H171.996V20.8652C171.996 20.3906 171.858 20.0127 171.583 19.7314C171.308 19.4443 170.947 19.3008 170.502 19.3008C170.197 19.3008 169.925 19.377 169.685 19.5293C169.444 19.6816 169.254 19.8926 169.113 20.1621C168.973 20.4258 168.902 20.7422 168.902 21.1113V27H166.187ZM183.378 30.6738C183.032 30.6797 182.707 30.6562 182.402 30.6035C182.104 30.5508 181.857 30.4834 181.664 30.4014L182.279 28.3711L182.367 28.3887C182.824 28.5234 183.214 28.5527 183.536 28.4766C183.864 28.4062 184.113 28.1484 184.283 27.7031L184.441 27.2812L180.926 17.1738H183.782L185.812 24.3896H185.918L187.975 17.1738H190.849L187.034 28.0635C186.853 28.5908 186.604 29.0508 186.287 29.4434C185.977 29.8359 185.584 30.1377 185.109 30.3486C184.635 30.5654 184.058 30.6738 183.378 30.6738Z"
        fill={fillColor}
      />
    </svg>
  );
}
