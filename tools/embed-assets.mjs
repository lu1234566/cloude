// Embute os sprites do pacote de assets como base64 dentro do index.html,
// entre os marcadores <!--SPRITES_BEGIN--> e <!--SPRITES_END-->.
// Uso: node tools/embed-assets.mjs
import {readFileSync,writeFileSync,readdirSync} from "fs";
import {join} from "path";
const ROOT=new URL("..",import.meta.url).pathname;
const DIRS=["heroes","bosses","enemies","tiles"];
const entries=[];
for(const d of DIRS){
  const dir=join(ROOT,"assets",d);
  for(const f of readdirSync(dir)){
    if(!f.endsWith(".png"))continue;
    const key=f.replace(/\.png$/,"");
    const b64=readFileSync(join(dir,f)).toString("base64");
    entries.push(JSON.stringify(key)+":\"data:image/png;base64,"+b64+"\"");
  }
}
const block=`<!--SPRITES_BEGIN--><script>const SPRITES={${entries.join(",")}};</script><!--SPRITES_END-->`;
const file=join(ROOT,"index.html");
let html=readFileSync(file,"utf8");
if(!/<!--SPRITES_BEGIN-->[\s\S]*?<!--SPRITES_END-->/.test(html)){
  console.error("marcadores SPRITES não encontrados no index.html");process.exit(1)}
html=html.replace(/<!--SPRITES_BEGIN-->[\s\S]*?<!--SPRITES_END-->/,block);
writeFileSync(file,html);
console.log("embutidos",entries.length,"sprites —",Math.round(block.length/1024),"KB");
