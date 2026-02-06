// relationships.js - Shared JavaScript for all relationship pages

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all relationship page features
    initDropdown();
    initAssessments();
    initPracticeExercises();
    loadSavedData();
    initQuickNavigation();
});


document.addEventListener('DOMContentLoaded', function() {
    // Load saved assessment data (keep this part)
    const saved = localStorage.getItem('relationshipAssessment');
    if (saved) {
        const data = JSON.parse(saved);
        Object.keys(data).forEach(key => {
            const checkbox = document.getElementById(key);
            if (checkbox) {
                checkbox.checked = data[key];
            }
        });
    }
    
    // Highlight current page (NEW CODE)
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a.btn-light');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.style.backgroundColor = 'rgba(255, 215, 0, 0.3)'; // Yellow
            link.style.color = '#333';
            link.style.fontWeight = 'bold';
            link.style.border = '2px solid #ffd700';
        }
    });
});

// ==================== ASSESSMENT FUNCTIONALITY ====================

function initAssessments() {
    // Initialize all checkboxes to save state
    const checkboxes = document.querySelectorAll('.assessment-questions input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', saveAssessmentState);
    });
    
    // Load saved state
    loadAssessmentState();
}

function saveAssessmentState() {
    const assessmentData = {};
    const checkboxes = document.querySelectorAll('.assessment-questions input[type="checkbox"]');
    
    checkboxes.forEach((checkbox, index) => {
        assessmentData[`q${index + 1}`] = checkbox.checked;
    });
    
    localStorage.setItem('relationshipAssessment', JSON.stringify(assessmentData));
}

function loadAssessmentState() {
    const saved = localStorage.getItem('relationshipAssessment');
    if (saved) {
        const data = JSON.parse(saved);
        Object.keys(data).forEach(key => {
            const checkbox = document.getElementById(key);
            if (checkbox) {
                checkbox.checked = data[key];
            }
        });
    }
}

// Main assessment function (for relationships.html)
function assessRelationship() {
    const checkboxes = document.querySelectorAll('.assessment-questions input[type="checkbox"]:checked');
    const totalCheckboxes = document.querySelectorAll('.assessment-questions input[type="checkbox"]').length;
    const count = checkboxes.length;
    
    let result = '';
    let advice = '';
    let colorClass = '';
    
    if (count >= 4) {
        result = "🌟 Excellent! This appears to be a very healthy relationship!";
        advice = "Continue nurturing these positive aspects and maintaining open communication.";
        colorClass = 'text-success';
    } else if (count >= 2) {
        result = "👍 Good! This relationship has many positive aspects.";
        advice = "Focus on improving the areas where you answered 'no'. Consider discussing boundaries and communication styles.";
        colorClass = 'text-warning';
    } else {
        result = "⚠️ Needs Attention. This relationship may need significant work.";
        advice = "Your well-being is important. Consider seeking professional help or evaluating if this relationship is healthy for you.";
        colorClass = 'text-danger';
    }
    
    const percentage = Math.round((count / totalCheckboxes) * 100);
    
    const resultBox = document.getElementById('assessment-result');
    const resultText = document.getElementById('result-text');
    
    if (resultBox && resultText) {
        resultText.innerHTML = `
            <h6 class="${colorClass}">${result}</h6>
            <p class="small mb-2">You checked ${count} out of ${totalCheckboxes} boxes (${percentage}%)</p>
            <p class="small text-secondary mb-0">${advice}</p>
        `;
        resultBox.style.display = 'block';
        
        // Save this assessment result
        localStorage.setItem('lastAssessment', JSON.stringify({
            date: new Date().toISOString(),
            score: percentage,
            count: count,
            total: totalCheckboxes
        }));
    }
}

// ==================== QUICK NAVIGATION ====================

function initQuickNavigation() {
    // Add hover effects to quick navigation cards
    const topicCards = document.querySelectorAll('.topic-card');
    topicCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ==================== PRACTICE EXERCISES ====================

function initPracticeExercises() {
    // Initialize any practice exercise buttons
    const practiceButtons = document.querySelectorAll('.practice-btn');
    practiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const exercise = this.dataset.exercise;
            if (exercise) {
                startPracticeExercise(exercise);
            }
        });
    });
}

function startPracticeExercise(exerciseName) {
    const exercises = {
        'active-listening': {
            title: 'Active Listening Practice',
            steps: [
                'Choose a conversation partner',
                'Listen without interrupting for 2 minutes',
                'Repeat back what you heard',
                'Ask one clarifying question'
            ]
        },
        'boundary-setting': {
            title: 'Boundary Setting Practice',
            steps: [
                'Identify one small boundary to set',
                'Use the "I feel... when... I need..." formula',
                'Practice saying it out loud',
                'Set the boundary with someone this week'
            ]
        }
    };
    
    const exercise = exercises[exerciseName];
    if (exercise) {
        alert(`${exercise.title}\n\nSteps:\n${exercise.steps.map((step, i) => `${i+1}. ${step}`).join('\n')}`);
    }
}

// ==================== WEEKLY CHALLENGE ====================

function startChallenge() {
    const today = new Date().toDateString();
    const challenge = {
        name: "Active Listening Challenge",
        startDate: today,
        progress: 0,
        completed: false,
        dailyTasks: [
            "Day 1: Listen without interrupting once",
            "Day 2: Ask one clarifying question",
            "Day 3: Summarize what someone said",
            "Day 4: Practice with a difficult conversation",
            "Day 5: Give full attention (no phone)"
        ]
    };
    
    localStorage.setItem('currentChallenge', JSON.stringify(challenge));
    
    alert('🎯 Challenge Started!\n\n' + 
          'This week, practice active listening:\n\n' +
          challenge.dailyTasks.join('\n') +
          '\n\nCheck back daily to track your progress!');
    
    // Update button if it exists
    const startBtn = document.querySelector('.challenge-start-btn');
    if (startBtn) {
        startBtn.textContent = 'Track Progress';
        startBtn.classList.remove('btn-success');
        startBtn.classList.add('btn-primary');
        startBtn.onclick = showChallengeProgress;
    }
}

function showChallengeProgress() {
    const saved = localStorage.getItem('currentChallenge');
    if (saved) {
        const challenge = JSON.parse(saved);
        alert(`📊 Challenge Progress: ${challenge.progress}%\n\n` +
              `Current Task: ${challenge.dailyTasks[Math.min(challenge.progress / 20, 4)]}\n\n` +
              `Keep going! Practice makes perfect.`);
    } else {
        startChallenge();
    }
}

// ==================== DATA LOADING ====================

function loadSavedData() {
    // Load any saved challenge progress
    const challenge = localStorage.getItem('currentChallenge');
    if (challenge) {
        const startBtn = document.querySelector('.challenge-start-btn');
        if (startBtn) {
            startBtn.textContent = 'Track Progress';
            startBtn.classList.remove('btn-success');
            startBtn.classList.add('btn-primary');
            startBtn.onclick = showChallengeProgress;
        }
    }
    
    // Load saved assessments
    loadAssessmentState();
}

// ==================== HELPER FUNCTIONS ====================

function showToast(message, type = 'info') {
    // Remove existing toast
    const existingToast = document.querySelector('.custom-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `custom-toast alert alert-${type} alert-dismissible fade show`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    
    toast.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;
    
    document.body.appendChild(toast);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.remove();
        }
    }, 5000);
}

// ==================== EXPORT FUNCTIONS ====================

// Make functions available globally
window.assessRelationship = assessRelationship;
window.startChallenge = startChallenge;
window.startPracticeExercise = startPracticeExercise;