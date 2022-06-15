import {renderApp, screen, waitFor} from './testEnv'

const TriggerText = 'Hover over me'
const TooltipText = 'This is the tooltip'

test('hover trigger', async () => {
  //render(<Tooltip options={{trigger: 'hover'}} />)
  const {user} = renderApp()

  // tooltip not visible initially
  expect(screen.queryByText(TooltipText)).not.toBeInTheDocument()

  // tooltip shown on hover in
  const triggerElement = screen.getByText(TriggerText)
  expect(triggerElement).toBeInTheDocument()
  await user.hover(triggerElement)
  await waitFor(() =>
    expect(screen.queryByText(TooltipText)).toBeInTheDocument(),
  )
})
