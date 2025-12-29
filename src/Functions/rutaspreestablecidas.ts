//Rutas estructuradas
import { appDataDir, documentDir, join } from "@tauri-apps/api/path";
export enum AppRuta {
    Raiz = "APP_ROOT",
    Cache = "CACHE",
    Datos = "DATA",
    Documentos = "DOCUMENTS"
}

export async function Rutas(dir: AppRuta): Promise <string> {
 switch (dir) {
    case AppRuta.Raiz:
        return await appDataDir();
        
    case AppRuta.Cache: 
        return await join(await appDataDir(),"cache");
    
    case AppRuta.Datos:
        return await join(await appDataDir(),"data");
    
    case AppRuta.Documentos:
        return await documentDir();
 }   
}