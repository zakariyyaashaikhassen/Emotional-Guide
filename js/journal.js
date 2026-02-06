// js/journal.js - Simplified version without mood selection

document.addEventListener('DOMContentLoaded', function() {
    // Word count
    const journalEntry = document.getElementById('journalEntry');
    const wordCountSpan = document.getElementById('wordCount');
    
    journalEntry.addEventListener('input', function() {
        const text = this.value.trim();
        const words = text === '' ? 0 : text.split(/\s+/).length;
        wordCountSpan.textContent = words;
    });
    
    // Journal prompts
    const prompts = [
        "What's one thing you're grateful for today?",
        "What challenged you today, and how did you handle it?",
        "Describe a moment today when you felt at peace.",
        "What's something you learned about yourself recently?",
        "What would you tell your future self about today?",
        "What's a small act of kindness you experienced or gave today?",
        "What emotion was strongest for you today, and why?",
        "What's one thing you're looking forward to?",
        "What's something you need to let go of?",
        "How did you practice self-care today?"
    ];
    
    const dailyPrompt = document.getElementById('daily-prompt');
    const newPromptBtn = document.getElementById('new-prompt');
    
    // Set random prompt on page load
    dailyPrompt.textContent = prompts[Math.floor(Math.random() * prompts.length)];
    
    newPromptBtn.addEventListener('click', function(e) {
        e.preventDefault();
        let newPrompt;
        do {
            newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
        } while (newPrompt === dailyPrompt.textContent && prompts.length > 1);
        
        dailyPrompt.textContent = newPrompt;
    });
    
    // Save entry functionality
    const saveEntryBtn = document.getElementById('saveEntry');
    
    saveEntryBtn.addEventListener('click', function() {
        const title = document.getElementById('journalTitle').value;
        const entry = journalEntry.value;
        
        if (!entry.trim()) {
            alert('Please write something before saving.');
            return;
        }
        
        // Create entry object (without mood)
        const entryObj = {
            id: Date.now(),
            title: title || 'Untitled Entry',
            content: entry,
            date: new Date().toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            wordCount: entry.trim().split(/\s+/).length
        };
        
        // Save to localStorage
        let entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
        entries.unshift(entryObj); // Add to beginning
        localStorage.setItem('journalEntries', JSON.stringify(entries));
        
        // Show success message
        alert('Entry saved successfully!');
        
        // Clear form
        document.getElementById('journalTitle').value = '';
        journalEntry.value = '';
        wordCountSpan.textContent = '0';
        
        // Update entries list
        updateEntriesList();
    });
    
    // Function to update entries list
    function updateEntriesList() {
        const entriesList = document.getElementById('entriesList');
        const entries = JSON.parse(localStorage.getItem('journalEntries') || '[]');
        
        if (entries.length === 0) {
            entriesList.innerHTML = `
                <div class="text-center py-4">
                    <p class="text-muted">No entries yet. Your first reflection will appear here.</p>
                </div>
            `;
            return;
        }
        
        let html = '';
        const recentEntries = entries.slice(0, 3); // Show only 3 most recent
        
        recentEntries.forEach(entry => {
            const preview = entry.content.length > 100 
                ? entry.content.substring(0, 100) + '...' 
                : entry.content;
            
            html += `
                <div class="entry-item">
                    <div class="entry-date">${entry.date}</div>
                    <div class="entry-title">${entry.title}</div>
                    <div class="entry-preview">${preview}</div>
                </div>
            `;
        });
        
        entriesList.innerHTML = html;
    }
    
    // Initialize entries list on page load
    updateEntriesList();
});