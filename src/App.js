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
    <div>
        <h1>Without span</h1>
        <Tooltip tooltip="This is the tooltip without span">Hover over me without span</Tooltip>

        <h1>With span</h1>
        <Tooltip tooltip="This is the tooltip with span"><span>Hover over me with span</span></Tooltip>
    </div>
  )
}
