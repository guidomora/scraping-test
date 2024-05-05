import puppeteer from "puppeteer";


async function openWebPage() {
    const browser = await puppeteer.launch({
        headless: false, // sirve para que se abra el navegador
        slowMo: 400, // sirve para que en cada operacion se vea mas lento el proceso
    })
    const page = await browser.newPage()

    await page.goto('https://example.com')
    await browser.close()
}

async function screenShot() {
    const browser = await puppeteer.launch({
        headless: false, // sirve para que se abra el navegador
        slowMo: 400, // sirve para que se vea mas lento el proceso
    })
    const page = await browser.newPage()

    await page.goto('https://example.com')
    await page.screenshot({ path: 'example.png' })
    await browser.close()
}

async function searchNav() {
    const browser = await puppeteer.launch({
        headless: false, // sirve para que se abra el navegador
        slowMo: 400, // sirve para que se vea mas lento el proceso
    })
    const page = await browser.newPage()

    await page.goto('https://quotes.toscrape.com/')
    await page.click('a[href="/login"]')
    await browser.close()
}

async function inspectHtml() {
    const browser = await puppeteer.launch({
        headless: false, // sirve para que se abra el navegador
        slowMo: 400, // sirve para que se vea mas lento el proceso
    })
    const page = await browser.newPage()

    await page.goto('https://example.com/')
    const result = await page.evaluate(() => { // puede ejecutar codigo en la consola del navegador y manipular el DOM (querySelector, getElementById, etc)
        const title = document.querySelector('h1')!.innerText
        const description = document.querySelector('p')!.innerText
        const more = document.querySelector('a')!.innerText
        return { // lo retornamos para poder verlo en la consola
            title,
            description,
            more
        }
    })
    console.log(result);
    
    await browser.close()
}

// async function dinamycWebPage() {
//     const browser = await puppeteer.launch({
//         headless: false, // sirve para que se abra el navegador
//         slowMo: 400, // sirve para que se vea mas lento el proceso
//     })
//     const page = await browser.newPage()

//     await page.goto('https://quotes.toscrape.com/')
//     const result = await page.evaluate(() => { // puede ejecutar codigo en la consola del navegador y manipular el DOM (querySelector, getElementById, etc)
//         const quotes =  document.querySelectorAll('.quote')
//         const data = [...quotes].map(quote => {
//             const quoteText = quote.querySelector('.text')!.innerHTML
//             const author = quote.querySelector('.author')!.innerHTML
//             const tags = [...quote.querySelectorAll('.tag')].map(tag => tag.innerHTML)
//             return { quoteText, author, tags }
//         })
//         return data
//     })
//     console.log(result);
    
//     await browser.close()
// }

async function writingTest() {
    const browser = await puppeteer.launch({
        headless: false, // sirve para que se abra el navegador
        slowMo: 300, // sirve para que se vea mas lento el proceso
    })
    const page = await browser.newPage()

    await page.goto('https://quotes.toscrape.com/')
    await page.click('a[href="/login"]')
    await page.click('input[name="username"]')
    await page.keyboard.type('Guido')
    await page.click('input[name="password"]')
    await page.keyboard.type('12345')
    await page.click('input[type="submit"]')
    
    await browser.close()
}

// openWebPage()
// screenShot()
// searchNav()
// inspectHtml()
// dinamycWebPage()
writingTest()