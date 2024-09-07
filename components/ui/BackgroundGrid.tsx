import React from 'react'

interface BackgroundGridProps {
  reverse?: boolean
}

export default function BackgroundGrid({ reverse = false }: BackgroundGridProps = {}) {
  return (
    <div
      className="absolute inset-0"
      style={{
        maskImage: `linear-gradient(to ${reverse ? 'top' : 'bottom'}, black, transparent)`,
        WebkitMaskImage: `linear-gradient(to ${reverse ? 'top' : 'bottom'}, black, transparent)`,
      }}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      ></div>
    </div>
  )
}