Example of a bug in `user-event` (versions 14 and above) where hover doesn't cascade through a span (or any other element) inbetween it and the event listener. One of the tests passes and the other fails, when both tooltips work interactively in the web browser.


```
 FAIL  src/App.test.js
  ✓ hover trigger without span (64 ms)
  ✕ hover trigger with span (1016 ms)

  ● hover trigger with span

    expect(received).toBeInTheDocument()

    received value must be an HTMLElement or an SVGElement.
    Received has value: null

    Ignored nodes: comments, <script />, <style />
    <html>
      <head />
      <body>
        <div>
          <div>
            <h1>
              Without span
            </h1>
            <span>
              Hover over me without span
            </span>
            <h1>
              With span
            </h1>
            <span>
              <span>
                Hover over me with span
              </span>
            </span>
          </div>
        </div>
      </body>
    </html>

      33 |   await user.hover(triggerElement)
      34 |   await waitFor(() =>
    > 35 |     expect(screen.queryByText(tooltipText)).toBeInTheDocument(),
         |                                             ^
      36 |   )
      37 | })
      38 |

      at __EXTERNAL_MATCHER_TRAP__ (../../../Users/francis/.nvm/versions/node/v16.13.2/lib/node_modules/react-scripts/node_modules/expect/build/index.js:386:30)
      at Object.toBeInTheDocument (../../../Users/francis/.nvm/versions/node/v16.13.2/lib/node_modules/react-scripts/node_modules/expect/build/index.js:387:15)
      at src/App.test.js:35:45
      at runWithExpensiveErrorDiagnosticsDisabled (node_modules/@testing-library/dom/dist/config.js:50:12)
      at checkCallback (node_modules/@testing-library/dom/dist/wait-for.js:141:77)
      at checkRealTimersCallback (node_modules/@testing-library/dom/dist/wait-for.js:133:16)
      at Timeout.task [as _onTimeout] (../../../Users/francis/.nvm/versions/node/v16.13.2/lib/node_modules/react-scripts/node_modules/jsdom/lib/jsdom/browser/Window.js:516:19)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 passed, 2 total
Snapshots:   0 total
Time:        1.654 s
Ran all test suites.

Watch Usage: Press w to show more.
```
