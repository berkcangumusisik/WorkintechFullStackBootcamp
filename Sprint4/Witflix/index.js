const movies = [
    {
        id: 1,
        title: "Dune: Çöl Gezegeni",
        rating: "8.0 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 35 dk",
        description: "Uzak bir gelecekte, feodal galaktik toplumda geçen epik bir bilim kurgu hikayesi. Atreides ailesi, evrendeki en değerli madde olan baharatın kaynağı olan tehlikeli çöl gezegeni Arrakis'i yönetmek üzere görevlendirilir. Genç Paul Atreides, ailesinin yıkımından sonra gezegenin yerli halkı Fremenlerle bir araya gelerek kaderini değiştirecektir.",
        starring: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac", "Zendaya"],
        tags: ["Bilim Kurgu", "Epik", "Macera", "Drama"],
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"
    },
    {
        id: 2,
        title: "Top Gun: Maverick",
        rating: "8.3 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 10 dk",
        description: "Pete 'Maverick' Mitchell, otuz yıldan fazla bir süre sonra hala en iyi pilotlardan biri olarak görev yapıyor. Yeni nesil pilotları eğitmek için Top Gun'a döndüğünde, geçmişiyle yüzleşmek ve geleceğin tehlikeleriyle başa çıkmak zorunda kalır.",
        starring: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm"],
        tags: ["Aksiyon", "Drama", "Macera"],
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"
    },
    {
        id: 3,
        title: "The Batman",
        rating: "7.8 (IMDB)",
        ageRestriction: "16+",
        duration: "2 sa 56 dk",
        description: "Gotham City'de bir dizi cinayet işlenirken, Batman gizemli bir seri katilin peşine düşer. Riddler adlı bu katil, şehrin en güçlü insanlarını hedef alırken, Batman karanlık geçmişiyle yüzleşmek zorunda kalır.",
        starring: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Colin Farrell"],
        tags: ["Aksiyon", "Gerilim", "Suç", "Korku"],
        poster: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg"
    },
    {
        id: 4,
        title: "Everything Everywhere All at Once",
        rating: "8.1 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 19 dk",
        description: "Bir çamaşırhanenin sahibi olan Evelyn Wang, çoklu evrenler arasında seyahat ederek dünyayı kurtarmak zorunda kalır. Hayatının her versiyonunu keşfederken, ailesiyle olan ilişkilerini de yeniden değerlendirir.",
        starring: ["Michelle Yeoh", "Stephanie Hsu", "Ke Huy Quan", "Jamie Lee Curtis"],
        tags: ["Komedi", "Drama", "Bilim Kurgu", "Aksiyon"],
        poster: "https://m.media-amazon.com/images/I/81Zxx9YrzAL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 5,
        title: "Spider-Man: No Way Home",
        rating: "8.3 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 28 dk",
        description: "Peter Parker'ın kimliği açığa çıktıktan sonra, Dr. Strange'den yardım ister. Ancak büyü ters gider ve çoklu evrenden kötü karakterler gelir. Peter, onları durdurmak ve dünyayı kurtarmak zorunda kalır.",
        starring: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Willem Dafoe"],
        tags: ["Aksiyon", "Macera", "Bilim Kurgu", "Süper Kahraman"],
        poster: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
    },
    {
        id: 6,
        title: "No Time to Die",
        rating: "7.3 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 43 dk",
        description: "James Bond emekli olmuştur ve Jamaika'da huzurlu bir hayat sürmektedir. Ancak eski bir arkadaşından yardım isteği gelir ve Bond, tehlikeli bir silahı durdurmak için göreve geri döner.",
        starring: ["Daniel Craig", "Léa Seydoux", "Rami Malek", "Ana de Armas"],
        tags: ["Aksiyon", "Gerilim", "Casus", "Macera"],
        poster: "https://image.tmdb.org/t/p/w500/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg"
    },
    {
        id: 7,
        title: "The Matrix Resurrections",
        rating: "5.7 (IMDB)",
        ageRestriction: "16+",
        duration: "2 sa 28 dk",
        description: "Neo, Matrix'in içinde tekrar uyanır ve gerçek dünyayla sanal dünya arasındaki sınırları keşfeder. Eski müttefikleriyle bir araya gelerek yeni bir tehditle savaşır.",
        starring: ["Keanu Reeves", "Carrie-Anne Moss", "Yahya Abdul-Mateen II", "Jessica Henwick"],
        tags: ["Bilim Kurgu", "Aksiyon", "Gerilim"],
        poster: "https://image.tmdb.org/t/p/w500/8c4a8kE7PizaGQQnditMmI1xbRp.jpg"
    },
    {
        id: 8,
        title: "Encanto",
        rating: "7.3 (IMDB)",
        ageRestriction: "7+",
        duration: "1 sa 42 dk",
        description: "Kolombiya dağlarında yaşayan büyülü Madrigal ailesinin hikayesi. Ailenin her üyesi özel bir güce sahiptir, ancak Mirabel hariç. Büyülü ev tehlikede olduğunda, Mirabel ailesini kurtarmak için tek umut olur.",
        starring: ["Stephanie Beatriz", "María Cecilia Botero", "John Leguizamo", "Mauro Castillo"],
        tags: ["Animasyon", "Müzikal", "Komedi", "Aile"],
        poster: "https://img03.imgsinemalar.com/images/afis_dev/e/enkanto-sihirli-dunya-1660927675.jpg"
    },
    {
        id: 9,
        title: "The Suicide Squad",
        rating: "7.2 (IMDB)",
        ageRestriction: "18+",
        duration: "2 sa 12 dk",
        description: "Suicide Squad, Corto Maltese adlı bir adaya gönderilir. Orada, gizli bir deneyi durdurmak zorundadırlar. Ancak işler planlandığı gibi gitmez ve ekip hayatta kalmak için mücadele eder.",
        starring: ["Margot Robbie", "Idris Elba", "John Cena", "Viola Davis"],
        tags: ["Aksiyon", "Komedi", "Süper Kahraman", "Suç"],
        poster: "https://m.media-amazon.com/images/M/MV5BMWU3Y2NlZmEtMjJjNS00ZWMxLWE1MzctYWYyMjMzMDdkNTE4XkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 10,
        title: "Black Widow",
        rating: "6.7 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 14 dk",
        description: "Natasha Romanoff, kız kardeşi Yelena ile yeniden bir araya gelir. Birlikte, geçmişlerindeki karanlık sırları ortaya çıkarırlar ve güçlü bir düşmanla yüzleşirler.",
        starring: ["Scarlett Johansson", "Florence Pugh", "David Harbour", "Rachel Weisz"],
        tags: ["Aksiyon", "Macera", "Gerilim", "Süper Kahraman"],
        poster: "https://lumiere-a.akamaihd.net/v1/images/image_b97b56f3.jpeg?region=0,0,540,810"
    },
    {
        id: 11,
        title: "Shang-Chi and the Legend of the Ten Rings",
        rating: "7.4 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 12 dk",
        description: "Shang-Chi, babasının karanlık örgütünden kaçmış ve normal bir hayat sürmektedir. Ancak geçmişi onu bulur ve on Ten Rings örgütüyle yüzleşmek zorunda kalır.",
        starring: ["Simu Liu", "Awkwafina", "Tony Leung", "Michelle Yeoh"],
        tags: ["Aksiyon", "Macera", "Fantastik", "Süper Kahraman"],
        poster: "https://cdn.marvel.com/content/1x/stmb_specialod_48.25x72_wenwu_tony_v2_lg.jpg"
    },
    {
        id: 12,
        title: "Eternals",
        rating: "6.3 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 37 dk",
        description: "Binlerce yıldır Dünya'da yaşayan ölümsüz Eternals, insanlığı korumak için bir araya gelir. Ancak yeni bir tehdit ortaya çıktığında, birlikte hareket etmek zorunda kalırlar.",
        starring: ["Gemma Chan", "Richard Madden", "Angelina Jolie", "Salma Hayek"],
        tags: ["Aksiyon", "Drama", "Fantastik", "Süper Kahraman"],
        poster: "https://image.tmdb.org/t/p/w500/6AdXwFTRTAzggD2QUTt5B7JFGKL.jpg"
    },
    {
        id: 13,
        title: "Free Guy",
        rating: "7.1 (IMDB)",
        ageRestriction: "13+",
        duration: "1 sa 55 dk",
        description: "Bir video oyunu karakteri olan Guy, rutin hayatını yaşarken gerçek dünyanın bir simülasyon olduğunu keşfeder. Oyunu değiştirmek ve hayatını kontrol etmek için harekete geçer.",
        starring: ["Ryan Reynolds", "Jodie Comer", "Taika Waititi", "Lil Rel Howery"],
        tags: ["Komedi", "Aksiyon", "Bilim Kurgu", "Macera"],
        poster: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg"
    },
    {
        id: 14,
        title: "Cruella",
        rating: "6.8 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 14 dk",
        description: "Genç Estella, moda dünyasında kendine bir yer bulmaya çalışır. Ancak karanlık tarafı Cruella ortaya çıktığında, moda endüstrisinde devrim yaratır.",
        starring: ["Emma Stone", "Emma Thompson", "Joel Fry", "Paul Walter Hauser"],
        tags: ["Komedi", "Drama", "Suç", "Aile"],
        poster: "https://image.tmdb.org/t/p/w500/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg"
    },
    {
        id: 15,
        title: "Jungle Cruise",
        rating: "6.6 (IMDB)",
        ageRestriction: "13+",
        duration: "2 sa 7 dk",
        description: "Amazon'da bir efsanevi ağacı arayan bir bilim insanı, kaba bir nehir teknesi kaptanıyla çalışmak zorunda kalır. Birlikte tehlikeli bir maceraya atılırlar.",
        starring: ["Dwayne Johnson", "Emily Blunt", "Edgar Ramírez", "Jesse Plemons"],
        tags: ["Aksiyon", "Macera", "Komedi", "Fantastik"],
        poster: "https://m.media-amazon.com/images/I/81wk4AV2l-L._AC_UF1000,1000_QL80_.jpg"
    }
];

