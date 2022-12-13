import { Request, Response, NextFunction } from 'express';
import * as cheerio from 'cheerio';
import * as puppeteer from 'puppeteer';

class Events  {
    date: any;
    name: string;
    location: any;
    interested: any;
    link: any;
    imgLink: any;

  constructor(date: any, name: string, location:any, interested:any, link:any, imgLink:any) {
    this.date = date;
    this.name = name;
    this.location = location;
    this.interested = interested;
    this.link = link;
    this.imgLink = imgLink; 
  }
}

const getFacebookEvents = async (req: Request, res: Response, next: NextFunction) => {
    let { event } = req.query as any;
    console.log(event);
    if (!event) event = 'basketball'
    const url = `https://www.facebook.com/events/search/?q=${event}`

    try{
        const rendered = await getRenderedPage(url)
        const $ = cheerio.load(rendered)

        const events = []
        for (let i = 1; i < 100; i++) {
            const date = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div:nth-child(1) > div > div > div > div:nth-child(1) > span > span`).text();
            if (!date) break;

            const name = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div:nth-child(1) > div > div > div > div:nth-child(2) > span > span > object > a > span`).text();
            const location = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div:nth-child(1) > div > div > div > div:nth-child(3) > span > span > span`).text();
            const interested = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x1qjc9v5.xozqiw3.x1q0g3np.xn6708d.x1ye3gou.xwib8y2.x1y1aw1k.xykv574.xbmpl8g.x4cne27.xifccgj > div > span > span`).text();
            const link = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a`).attr('href');
            const imgLink = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xeuugli.xqcrz7y > div > img`).attr('src');
  
            const event = new Events(date, name, location, interested, link, imgLink);
            events.push(event);
        }
        
        res.status(200).json({
            status: 'success',
            events
        })
    }
    catch (error) {
        console.log(error);
        res.status(200).json({
            status: 'error',
            message: 'Something went wrong'
        })
    }
}
    

async function getRenderedPage (url:any) {
  const browser = await puppeteer.launch({ headless: true })

  const page = await browser.newPage()
  await page.goto(url, { timeout: 0, waitUntil: 'load' });
  
  await autoScroll(page);
  
  await page.waitForNetworkIdle({ idleTime: 1000 })
  return page.content()
}

async function autoScroll(page:any){
  await page.evaluate(async () => {
      await new Promise((resolve:any) => {
          let totalHeight = 0;
          let distance = 100;
          let timer = setInterval(() => {
              let scrollHeight = document.body.scrollHeight;
              window.scrollBy(0, distance);
              totalHeight += distance;

              if(totalHeight >= scrollHeight - window.innerHeight){
                  clearInterval(timer);
                  resolve();
              }
          }, 100);
      });
  });
}


const scrapers = {
    getFacebookEvents,
}

export default scrapers;