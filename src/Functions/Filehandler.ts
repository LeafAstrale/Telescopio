import { create, BaseDirectory, FileHandle, } from '@tauri-apps/plugin-fs'

export async function crearArchivo(filename: string, cuerpo: string) {
  let archivo: FileHandle | null = null

  try {
    archivo = await create(`${filename}.txt`, {
      baseDir: BaseDirectory.AppData
    })

    const data = new TextEncoder().encode(cuerpo);
    await archivo.write(data);
    console.log("escrito con éxito");

  } catch (e) {
    console.log(e + " wea")
  } finally {
    if (archivo) {
      await archivo.close()
    }
  }
}
