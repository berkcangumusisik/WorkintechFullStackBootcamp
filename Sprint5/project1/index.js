const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  title: 'Workintech',
  logo: 'https://i.ibb.co/gysPB8V/logo.png',
  links: [
    {
      href: 'programlarimiz.html',
      text: 'Programlarımız',
    },
    {
      href: 'blog.html',
      text: 'Blog',
    },
    {
      href: 'sorulariniz.html',
      text: 'Sorularınız',
    },
    {
      href: 'hakkimizda.html',
      text: 'Hakkımızda',
    },
  ],
};

/* Kodlar Buradan aşağıya */
const logoImg = document.getElementById('logo-img');
const siteTitle = document.getElementsByTagName('title')[0];
siteTitle.textContent = siteContent.title;
logoImg.src = siteContent.logo;
logoImg.alt = siteContent.title;

const navLinks = document.querySelectorAll('header nav a');
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].href = siteContent.links[i].href;
  navLinks[i].textContent = siteContent.links[i].text;
}
