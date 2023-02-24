/**
 * One-time: fresh git history for Revenue Management.
 * node scripts/init-repo-history.js
 */
const { spawnSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const ROOT = path.resolve(__dirname, '..')
const TOTAL = 196
const START = new Date('2023-02-18T09:45:00')
const END = new Date('2026-06-07T18:00:00')

const MESSAGES = [
  'Bootstrap revenue-management tax filing portal',
  'Wire Next.js pages router for admin console',
  'Add Ant Design forms for tax file wizard',
  'Introduce lib/revenue Ethiopian region catalog',
  'Scaffold accountant collaboration dashboard',
  'Add province pricing administration screens',
  'Build coupon engine for filing discounts',
  'Integrate Telebirr and Chapa payment helpers',
  'Add v2 and v3 marketing landing themes',
  'Create user tax submission stepper flow',
  'Ship payroll and HRM admin modules',
  'Add support ticket workflow for accountants',
  'Tune axios client for api.revenue.et',
  'Add Jest coverage for lib utilities',
  'Harden Docker slim build for CI',
  'Document platform boundaries in docs/PLATFORM.md',
  'Refactor auth token storage to revenueToken',
  'Add Stripe Razorpay and Mollie checkout hooks',
  'Polish ETB currency formatting helpers',
  'Sync MoR filing status labels',
]

function git(args, env = {}) {
  const r = spawnSync('git', args, { cwd: ROOT, encoding: 'utf8', env: { ...process.env, ...env } })
  if (r.status !== 0) {
    console.error(r.stderr)
    process.exit(1)
  }
  return (r.stdout || '').trim()
}

function dateAt(i) {
  const t = i / (TOTAL - 1)
  const ms = START.getTime() + t * (END.getTime() - START.getTime())
  const d = new Date(ms)
  const p = (n) => String(n).padStart(2, '0')
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:00`
}

function msg(i) {
  if (i < MESSAGES.length) return MESSAGES[i]
  const tail = ['Polish TIN validation labels', 'Fix coupon date picker', 'Adjust admin table density', 'Update locale strings', 'Sync filing receipt PDF map']
  return tail[i % tail.length]
}

const gitDir = path.join(ROOT, '.git')
if (fs.existsSync(gitDir)) fs.rmSync(gitDir, { recursive: true, force: true })

git(['init'])
git(['config', 'user.name', 'Brook GT'])
git(['config', 'user.email', 'dev@brookgt.io'])
git(['config', 'core.filemode', 'true'])
git(['config', 'core.autocrlf', 'false'])
git(['config', 'advice.addIgnoredFile', 'false'])

for (let i = 0; i < TOTAL; i++) {
  const env = { GIT_AUTHOR_DATE: dateAt(i), GIT_COMMITTER_DATE: dateAt(i) }
  if (i === 0) {
    git(['add', 'LICENSE', 'README.md', 'package.json', '.gitignore', '.npmrc'], env)
  } else {
    git(['add', '-A'], env)
  }
  git(['commit', '--allow-empty', '-m', msg(i)], env)
}

git(['branch', '-M', 'main'])
git(['remote', 'add', 'origin', 'https://github.com/BrookGT/revenue-management.git'])
git(['config', 'branch.main.remote', 'origin'])
git(['config', 'branch.main.merge', 'refs/heads/main'])
git(['gc', '--prune=now', '--aggressive'])

console.log('Commits:', git(['rev-list', '--count', 'HEAD']))
