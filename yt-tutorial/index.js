import os from "os";
import amila from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = amila.dirname(__filename);

console.log(os.platform());


console.log(amila.basename(--filename)); 