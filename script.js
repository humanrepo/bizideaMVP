// Sample business ideas data
const businessIdeas = [
    {
        title: "Service de livraison express pour commerces locaux",
        location: "Paris, France",
        potential: 85,
        competition: 45,
        investment: "5,000 - 10,000€",
        industry: "Services",
        description: "Plateforme connectant les petits commerces avec des livreurs indépendants pour des livraisons en moins de 2h.",
        tags: ["Local", "Logistique", "Digital"]
    },
    {
        title: "Application de gestion des déchets pour entreprises",
        location: "France",
        potential: 78,
        competition: 30,
        investment: "15,000 - 25,000€",
        industry: "Écologie",
        description: "Solution SaaS pour aider les entreprises à optimiser leur gestion des déchets et réduire leurs coûts.",
        tags: ["SaaS", "Écologie", "B2B"]
    },
    {
        title: "Marketplace de produits artisanaux régionaux",
        location: "Europe",
        potential: 72,
        competition: 60,
        investment: "10,000 - 20,000€",
        industry: "E-commerce",
        description: "Plateforme mettant en avant les artisans locaux avec traçabilité des produits et histoire des créateurs.",
        tags: ["E-commerce", "Artisanat", "Local"]
    },
    {
        title: "Service d'abonnement pour entretien des espaces verts",
        location: "Banlieues urbaines",
        potential: 68,
        competition: 40,
        investment: "3,000 - 8,000€",
        industry: "Services",
        description: "Abonnement mensuel pour l'entretien régulier des jardins et espaces verts des particuliers.",
        tags: ["Abonnement", "Jardinage", "Service"]
    },
    {
        title: "Plateforme de cours en ligne sur les compétences artisanales",
        location: "Monde",
        potential: 80,
        competition: 55,
        investment: "20,000 - 50,000€",
        industry: "Éducation",
        description: "Cours premium enseignés par des artisans experts pour préserver les savoir-faire traditionnels.",
        tags: ["Éducation", "Digital", "Artisanat"]
    },
    {
        title: "Service de consultation en transition écologique",
        location: "France",
        potential: 75,
        competition: 35,
        investment: "8,000 - 15,000€",
        industry: "Conseil",
        description: "Accompagnement personnalisé des entreprises dans leur transition vers des pratiques plus durables.",
        tags: ["Conseil", "Écologie", "B2B"]
    }
];

// AI responses for the chat
const aiResponses = [
    "C'est une excellente question ! Pour évaluer le potentiel de votre idée, je recommande d'analyser la taille du marché, la concurrence existante et les barrières à l'entrée. Pouvez-vous me parler plus de votre concept ?",
    "D'après mes analyses, ce secteur présente des opportunités intéressantes. Les tendances actuelles montrent une croissance de la demande. Avez-vous déjà identifié votre cible principale ?",
    "Je vous recommande de creuser cette piste. Voici quelques données qui pourraient vous aider : commencez par valider votre idée auprès de clients potentiels avant d'investir massivement.",
    "J'ai analysé plusieurs cas similaires. Pour maximiser vos chances de succès, je conseille de vous concentrer sur un segment de marché spécifique au début.",
    "Excellente approche ! Pour ce type de business, il est crucial de bien comprendre les réglementations en vigueur. Avez-vous déjà consulté un expert juridique ?",
    "Cette idée a du potentiel ! Je suggère de commencer par une version MVP (Minimum Viable Product) pour tester le marché rapidement et à moindre coût.",
    "Intéressant ! Pour ce secteur, la différenciation sera clé. Qu'est-ce qui rendrait votre offre unique par rapport à la concurrence existante ?",
    "Bonne réflexion ! N'oubliez pas d'analyser les aspects financiers : coûts d'acquisition client, lifetime value, et seuil de rentabilité. Voulez-vous que je vous aide avec ces calculs ?"
];

// DOM elements
let currentIdeas = [...businessIdeas];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeMobileMenu();
    initializeFAQ();
    initializeChat();
    initializeLanguageSelector();
});

function initializeEventListeners() {
    // Form submission handler
    const ideaForm = document.getElementById('ideaForm');
    if (ideaForm) {
        ideaForm.addEventListener('submit', handleIdeaGeneration);
    }

    // Sort functionality
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', handleSortChange);
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function initializeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}

function initializeFAQ() {
    document.querySelectorAll('.faq-toggle').forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const icon = button.querySelector('i');
            
            // Close other open FAQs
            document.querySelectorAll('.faq-content').forEach(otherContent => {
                if (otherContent !== content && !otherContent.classList.contains('hidden')) {
                    otherContent.classList.add('hidden');
                    const otherIcon = otherContent.previousElementSibling.querySelector('i');
                    otherIcon.classList.remove('rotate-180');
                }
            });
            
            // Toggle current FAQ
            content.classList.toggle('hidden');
            icon.classList.toggle('rotate-180');
        });
    });
}

