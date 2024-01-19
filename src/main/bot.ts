import puppet, { Browser, PuppeteerNode }  from "puppeteer";

export class Bot
{

    readonly ip: string
    readonly credentials: {user: string, passwd: string}
    public process: any


    constructor(ip: string, credentials: {user: string, passwd: string})
    {   
        this.ip = ip;
        this.credentials = credentials;

    }

    public async buildIntern(){
        this.process = await puppet.launch({
            headless: false,
            defaultViewport: {"width": 1950, "height": 1800},
        
        })
    }

    public async login(){
        try {
        const page = await this.process.newPage();
        await page.goto(`http:\\${this.ip}/menu/home`);
        await page.setViewport({width: 1920, height: 1080, deviceScaleFactor:1});
        await page.click("#buttonEntrar.btn.btn-success");
        await page.waitForSelector("#inputUsuario", {timeout: 5000});
        await page.waitForTimeout(2000);
        await page.type("#inputUsuario", this.credentials.user, {delay: 50})
        await page.type("#inputSenha", this.credentials.passwd,  {delay: 50})
        await page.click("#btn-submit")
        console.log(`terminei o SD+ ${this.ip}`)
        }catch(e: any) {

            console.log(`Não foi possivel conectar com o SD+ IP: ${this.ip}`)
            this.process.close();
            
        }
    }

    public async updateSystem(){
        const page = await this.process.newPage();
        await page.goto(`http:\\${this.ip}/menu/atualizacao/`);
        await page.click(".btn.btn-primary");
    }

}
