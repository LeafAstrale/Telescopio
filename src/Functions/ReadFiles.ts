
import { open } from "@tauri-apps/plugin-dialog";
//import { readFile } from "@tauri-apps/plugin-fs";

export const ReadFiles = async () => {
    try {
        const RutaSeleccionada = await open({
            multiple: true,
            title: "Imagenes a Seleccionar: "
        });
        console.log("Rutas son: "+RutaSeleccionada)
    } catch (ex) {
        console.log("Algo salió mal: "+ex)
    }
}