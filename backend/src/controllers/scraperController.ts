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

    if (!event) event = 'basketball'
    
    const url = `https://www.facebook.com/events/search/?q=${event}`
    console.log(url)

    try{
        const rendered = await getRenderedPage(url, 'fb')
        const $ = cheerio.load(rendered)

        const events = []
        for (let i = 1; i < 100; i++) {
            const date = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div:nth-child(1) > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div > div > div:nth-child(1) > span > span`).text();
            if (!date) break;

            const name = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div:nth-child(1) > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div > div > div:nth-child(2) > span > span > span`).text();
            const location = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div:nth-child(1) > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div > div > div:nth-child(3) > span > span > span`).text();
            const interested = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x193iq5w.xeuugli.x1iyjqo2.xs83m0k > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x1qjc9v5.xozqiw3.x1q0g3np.xn6708d.x1ye3gou.xwib8y2.x1y1aw1k.xykv574.xbmpl8g.x4cne27.xifccgj > div > span > span`).text();
            const link = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a`).attr('href');
            const imgLink = $(`div > div:nth-child(1) > div > div.x9f619.x1n2onr6.x1ja2u2z > div > div > div > div.x78zum5.xdt5ytf.x10cihs4.x1t2pt76.x1n2onr6.x1ja2u2z > div.x9f619.x2lah0s.x1nhvcw1.x1qjc9v5.xozqiw3.x1q0g3np.x78zum5.x1iyjqo2.x1t2pt76.x1n2onr6.x1ja2u2z.x1h6rjhl > div.x9f619.x1n2onr6.x1ja2u2z.xdt5ytf.x193iq5w.xeuugli.x1r8uery.x1iyjqo2.xs83m0k.x78zum5.x1t2pt76 > div > div > div > div > div > div > div:nth-child(${i}) > a > div.x1yztbdb > div > div > div > div > div > div.x9f619.x1n2onr6.x1ja2u2z.x78zum5.xdt5ytf.x2lah0s.x193iq5w.xeuugli.xqcrz7y > div > img`).attr('src');
  
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
        res.status(400).json({
            status: 'error',
            message: 'Something went wrong'
        })
    }
}
    
const getLinkedInEvents = async (req:Request, res:Response) => {
    let { event } = req.query;
    if (!event) event = 'cybersecurity';

    const sid = 'vkj';
    const url = `https://www.linkedin.com/search/results/events/?keywords=${event}&origin=GLOBAL_SEARCH_HEADER&ssid=${sid}`;    

    console.log(url)
    
    try {
        const rendered = await getRenderedPage(url, 'lkdn')
        const $ = cheerio.load(rendered)
        const events = []
        let emberNumber = 23;
        for (let i = 1; i < 10; i++) {
          let name = $(`div > ul > li:nth-child(${i}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div.t-roman.t-sans > div > span > span`).text();
          let date = $(`div > ul > li:nth-child(${i}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div.linked-area.flex-1.cursor-pointer > div.entity-result__primary-subtitle.t-14.t-black.t-normal`).text();
          let location = $(`div > ul > li:nth-child(${i}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div.linked-area.flex-1.cursor-pointer > div.entity-result__secondary-subtitle.t-14.t-normal`).text();
          let interested = $(`div > ul > li:nth-child(${i}) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.entity-result__insights.t-12 > div > div.entity-result__simple-insight-text-container > span`).text();
          let link = $(`div > ul > li:nth-child(1) > div > div > div.entity-result__content.entity-result__divider.pt3.pb3.t-12.t-black--light > div.mb1 > div.t-roman.t-sans > div > span > span > a`).attr('href');
          let imgLink = $(`#ember${emberNumber}`).attr('src');
          emberNumber += 5;
    
          name = name.replace(/\s\s+/g, ' ');
          date = date.replace(/\s\s+/g, ' ');
          location = location.replace(/\s\s+/g, ' ');
          interested = interested.replace(/\s\s+/g, ' ');
    
          if (!imgLink) imgLink = 'https://wordvice-wp-static.s3-ap-northeast-1.amazonaws.com/uploads/2019/01/LinkedIn_HP.jpg';

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
        res.status(400).json({
            status: 'error',
            message: 'Something went wrong'
        })
    }
}


const getMeetUpEvents = async (req:Request, res:Response) => {
    let { event, location } = req.query;
    if (!event) event = 'basketball';
    // if (!location) location = 'tr--Istanbul';

    const url = `https://www.meetup.com/find/?keywords=${event}&source=EVENTS`;
    console.log(url);

  try {
    const rendered = await getRenderedPage(url, 'meetup')

    const $ = cheerio.load(rendered)

    const events = $('#event-card-in-search-results').map((i, el) => {
        const title = $(el).find('h2').text()
        const date = $(el).find('h3').text()
        const image = $(el).find('img').attr('src')
        const loc = location
        const link = $(el).attr('href')
        return new Events(date, title, loc, '', link, image)
    }).get() 

    res.status(200).json({
        status: 'success',
        events
    })
  }
  catch (error) {
    console.log(error);
    res.status(400).json({
        status: 'error',
        message: 'Something went wrong'
    })
  }
}


async function getRenderedPage (url:any, type: string) {
  const email = 'wowkhan69er@gmail.com'
  const password = '@Hello1234'
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  
  if (type === 'lkdn') {
    await page.goto('https://www.linkedin.com/login', { timeout: 0, waitUntil: 'load' });
    await page.waitForSelector('#username')
    await page.type('#username', email)
    await page.type('#password', password)
    await page.click('.btn__primary--large')   
    await page.waitForNetworkIdle({ idleTime: 1000 })
    await page.goto(url, { timeout: 0 , waitUntil: 'load'});
    // await page.waitForNetworkIdle({ idleTime: 1000 })
  }

  if (type === 'fb' || type === 'meetup') {
    await page.goto(url, { timeout: 0, waitUntil: 'load' });
    await page.waitForNetworkIdle({ idleTime: 1000 })
  }

  const pagesContent = await page.content();
  browser.close()
  
  return pagesContent;
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
    getLinkedInEvents,
    getMeetUpEvents
}

export default scrapers;