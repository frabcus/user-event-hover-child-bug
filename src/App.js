import React from 'react'
import {usePopperTooltip} from 'react-popper-tooltip'

export const Tooltip = ({children, tooltip, ...props}) => {
  const {
    getArrowProps,
    getTooltipProps,
    setTooltipRef,
    setTriggerRef,
    visible,
  } = usePopperTooltip({
    ...props,
    trigger: 'hover',
  })

  return (
    <>
      <span ref={setTriggerRef}>{children}</span>
      {visible && (
        <div ref={setTooltipRef} {...getTooltipProps()}>
          {tooltip}
          <div {...getArrowProps()} />
        </div>
      )}
    </>
  )
}

export function App() {
  return (
    <Tooltip tooltip="This is the tooltip"><span>Hover over me</span></Tooltip>
  )
}