function renderFeaturedMovie(movie) {
    document.getElementById('featuredTitle').textContent = movie.title;
    document.getElementById('featuredRating').textContent = movie.rating;
    document.getElementById('featuredAge').textContent = movie.ageRestriction;
    document.getElementById('featuredDuration').textContent = movie.duration;
    document.getElementById('featuredDescription').textContent = movie.description;
    document.getElementById('featuredStarring').textContent = movie.starring.join(', ');
    document.getElementById('featuredTags').textContent = movie.tags.join(', ');
    
    const featuredPoster = document.getElementById('featuredPoster');
    featuredPoster.src = movie.poster;
    featuredPoster.alt = movie.title;
    
    featuredPoster.onerror = function() {
        this.style.display = 'none';
        const fallback = this.parentElement.querySelector('.featured-poster-fallback');
        if (!fallback) {
            const fallbackDiv = document.createElement('div');
            fallbackDiv.className = 'featured-poster-fallback';
            fallbackDiv.innerHTML = `
                <div class="fallback-icon-large">🎬</div>
                <div class="fallback-title-large">${movie.title}</div>
            `;
            this.parentElement.appendChild(fallbackDiv);
        } else {
            fallback.style.display = 'flex';
        }
    };
    
    featuredPoster.onload = function() {
        this.style.display = 'block';
        const fallback = this.parentElement.querySelector('.featured-poster-fallback');
        if (fallback) {
            fallback.style.display = 'none';
        }
    };
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    const posterDiv = document.createElement('div');
    posterDiv.className = 'movie-poster-container';
    
    const img = document.createElement('img');
    img.src = movie.poster;
    img.alt = movie.title;
    img.className = 'movie-poster';
    
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'movie-poster-fallback';
    fallbackDiv.innerHTML = `
        <div class="fallback-icon">🎬</div>
        <div class="fallback-title">${movie.title}</div>
    `;
    
    img.onerror = function() {
        this.style.display = 'none';
        fallbackDiv.style.display = 'flex';
    };
    
    img.onload = function() {
        this.style.display = 'block';
        fallbackDiv.style.display = 'none';
    };
    
    posterDiv.appendChild(img);
    posterDiv.appendChild(fallbackDiv);
    
    const infoDiv = document.createElement('div');
    infoDiv.className = 'movie-info';
    infoDiv.innerHTML = `
        <h3 class="movie-title">${movie.title}</h3>
        <div class="movie-meta">
            <span class="age-restriction">${movie.ageRestriction}</span>
            <span class="duration">${movie.duration}</span>
        </div>
        <button class="play-btn">► Şimdi Oynat</button>
    `;
    
    card.appendChild(posterDiv);
    card.appendChild(infoDiv);
    
    return card;
}

