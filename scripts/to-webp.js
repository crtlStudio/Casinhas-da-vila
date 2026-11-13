// Converte todas as imagens .jpg/.jpeg/.png em src/assets/images para .webp
// Uso: npm run webp   (adicionar --delete para apagar os originais)
import { readdir, unlink } from 'node:fs/promises'
import { join, parse } from 'node:path'
import process from 'node:process'
import sharp from 'sharp'

const dir = 'src/assets/images'
const apagar = process.argv.includes('--delete')

for (const file of await readdir(dir)) {
  const { name, ext } = parse(file)
  if (!/^\.(jpe?g|jfif|png)$/i.test(ext)) continue

  const origem = join(dir, file)
  const destino = join(dir, `${name}.webp`)

  await sharp(origem)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 75 })
    .toFile(destino)

  if (apagar) await unlink(origem)
  console.log(`✓ ${file} → ${name}.webp`)
}