function initializeChat() {
    const chatSend = document.getElementById('chatSend');
    const chatInput = document.getElementById('chatInput');
    
    if (chatSend && chatInput) {
        chatSend.addEventListener('click', handleChatMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleChatMessage();
            }
        });
    }
}

function initializeLanguageSelector() {
    document.querySelectorAll('.language-dropdown a').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = item.textContent;
            const langCode = lang.substring(0, 2).toUpperCase();
            document.querySelector('.language-selector button span').textContent = langCode;
            
            // Hide dropdown
            document.querySelector('.language-dropdown').style.display = 'none';
            setTimeout(() => {
                document.querySelector('.language-dropdown').style.display = '';
            }, 100);
            
            // Here you would typically implement language change logic
            console.log('Language changed to:', lang);
        });
    });
}

function handleIdeaGeneration(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target);
    const filters = {
        location: formData.get('location') || document.getElementById('location').value,
        city: formData.get('city') || document.getElementById('city').value,
        industry: formData.get('industry') || document.getElementById('industry').value,
        budget: formData.get('budget') || document.getElementById('budget').value,
        keywords: formData.get('keywords') || document.getElementById('keywords').value
    };
    
    // Show loading state
    showLoadingState();
    
    // Filter ideas based on form data
    setTimeout(() => {
        const filteredIdeas = filterIdeas(filters);
        displayIdeas(filteredIdeas);
    }, 2000);
}

function showLoadingState() {
    const resultsSection = document.getElementById('resultsSection');
    const loadingIdeas = document.getElementById('loadingIdeas');
    const ideasContainer = document.getElementById('ideasContainer');
    
    resultsSection.classList.remove('hidden');
    loadingIdeas.classList.remove('hidden');
    ideasContainer.classList.add('hidden');
    
    // Scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

function filterIdeas(filters) {
    let filtered = [...businessIdeas];
    
    // Apply filters
    if (filters.industry) {
        filtered = filtered.filter(idea => 
            idea.industry.toLowerCase().includes(filters.industry.toLowerCase())
        );
    }
    
    if (filters.budget) {
        // Simple budget filtering logic
        filtered = filtered.filter(idea => {
            const investment = idea.investment.toLowerCase();
            switch(filters.budget) {
                case 'low':
                    return investment.includes('3,000') || investment.includes('5,000');
                case 'medium':
                    return investment.includes('10,000') || investment.includes('15,000') || investment.includes('20,000');
                case 'high':
                    return investment.includes('25,000') || investment.includes('50,000');
                default:
                    return true;
            }
        });
    }
    
    if (filters.keywords) {
        const keywords = filters.keywords.toLowerCase().split(',').map(k => k.trim());
        filtered = filtered.filter(idea => 
            keywords.some(keyword => 
                idea.description.toLowerCase().includes(keyword) ||
                idea.title.toLowerCase().includes(keyword) ||
                idea.tags.some(tag => tag.toLowerCase().includes(keyword))
            )
        );
    }
    
    // If no results, return a subset of all ideas
    if (filtered.length === 0) {
        filtered = businessIdeas.slice(0, 3);
    }
    
    return filtered;
}

function displayIdeas(ideas) {
    const loadingIdeas = document.getElementById('loadingIdeas');
    const ideasContainer = document.getElementById('ideasContainer');
    
    // Hide loading
    loadingIdeas.classList.add('hidden');
    
    // Clear previous results
    ideasContainer.innerHTML = '';
    
    // Generate ideas HTML
    ideas.forEach((idea, index) => {
        const ideaElement = createIdeaCard(idea, index);
        ideasContainer.appendChild(ideaElement);
    });
    
    // Show results with animation
    ideasContainer.classList.remove('hidden');
    ideasContainer.classList.add('fade-in');
    
    // Update current ideas for sorting
    currentIdeas = ideas;
}

function createIdeaCard(idea, index) {
    const ideaElement = document.createElement('div');
    ideaElement.className = 'bg-white p-6 rounded-xl idea-card border border-gray-100';
    
    const tagsHtml = idea.tags ? idea.tags.map(tag => 
        `<span class="text-xs px-2 py-1 bg-blue-100 text-blue-800 rounded-full">${tag}</span>`
    ).join('') : '';
    
    ideaElement.innerHTML = `
        <div class="flex justify-between items-start mb-4">
            <div>
                <span class="text-xs text-gray-500">${idea.location} • ${idea.industry}</span>
                <h3 class="text-lg font-bold text-dark mt-1">${idea.title}</h3>
            </div>
            <button class="text-gray-400 hover:text-primary-600 bookmark-btn" data-idea-index="${index}">
                <i class="far fa-bookmark"></i>
            </button>
        </div>
        <p class="text-gray-600 mb-4">${idea.description}</p>
        ${tagsHtml ? `<div class="flex flex-wrap gap-2 mb-4">${tagsHtml}</div>` : ''}
        <div class="grid sm:grid-cols-3 gap-4 mb-6">
            <div>
                <div class="text-xs text-gray-500 mb-1">Potentiel</div>
                <div class="flex items-center">
                    <div class="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div class="bg-green-500 h-2 rounded-full transition-all duration-1000" style="width: ${idea.potential}%"></div>
                    </div>
                    <span class="text-sm font-medium">${idea.potential}/100</span>
                </div>
            </div>
            <div>
                <div class="text-xs text-gray-500 mb-1">Concurrence</div>
                <div class="flex items-center">
                    <div class="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div class="bg-yellow-500 h-2 rounded-full transition-all duration-1000" style="width: ${idea.competition}%"></div>
                    </div>
                    <span class="text-sm font-medium">${idea.competition}/100</span>
                </div>
            </div>
            <div>
                <div class="text-xs text-gray-500 mb-1">Investissement</div>
                <div class="text-sm font-medium text-dark">${idea.investment}</div>
            </div>
        </div>
        <div class="flex space-x-3">
            <button class="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 rounded-lg font-medium btn-primary analyze-btn" data-idea-index="${index}">
                Voir l'analyse
            </button>
            <button class="w-10 h-10 flex items-center justify-center border border-gray-300 hover:bg-gray-100 rounded-lg share-btn" data-idea-index="${index}">
                <i class="fas fa-share-alt text-gray-600"></i>
            </button>
        </div>
    `;
    
    // Add event listeners
    const bookmarkBtn = ideaElement.querySelector('.bookmark-btn');
    const analyzeBtn = ideaElement.querySelector('.analyze-btn');
    const shareBtn = ideaElement.querySelector('.share-btn');
    
    bookmarkBtn.addEventListener('click', () => handleBookmark(index));
    analyzeBtn.addEventListener('click', () => handleAnalyze(index));
    shareBtn.addEventListener('click', () => handleShare(index));
    
    return ideaElement;
}

function handleSortChange(e) {
    const sortBy = e.target.value;
    let sortedIdeas = [...currentIdeas];
    
    switch(sortBy) {
        case 'potential':
            sortedIdeas.sort((a, b) => b.potential - a.potential);
            break;
        case 'newest':
            // For demo purposes, reverse the array
            sortedIdeas.reverse();
            break;
        case 'investment':
            sortedIdeas.sort((a, b) => {
                const aInvestment = parseInt(a.investment.replace(/[^\d]/g, ''));
                const bInvestment = parseInt(b.investment.replace(/[^\d]/g, ''));
                return aInvestment - bInvestment;
            });
            break;
    }
    
    displayIdeas(sortedIdeas);
}

function handleBookmark(index) {
    const bookmarkBtn = document.querySelector(`[data-idea-index="${index}"].bookmark-btn i`);
    bookmarkBtn.classList.toggle('far');
    bookmarkBtn.classList.toggle('fas');
    
    // Here you would typically save to localStorage or send to server
    console.log('Bookmarked idea:', currentIdeas[index].title);
}

function handleAnalyze(index) {
    const idea = currentIdeas[index];
    // Here you would typically open a modal or navigate to a detailed analysis page
    alert(`Analyse détaillée pour: ${idea.title}\n\nCette fonctionnalité ouvrirait une page d'analyse complète avec des données de marché, des conseils personnalisés et un plan d'action.`);
}

function handleShare(index) {
    const idea = currentIdeas[index];
    if (navigator.share) {
        navigator.share({
            title: idea.title,
            text: idea.description,
            url: window.location.href
        });
    } else {
        // Fallback for browsers that don't support Web Share API
        const shareText = `Découvrez cette idée business: ${idea.title} - ${idea.description}`;
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Lien copié dans le presse-papiers !');
        });
    }
}

function handleChatMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
        const chatContainer = document.getElementById('chatContainer');
        
        // Add user message
        addChatMessage(message, 'user');
        
        // Clear input
        chatInput.value = '';
        
        // Add loading indicator for AI response
        addLoadingMessage();
        
        // Simulate AI response after delay
        setTimeout(() => {
            removeLoadingMessage();
            const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
            addChatMessage(randomResponse, 'ai');
        }, 1500);
    }
}

function addChatMessage(message, sender) {
    const chatContainer = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    
    if (sender === 'user') {
        messageDiv.className = 'flex justify-end mb-4';
        messageDiv.innerHTML = `
            <div class="chat-bubble user-bubble p-4">
                <p>${message}</p>
            </div>
        `;
    } else {
        messageDiv.className = 'flex justify-start mb-4';
        messageDiv.innerHTML = `
            <div class="chat-bubble ai-bubble p-4">
                <p>${message}</p>
            </div>
        `;
    }
    
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function addLoadingMessage() {
    const chatContainer = document.getElementById('chatContainer');
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'flex justify-start mb-4';
    loadingDiv.id = 'chat-loading';
    loadingDiv.innerHTML = `
        <div class="chat-bubble ai-bubble p-4">
            <div class="loading-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    chatContainer.appendChild(loadingDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function removeLoadingMessage() {
    const loadingMessage = document.getElementById('chat-loading');
    if (loadingMessage) {
        loadingMessage.remove();
    }
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});