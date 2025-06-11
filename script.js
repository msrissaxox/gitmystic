// Initialize particles.js
particlesJS('particles-js',
  {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "star"
      },
      "opacity": {
        "value": 0.5,
        "random": true
      },
      "size": {
        "value": 3,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  }
);

// Mystical interpretations
const codeAuras = [
    "The Midnight Coder 🌙",
    "The Dawn Debugger 🌅",
    "The Binary Whisperer 👻",
    "The Algorithm Alchemist ⚗️",
    "The Stack Sorcerer 🔮",
    "The Query Quest Master 🗝️",
    "The Function Familiar 🐈‍⬛",
    "The Git Guardian 🛡️"
];

const languageAuras = {
    JavaScript: "✨ The language of web wizardry and DOM manipulation",
    Python: "🐍 The serpent of data and machine learning mysteries",
    Ruby: "💎 The gem of elegant expressions and rail-bound journeys",
    Java: "☕ The brew of enterprise enchantments",
    "C++": "⚡ The conjurer of computational power",
    TypeScript: "🔷 The prophecy of strongly-typed destinies"
};

const commitMessages = [
    "I sense a great refactoring in your future... 🔮",
    "The stars align for a major version release... ⭐",
    "Beware of the merge conflicts that approach... ⚠️",
    "Your pull requests shall be blessed with swift approvals... 🙏",
    "A legacy codebase seeks your healing touch... 💫",
    "The full moon brings debugging clarity... 🌕"
];

async function revealDestiny() {
    const username = document.getElementById('githubUsername').value;
    if (!username) {
        alert("The spirits require a GitHub username to channel your code destiny!");
        return;
    }

    // Show loading crystal
    document.querySelector('.loading-crystal').classList.remove('hidden');
    document.querySelector('.reading-section').classList.add('hidden');

    try {
        // Fetch GitHub profile data
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userData = await response.json();

        if (response.status === 404) {
            alert("The GitHub spirits cannot locate this soul... 👻");
            return;
        }

        // Fetch recent activity
        const activityResponse = await fetch(`https://api.github.com/users/${username}/events`);
        const activityData = await activityResponse.await;

        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const reposData = await reposResponse.json();

        // Generate mystical readings
        setTimeout(() => {
            displayReadings(userData, activityData, reposData);
        }, 2000); // Add dramatic pause for effect

    } catch (error) {
        alert("The mystical connection to GitHub has been disturbed... 🌌");
        console.error("Mystical error:", error);
    }
}

function displayReadings(userData, activityData, reposData) {
    // Hide loading, show readings
    document.querySelector('.loading-crystal').classList.add('hidden');
    document.querySelector('.reading-section').classList.remove('hidden');

    // Past Reading
    const pastReading = document.getElementById('pastReading');
    pastReading.innerHTML = generatePastReading(userData);

    // Present Reading
    const presentReading = document.getElementById('presentReading');
    presentReading.innerHTML = generatePresentReading(reposData);

    // Future Reading
    const futureReading = document.getElementById('futureReading');
    futureReading.innerHTML = generateFutureReading();

    // Aura Reading
    const auraReading = document.getElementById('auraReading');
    auraReading.innerHTML = generateAuraReading(userData, reposData);

    // Destiny Metrics
    const destinyMetrics = document.getElementById('destinyMetrics');
    destinyMetrics.innerHTML = generateDestinyMetrics(userData, reposData);

    // Add magical entrance animation
    document.querySelector('.reading-section').classList.add('visible');
}

function generatePastReading(userData) {
    const creationDate = new Date(userData.created_at);
    const yearsOfCoding = new Date().getFullYear() - creationDate.getFullYear();
    
    return `
        <p>🌟 The GitHub spirits reveal that your journey began ${yearsOfCoding} moons ago...</p>
        <p>In the time of ${creationDate.toLocaleDateString()}, you emerged into the digital realm.</p>
        <p>${getRandomElement(commitMessages)}</p>
    `;
}

function generatePresentReading(reposData) {
    const languages = [...new Set(reposData.map(repo => repo.language).filter(Boolean))];
    const randomAura = getRandomElement(codeAuras);
    
    return `
        <p>✨ Your current coding aura reveals you as:</p>
        <h4>${randomAura}</h4>
        <p>The languages that speak through you:</p>
        <p>${languages.map(lang => languageAuras[lang] || `${lang} - The mystic tongue`).join('<br>')}</p>
    `;
}

function generateFutureReading() {
    return `
        <p>🔮 The crystal ball swirls with visions of your code destiny...</p>
        <p>${getRandomElement(commitMessages)}</p>
        <p>${getRandomElement(commitMessages)}</p>
        <p>The repositories align for a great contribution...</p>
    `;
}

function generateAuraReading(userData, reposData) {
    const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const auraColors = ['purple', 'blue', 'gold', 'green', 'silver'];
    const auraColor = getRandomElement(auraColors);
    
    return `
        <p>Your GitHub aura glows with ${auraColor} energy...</p>
        <p>⭐ ${totalStars} stars illuminate your path</p>
        <p>The spirits speak of ${userData.public_repos} sacred repositories in your care</p>
        <p>Your following of ${userData.followers} disciples speaks to your influence in the digital realm</p>
    `;
}

function generateDestinyMetrics(userData, reposData) {
    const languages = reposData.map(repo => repo.language).filter(Boolean);
    const mostUsedLanguage = mode(languages);
    
    return `
        <p>🌟 Primary Code Alignment: ${mostUsedLanguage || "The Ancient Scripts"}</p>
        <p>🏆 Repository Constellation: ${userData.public_repos} points of power</p>
        <p>👥 Karmic Connection Level: ${userData.followers} souls</p>
        <p>🔮 Digital Impact Rating: ${calculateMysticalRating(userData, reposData)}/10</p>
    `;
}

// Utility functions
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function mode(array) {
    return array.sort((a,b) =>
        array.filter(v => v === a).length - array.filter(v => v === b).length
    ).pop();
}

function calculateMysticalRating(userData, reposData) {
    const totalStars = reposData.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const rating = Math.min(10, Math.ceil((totalStars + userData.followers) / 100));
    return rating;
}