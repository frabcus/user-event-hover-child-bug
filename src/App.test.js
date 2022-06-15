import {renderApp, screen, waitFor} from './testEnv'

test('hover trigger without span', async () => {
  const triggerText = 'Hover over me without span'
  const tooltipText = 'This is the tooltip without span'

  const {user} = renderApp()

  // tooltip not visible initially
  expect(screen.queryByText(tooltipText)).not.toBeInTheDocument()

  // tooltip shown on hover in
  const triggerElement = screen.getByText(triggerText)
  expect(triggerElement).toBeInTheDocument()
  await user.hover(triggerElement)
  await waitFor(() =>
    expect(screen.queryByText(tooltipText)).toBeInTheDocument(),
  )
})

test('hover trigger with span', async () => {
  const triggerText = 'Hover over me with span'
  const tooltipText = 'This is the tooltip with span'

  const {user} = renderApp()

  // tooltip not visible initially
  expect(screen.queryByText(tooltipText)).not.toBeInTheDocument()

  // tooltip shown on hover in
  const triggerElement = screen.getByText(triggerText)
  expect(triggerElement).toBeInTheDocument()
  await user.hover(triggerElement)
  await waitFor(() =>
    expect(screen.queryByText(tooltipText)).toBeInTheDocument(),
  )
})
