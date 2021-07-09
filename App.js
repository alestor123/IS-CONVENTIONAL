'use strict'
module.exports = (msg, mtype) => {
  const def = ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test']
  if (!(msg && typeof msg === 'string' && msg.length > 0)) throw new Error('Please enter a vaild message')
  return new RegExp('^((' + (mtype && typeof mtype === 'object' && mtype.length > 0 ? mtype : def).join('|') + '|¯\\\\_\\(ツ\\)_/¯)(\\(\\w+\\))?(!)?(: (.*\\s*)*))|(Merge (.*\\s*)*)|(Initial commit$)').test(msg) // from stackoverflow idk
}
