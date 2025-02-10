export default function ReformLogoIcon({
  width = 50,
  height = 50,
  fill = "none",
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      width={width}
      height={height}
      {...props}
    >
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M63.837 4h-32.11C29.117 4 27 6.107 27 8.706V38.97c0 2.6 2.116 4.706 4.727 4.706h32.11c2.611 0 4.728-2.107 4.728-4.706V8.706c0-2.6-2.117-4.706-4.728-4.706ZM36.48 17.449h3.642c2.085 0 3.392 1.19 3.392 3.086 0 1.923-1.237 3.058-3.35 3.058h-3.684v-6.144Zm0 9.354h3.434l3.74 7.238h4.753l-4.226-7.888c2.308-.913 3.642-3.128 3.642-5.674 0-3.971-2.71-6.407-7.117-6.407h-8.424v19.969h4.198v-7.238Zm23.068-1.992c-.083-2.02-1.306-3.28-3.197-3.28-1.877 0-3.197 1.3-3.336 3.28h6.533Zm-3.044 6.462c1.599 0 2.697-.567 3.128-1.578h3.767c-.612 2.879-3.253 4.678-7.006 4.678-4.67 0-7.423-2.934-7.423-7.888 0-4.968 2.808-8.04 7.367-8.04 4.518 0 7.187 2.865 7.187 7.708v1.231H53v.208c.056 2.27 1.39 3.68 3.503 3.68Zm16.19 2.767h4.045V22.098h3.17V18.93h-3.253V17.67c0-1.3.584-1.923 2.168-1.923.529 0 .946.041 1.21.069v-2.85a12.733 12.733 0 0 0-2.085-.153c-3.698 0-5.255 1.536-5.255 4.566v1.55H70.22v3.17h2.474V34.04Zm22.833-7.638c0 4.996-2.836 7.97-7.548 7.97s-7.548-2.974-7.548-7.97c0-4.94 2.877-7.957 7.548-7.957 4.67 0 7.548 3.003 7.548 7.957Zm-10.94 0c0 2.975 1.223 4.677 3.392 4.677 2.154 0 3.392-1.716 3.392-4.677 0-2.934-1.251-4.663-3.392-4.663-2.155 0-3.392 1.73-3.392 4.663Zm12.82 7.639h4.045v-8.455c0-2.145 1.516-3.446 3.726-3.446.653 0 1.598.125 1.918.25v-3.668c-.347-.125-1.029-.194-1.585-.194-1.946 0-3.53 1.163-3.934 2.685h-.25v-2.436h-3.92v15.264Zm15.163 0h-4.046V18.777h3.92v2.491h.251c.625-1.743 2.224-2.823 4.239-2.823 2.155 0 3.629 1.052 4.24 2.823h.25c.709-1.702 2.475-2.823 4.615-2.823 3.059 0 4.963 1.98 4.963 5.12v10.476h-4.045v-9.41c0-1.813-.848-2.712-2.558-2.712-1.64 0-2.697 1.162-2.697 2.781v9.34h-3.892v-9.575c0-1.62-.945-2.546-2.53-2.546s-2.71 1.231-2.71 2.933v9.189Z"
        clip-rule="evenodd"
      />
    </svg>
  );
}
