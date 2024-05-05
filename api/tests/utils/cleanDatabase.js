import fs from 'node:fs'
import path
  from 'node:path'
export function cleanDatabase() {
  fs.writeFileSync(path.join(path.resolve(), 'vehicles.json'), JSON.stringify([]), 'utf-8')



}