function renderPopularMovies() {
    const popularMovies = movies.slice(0, 8);
    const container = document.getElementById('popularMovies');
    container.innerHTML = '';
    popularMovies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

function renderRecommendedMovies() {
    const recommendedMovies = movies.slice(7, 15);
    const container = document.getElementById('recommendedMovies');
    container.innerHTML = '';
    recommendedMovies.forEach(movie => {
        const card = createMovieCard(movie);
        container.appendChild(card);
    });
}

function initializeApp() {
    const featuredMovie = movies[0];
    renderFeaturedMovie(featuredMovie);
    renderPopularMovies();
    renderRecommendedMovies();
}

function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        renderPopularMovies();
        renderRecommendedMovies();
        return;
    }
    
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        movie.starring.some(actor => actor.toLowerCase().includes(searchTerm))
    );
    
    const popularContainer = document.getElementById('popularMovies');
    const recommendedContainer = document.getElementById('recommendedMovies');
    
    popularContainer.innerHTML = '';
    recommendedContainer.innerHTML = '';
    
    if (filteredMovies.length > 0) {
        filteredMovies.forEach(movie => {
            const card = createMovieCard(movie);
            popularContainer.appendChild(card);
        });
    } else {
        popularContainer.innerHTML = '<p style="color: #b3b3b3; grid-column: 1/-1; text-align: center; padding: 2rem;">Film bulunamadı.</p>';
    }
}

function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupHamburgerMenu();
    
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);
    
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('play-btn') || e.target.closest('.play-btn')) {
            e.preventDefault();
            e.stopPropagation();
            alert('Oynatma özelliği yakında eklenecek!');
        }
    });
});
