import { exists, mkdir } from "@tauri-apps/plugin-fs";
import { BaseDirectory } from "@tauri-apps/plugin-fs";

export async function Existe(nombreCarpeta: string) {
  try {
    const existe = await exists(nombreCarpeta, {
      baseDir: BaseDirectory.AppData
    });

    if (!existe) {
      await mkdir(nombreCarpeta, {
        baseDir: BaseDirectory.AppData,
        recursive: true
      });
      console.log("Carpeta creada:", nombreCarpeta);
    }

    return nombreCarpeta;
  } catch (err) {
    console.error("Algo salió mal:", err);
    throw err;
  }
}
