#!/usr/bin/env node

import * as fs from 'fs'
import * as path from 'path'

const userhome = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']
const [,,fileName] = process.argv
const filePath = path.join(userhome, fileName)

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, '')
  console.log(`${fileName}を作成しました`)
} else {
  console.log(`${fileName}は作成済みです`)
}
