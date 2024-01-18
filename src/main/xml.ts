export default class Xml{

    static xml2js = require('xml2js');
    static fs = require('fs');
    static parser = new this.xml2js.Parser({ attrkey: "attr" });

    public xmlParser(xmlUrl:string) {
         let xml_string = Xml.fs.readFileSync(xmlUrl, "utf8");
         
         Xml.parser.parseString(xml_string, function(error: any, result: JSON) {
                if(error === null) {
                    Xml.fs.writeFileSync("./src/archive/scl/Jiga.json", JSON.stringify(result));
                }
                else {
                    console.log(error);
                }
            });
    }


} 