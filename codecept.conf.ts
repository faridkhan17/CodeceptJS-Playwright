import { setHeadlessWhen, setCommonPlugins } from '@codeceptjs/configure';
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

export const config: CodeceptJS.MainConfig = {
  tests: './tests/*_test.ts',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://www.saucedemo.com/',
      show: true,
      browser: 'chromium'
    }
  },
  include: {
    I: './steps_file'
  },
  name: 'CodeceptJS-Playwright'
}