<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Onin</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', sans-serif;
            background-color: #232323;
            color: #fff;
            text-align: center;
            overflow-x: hidden; /* Evita que la página se mueva hacia la derecha cuando se hace el deslizamiento */
        }
        header {
            padding: 170px 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transition: transform 0.5s ease-in-out; /* Add transition */
        }
        header.transition-left {
            transform: translateX(-100%); 
        }
        header img {
            width: 170px;
            margin-bottom: -30px;
            transition: transform 1s ease-in-out;
        }
        h1 {
            font-size: 30px;
            margin-bottom: 0px;
            font-weight: 400;
            transition: transform 1s ease-in-out;
        }
        h2 {
            font-size: 20px;
            font-weight: 400;
            margin-top: 0;
            margin-bottom: -190px;
            transition: transform 1s ease-in-out;
        }
        nav {
            font-size: 20px;
            display: flex;
            justify-content: center;
            gap: 60px;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            padding: 15px 30px;
            border: 2px solid transparent;
            border-radius: 30px;
            transition: all 0.3s ease;
        }
        nav a:hover {
            color: #fff;
            background-color: #210053;
            border-color: #210053;
        }
        .section {
            display: flex;
            justify-content: center;
            gap: 80px;
            margin-top: 50px;
            transition: transform 1s ease-in-out;
        }
        .section div {
            text-align: center;
        }
        .section h3 {
            font-weight: bold;
            margin-bottom: 10px;
            font-size: 28px;
            transition: transform 1s ease-in-out;
        }
        .section ul {
            list-style-type: none;
            padding: 0;
        }
        .section ul li {
            font-size: 22px;
            margin: 10px 0;
        }
        .section a {
            color: #fff;
            text-decoration: none;
            padding: 10px;
            border-radius: 30px;
            transition: background-color 0.3s ease, color 0.3s ease;
        }
        .section a:hover {
            background-color: #210053;
            color: #fff;
        }

        /* Animación de deslizamiento hacia la izquierda */
        .move-left {
            transform: translateX(-100%); /* Mueve los elementos hacia la izquierda */
        }

        /* New CSS for smooth transition */
        .rotating-text {
          opacity: 0;
          transform: translateY(-20px); /* Adjust as needed */
          transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out; 
        }

        .rotating-text.active {
          opacity: 1;
          transform: translateY(0);
        }
    </style>
</head>
<body>
    <header>
        <img src="logo.png" alt="Logo Onin">
        <h1>Hello! I'm Yerai.</h1>
        <h2>A junior self taught <span id="rotatingText" class="rotating-text">UX/UI</span> Designer</h2> 
    </header>

    <div class="section">
        <div id="projects">
            <h3>Projects</h3>
            <ul>
                <li><a href="poster-design.html" id="poster-link">Poster Design</a></li>
                <li><a href="wallpaper-design.html" id="wallpaper-link">Wallpaper Design</a></li>
                <li><a href="logo-design.html" id="logo-link">Logo Design</a></li>
                <li><a href="ui-ux-design.html" id="ui-ux-design-link">UI / UX Design</a></li>
            </ul>
        </div>
        <div id="aboutme">
            <h3>About Me</h3>
            <ul>
                <li><a href="contact.html" id="aboutme-link">Contact</a></li>
                <li><a href="services.html" id="services-link">Services</a></li>
            </ul>
        </div>
    </div>

    <script>
        const textArray = ["UX/UI", "Logo", "Wallpaper", "Poster"];
        let currentIndex = 0;

        function rotateText() {
            const rotatingTextElement = document.getElementById('rotatingText');
            rotatingTextElement.classList.remove('active'); 

            setTimeout(() => {
                rotatingTextElement.textContent = textArray[currentIndex]; 
                rotatingTextElement.classList.add('active');
                currentIndex = (currentIndex + 1) % textArray.length; 
            }, 500); 
        }

        setInterval(rotateText, 2000); // Change the text every 2 seconds

        const projectLink = document.getElementById('poster-link'); 
        const aboutMeLink = document.getElementById('aboutme-link'); 

        projectLink.addEventListener('click', () => {
          document.querySelector('header').classList.add('transition-left'); 

          setTimeout(() => {
            window.location.href = 'poster-design.html'; 
          }, 500); 
        });

        aboutMeLink.addEventListener('click', () => {
          animateText('About Me');
        });

        function animateText(text) {
          const headerElement = document.querySelector('header');

          const tempElement = document.createElement('div');
          tempElement.style.position = 'absolute';
          tempElement.style.top = headerElement.offsetTop + 'px';
          tempElement.style.left = headerElement.offsetLeft + 'px';
          tempElement.style.width = headerElement.offsetWidth + 'px';
          tempElement.style.height = headerElement.offsetHeight + 'px';
          tempElement.style.backgroundColor = '#232323';
          tempElement.style.color = '#fff';
          tempElement.style.fontSize = '20px';
          tempElement.style.fontWeight = 'bold';
          tempElement.style.transition = 'transform 0.5s ease-in-out';
          tempElement.textContent = text;

          document.body.appendChild(tempElement);

          tempElement.style.transform = 'translateX(-100%)';

          setTimeout(() => {
            document.body.removeChild(tempElement);
            // window.location.href = 'poster-design.html'; // Uncomment for redirection
          }, 500); 
        }
    </script>
</body>
</html>
