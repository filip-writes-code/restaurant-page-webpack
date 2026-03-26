const aboutPage = document.createElement('div');
aboutPage.classList.add('container');

//create header
const header = document.createElement('div');
header.classList.add('header');
aboutPage.appendChild(header);
const headerText = document.createElement('h1')
    headerText.textContent = "About Us"
header.appendChild(headerText)


const content = document.createElement('div');
content.classList.add('about-content');
aboutPage.appendChild(content)

content.innerText = `Welcome to **The Corner** — where the lights are low, the flavors are loud, and every meal feels like a tiny vacation you didn’t know you needed.

We started with a simple idea: food should be fun. Not “fancy-for-the-sake-of-it” fun, but the kind of fun where you take a bite, pause, and go, *“okay… that’s ridiculous—in the best way.”* Think unexpected flavor combos, colorful plates, and just enough chaos to keep things interesting.

Our kitchen is a playground. We borrow inspiration from street food, late-night cravings, childhood favorites, and places we’ve loved (or just dreamed about visiting). Then we remix it all into something a little bold, a little weird, and totally delicious. No rules, no snobbery—just really good food that makes you feel something.

But The Corner isn’t just about what’s on your plate. It’s about the vibe. It’s the music that makes you stay for one more drink. It’s the neon glow, the laughter from the next table, the spontaneous dessert order you *definitely* weren’t planning on. It’s the kind of place where dates turn into stories and quick dinners turn into long nights.

So whether you’re here for a casual bite, a celebration, or just because you were curious—we’re glad you found us.

Come hungry. Leave happier. And maybe a little surprised.

— The Corner Crew 🌙🥭
`



export { aboutPage };