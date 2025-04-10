import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { x } from 'tinyexec'

const args = hideBin(process.argv)
const commandArgs = args.slice(1)

const cli = yargs(args).scriptName('vite-plus')

cli.command(['$0', 'dev'], '', ({ argv }) => {
  console.log('dev command', argv)
})
cli.command('build', '')
cli.command('preview', '')
cli.command('lib', '')
cli.command('run', '')
cli.command('lint', '', () => {
  return x('./node_modules/.bin/oxlint', commandArgs, {
    nodeOptions: { stdio: 'inherit' },
  })
})

cli.command('fmt', '')
cli.command('test', '')
cli.command('bench', '')
cli.command('docs', '')
cli.command('publish', '')
cli.command('ui', '')

cli.help().parse()
