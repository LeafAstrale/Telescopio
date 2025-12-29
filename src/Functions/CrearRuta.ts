import { documentDir, join } from '@tauri-apps/api/path'
import { /*create*/ BaseDirectory, /*FileHandle,*/ exists, mkdir } from '@tauri-apps/plugin-fs'


export async function crearRuta() {
  //let archivo: FileHandle | null = null

  try {
  const RutaDocumentos = await documentDir();
  const ruta = await join(RutaDocumentos,"TelescopioData");

    if (await exists (ruta)) {
      console.log("Existe, Usando ruta")
    } else {
      console.log("No existe; Creando directorio"); 
      await mkdir('TelescopioData', { baseDir: BaseDirectory.Document, recursive: true});
      console.log("Directorio Creado")
    } 
  } catch (e) {
    console.log(e)
  }
    
    


    /*archivo = await create(`${filename}.txt`, {
      baseDir: BaseDirectory.Document
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
  }*/
}

 /*try {
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
}*/