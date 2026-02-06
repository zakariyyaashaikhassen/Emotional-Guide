// js/topics.js - Topic management for Emotional Guide

const topics = {
    stress: {
        title: "Stress Management Techniques",
        content: `
            <h4>Understanding Stress</h4>
            <p>Stress is your body's response to challenges or demands. While some stress is normal, chronic stress can impact your health.</p>
            
            <h5 class="mt-3">Immediate Relief Strategies:</h5>
            <ul class="feature-list">
                <li><span class="icon">🌬️</span> <strong>Deep Breathing:</strong> 4-7-8 technique (inhale 4s, hold 7s, exhale 8s)</li>
                <li><span class="icon">🚶‍♀️</span> <strong>Movement Break:</strong> 5-minute walk or stretch</li>
                <li><span class="icon">📝</span> <strong>Brain Dump:</strong> Write everything on your mind for 5 minutes</li>
            </ul>
            
            <h5 class="mt-3">Long-term Strategies:</h5>
            <ul class="feature-list">
                <li><span class="icon">📅</span> Time management and prioritization</li>
                <li><span class="icon">💬</span> Communication of boundaries</li>
                <li><span class="icon">🏃‍♂️</span> Regular physical activity</li>
                <li><span class="icon">🧘</span> Mindfulness practice (5-10 minutes daily)</li>
            </ul>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9);">
                <h5>Stress Reduction Activities:</h5>
                <div class="row mt-2">
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">📓</div>
                            <strong>Journaling</strong>
                            <p class="small mb-0">Daily stress log</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🎨</div>
                            <strong>Creative Outlet</strong>
                            <p class="small mb-0">Art, music, writing</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🌳</div>
                            <strong>Nature Time</strong>
                            <p class="small mb-0">15 minutes outdoors</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🤗</div>
                            <strong>Social Support</strong>
                            <p class="small mb-0">Connect with friends</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #fff3e0, #ffe0b2);">
                <h5>Workplace Stress Tips:</h5>
                <ul class="feature-list">
                    <li><span class="icon">⏰</span> Take regular 5-minute breaks every hour</li>
                    <li><span class="icon">📱</span> Set boundaries for after-work communication</li>
                    <li><span class="icon">🍎</span> Eat lunch away from your desk</li>
                    <li><span class="icon">💼</span> Organize your workspace for minimal clutter</li>
                </ul>
            </div>
        `,
        image: {
            src: "images/stress.png",
            alt: "Stress reduction techniques and relaxation strategies",
            caption: "Effective stress management combines immediate relief with long-term coping strategies"
        }
    },
    anxiety: {
        title: "Anxiety Relief Strategies",
        content: `
            <h4>Understanding Anxiety</h4>
            <p>Anxiety involves excessive worry about future events. These strategies can help ground you in the present.</p>
            
            <h5 class="mt-3">Grounding Techniques:</h5>
            <div class="p-3 bg-light rounded mb-3">
                <p><strong>5-4-3-2-1 Method:</strong></p>
                <ol>
                    <li><strong>5</strong> things you can see</li>
                    <li><strong>4</strong> things you can touch</li>
                    <li><strong>3</strong> things you can hear</li>
                    <li><strong>2</strong> things you can smell</li>
                    <li><strong>1</strong> thing you can taste</li>
                </ol>
            </div>
            
            <h5>Thought Challenge Exercise:</h5>
            <p>When anxious thought arises, ask:</p>
            <ul class="feature-list">
                <li><span class="icon">❓</span> Is this thought based on facts or feelings?</li>
                <li><span class="icon">🔄</span> What's a more balanced perspective?</li>
                <li><span class="icon">💡</span> What would I tell a friend with this thought?</li>
            </ul>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #e3f2fd, #bbdefb);">
                <h5>Anxiety Reduction Toolkit:</h5>
                <div class="row mt-2">
                    <div class="col-md-4 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🤲</div>
                            <strong>Progressive Relaxation</strong>
                            <p class="small mb-0">Tense and relax muscle groups</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🎶</div>
                            <strong>Calming Music</strong>
                            <p class="small mb-0">Create a relaxation playlist</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🕯️</div>
                            <strong>Aromatherapy</strong>
                            <p class="small mb-0">Lavender or chamomile scents</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #f3e5f5, #e1bee7);">
                <h5>Preventive Strategies:</h5>
                <ul class="feature-list">
                    <li><span class="icon">📊</span> Limit news consumption to specific times</li>
                    <li><span class="icon">📵</span> Digital detox periods each day</li>
                    <li><span class="icon">🏋️</span> Regular exercise to burn anxious energy</li>
                    <li><span class="icon">😴</span> Prioritize sleep for emotional regulation</li>
                </ul>
            </div>
        `,
        image: {
            src: "images/anxiety.png",
            alt: "Anxiety relief techniques and calming strategies",
            caption: "Managing anxiety involves grounding techniques and preventive self-care"
        }
    },
    depression: {
        title: "Depression Support Resources",
        content: `
            <h4>Navigating Low Mood Periods</h4>
            <p>Depression can make everything feel harder. Small, consistent actions can make a difference.</p>
            
            <h5 class="mt-3">Daily Micro-Habits:</h5>
            <div class="row">
                <div class="col-md-6">
                    <div class="p-3 bg-light rounded mb-3">
                        <strong>Morning Routine (5 minutes):</strong>
                        <p>1. Drink a glass of water<br>2. Open curtains/blinds<br>3. Take 3 deep breaths</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="p-3 bg-light rounded mb-3">
                        <strong>Evening Routine (5 minutes):</strong>
                        <p>1. Write 1 thing that didn't go wrong<br>2. Prepare for tomorrow<br>3. Gratitude moment</p>
                    </div>
                </div>
            </div>
            
            <h5>When to Seek Help:</h5>
            <p>Consider professional support if:</p>
            <ul class="feature-list">
                <li><span class="icon">⚠️</span> Symptoms persist for 2+ weeks</li>
                <li><span class="icon">⚠️</span> Daily functioning is significantly impaired</li>
                <li><span class="icon">⚠️</span> You have thoughts of self-harm</li>
            </ul>
            <p class="mt-3"><strong>Emergency Resources:</strong> National Suicide Prevention Lifeline: 988</p>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #e3f2fd, #bbdefb);">
                <h5>Small Wins Checklist:</h5>
                <div class="row mt-2">
                    <div class="col-md-4 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🌞</div>
                            <strong>Get Sunlight</strong>
                            <p class="small mb-0">5 minutes of morning sunlight</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">💧</div>
                            <strong>Stay Hydrated</strong>
                            <p class="small mb-0">Drink one glass of water</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🧹</div>
                            <strong>Tidy One Thing</strong>
                            <p class="small mb-0">Make your bed or clear a surface</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #f3e5f5, #e1bee7);">
                <h5>Self-Compassion Reminders:</h5>
                <ul class="feature-list">
                    <li><span class="icon">💭</span> It's okay to not be okay</li>
                    <li><span class="icon">📊</span> Progress is not linear - bad days are normal</li>
                    <li><span class="icon">🤝</span> Asking for help is a sign of strength, not weakness</li>
                    <li><span class="icon">🌟</span> Small steps still move you forward</li>
                </ul>
            </div>
        `,
        image: {
            src: "images/depression support.png",
            alt: "Support and coping strategies for depression and low mood",
            caption: "Recovery from depression often involves small, consistent steps and self-compassion"
        }
    },
    selfcare: {
        title: "Self-Care Practices",
        content: `
            <h4>Building Sustainable Self-Care</h4>
            <p>Self-care isn't selfish—it's essential for emotional resilience.</p>
            
            <h5 class="mt-3">The Four Dimensions of Self-Care:</h5>
            <div class="row mt-3">
                <div class="col-md-6 mb-3">
                    <div class="p-3 rounded" style="background: linear-gradient(135deg, #e3f2fd, #bbdefb);">
                        <strong>Physical</strong>
                        <p>• 7-9 hours sleep<br>• Nutritious meals<br>• Gentle movement</p>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="p-3 rounded" style="background: linear-gradient(135deg, #f3e5f5, #e1bee7);">
                        <strong>Emotional</strong>
                        <p>• Journaling<br>• Therapy/counseling<br>• Emotional check-ins</p>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="p-3 rounded" style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9);">
                        <strong>Mental</strong>
                        <p>• Learning new things<br>• Digital detox<br>• Creative hobbies</p>
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <div class="p-3 rounded" style="background: linear-gradient(135deg, #fff3e0, #ffe0b2);">
                        <strong>Social</strong>
                        <p>• Quality connections<br>• Setting boundaries<br>• Community involvement</p>
                    </div>
                </div>
            </div>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #ffebee, #ffcdd2);">
                <h5>Weekly Self-Care Planner:</h5>
                <div class="row mt-2">
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>Monday</strong>
                            <p class="small mb-0">15 min nature walk</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>Tuesday</strong>
                            <p class="small mb-0">Creative activity</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>Wednesday</strong>
                            <p class="small mb-0">Digital detox hour</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>Thursday</strong>
                            <p class="small mb-0">Social connection</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>Friday</strong>
                            <p class="small mb-0">Spa night at home</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>Saturday</strong>
                            <p class="small mb-0">Leisurely breakfast</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>Sunday</strong>
                            <p class="small mb-0">Planning & reflection</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #f3e5f5, #e1bee7);">
                <h5>Self-Care Myths vs. Reality:</h5>
                <div class="row">
                    <div class="col-md-6">
                        <div class="p-2 mb-2">
                            <strong>❌ Myth:</strong> Self-care is selfish
                            <p class="small mb-0"><strong>✅ Reality:</strong> Self-care enables you to care for others better</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-2 mb-2">
                            <strong>❌ Myth:</strong> Self-care requires money
                            <p class="small mb-0"><strong>✅ Reality:</strong> Most effective self-care is free</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-2 mb-2">
                            <strong>❌ Myth:</strong> Self-care is time-consuming
                            <p class="small mb-0"><strong>✅ Reality:</strong> 5-minute practices can be effective</p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="p-2 mb-2">
                            <strong>❌ Myth:</strong> Self-care is indulgent
                            <p class="small mb-0"><strong>✅ Reality:</strong> Self-care is essential for health</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        image: {
            src: "images/self care.png",
            alt: "Holistic self-care practices for mental and emotional wellbeing",
            caption: "True self-care addresses physical, emotional, mental, and social wellbeing"
        }
    },
    anger: {
        title: "Anger Management Techniques",
        content: `
            <h4>Understanding and Managing Anger</h4>
            <p>Anger is a normal emotion. The challenge is expressing it constructively.</p>
            
            <h5 class="mt-3">The Anger Scale (1-10):</h5>
            <p>Rate your anger level. Different strategies work at different levels:</p>
            <ul class="feature-list">
                <li><span class="icon">1-3</span> <strong>Irritation:</strong> Deep breathing, reframing thoughts</li>
                <li><span class="icon">4-6</span> <strong>Frustration:</strong> Time-out, physical activity, journaling</li>
                <li><span class="icon">7-10</span> <strong>Rage:</strong> Remove self from situation, seek support</li>
            </ul>
            
            <h5 class="mt-3">The 3 R's of Anger Management:</h5>
            <div class="p-3 bg-light rounded">
                <p><strong>1. RECOGNIZE</strong> early warning signs (clenched jaw, racing heart)</p>
                <p><strong>2. REMOVE</strong> yourself from triggering situations when possible</p>
                <p><strong>3. RESPOND</strong> instead of react ("I feel frustrated when..." vs. yelling)</p>
            </div>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #fff3e0, #ffe0b2);">
                <h5>Quick Calming Techniques:</h5>
                <div class="row mt-2">
                    <div class="col-md-4 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🌬️</div>
                            <strong>4-7-8 Breathing</strong>
                            <p class="small mb-0">Breathe in 4s, hold 7s, out 8s</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">🚶‍♂️</div>
                            <strong>Walk Away</strong>
                            <p class="small mb-0">Take a 5-minute walk to cool down</p>
                        </div>
                    </div>
                    <div class="col-md-4 mb-2">
                        <div class="text-center p-2">
                            <div style="font-size: 2rem;">💧</div>
                            <strong>Cold Water</strong>
                            <p class="small mb-0">Splash face with cold water</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #ffebee, #ffcdd2);">
                <h5>Constructive Expression:</h5>
                <ul class="feature-list">
                    <li><span class="icon">🗣️</span> Use "I feel" statements instead of accusations</li>
                    <li><span class="icon">⏳</span> Wait 24 hours before responding to major issues</li>
                    <li><span class="icon">📝</span> Write angry letters you don't send</li>
                    <li><span class="icon">🎯</span> Focus on the problem, not the person</li>
                </ul>
            </div>
        `,
        image: {
            src: "images/anger management.png",
            alt: "Calming techniques for anger management and emotional control",
            caption: "Healthy anger management involves recognizing triggers and using calming strategies"
        }
    },
    sleep: {
        title: "Sleep Wellness Strategies",
        content: `
            <h4>Improving Sleep for Emotional Health</h4>
            <p>Quality sleep is foundational for emotional regulation and mental health.</p>
            
            <h5 class="mt-3">Sleep Hygiene Checklist:</h5>
            <ul class="feature-list">
                <li><span class="icon">⏰</span> Consistent sleep/wake times (even weekends)</li>
                <li><span class="icon">🌡️</span> Cool bedroom temperature (65-68°F / 18-20°C)</li>
                <li><span class="icon">📵</span> No screens 1 hour before bed</li>
                <li><span class="icon">☕</span> Limit caffeine after 2 PM</li>
                <li><span class="icon">🧘</span> Relaxation routine before bed</li>
            </ul>
            
            <h5 class="mt-3">When You Can't Sleep:</h5>
            <p>Instead of lying awake frustrated:</p>
            <div class="p-3 bg-light rounded">
                <p><strong>The 20-Minute Rule:</strong> If not asleep in 20 minutes, get up and do something calming (read a book, gentle stretching) until sleepy</p>
                <p><strong>Worry Time:</strong> Keep a notebook by bed—write down worries to "park" them until morning</p>
            </div>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #e3f2fd, #bbdefb);">
                <h5>Bedtime Routine Example:</h5>
                <div class="row mt-2">
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>9:00 PM</strong>
                            <p class="small mb-0">Turn off screens</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>9:15 PM</strong>
                            <p class="small mb-0">Warm tea or milk</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>9:30 PM</strong>
                            <p class="small mb-0">Gentle stretching</p>
                        </div>
                    </div>
                    <div class="col-md-3 mb-2">
                        <div class="text-center p-2">
                            <strong>9:45 PM</strong>
                            <p class="small mb-0">Reading in bed</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="mt-4 p-3 rounded" style="background: linear-gradient(135deg, #e8f5e9, #c8e6c9);">
                <h5>Sleep Environment Optimization:</h5>
                <ul class="feature-list">
                    <li><span class="icon">🌙</span> Use blackout curtains or sleep mask</li>
                    <li><span class="icon">🔇</span> White noise machine or fan for sound masking</li>
                    <li><span class="icon">🛏️</span> Invest in comfortable, supportive bedding</li>
                    <li><span class="icon">🌿</span> Keep bedroom only for sleep and intimacy</li>
                </ul>
            </div>
        `,
        image: {
            src: "images/sleep wellness.jpg",
            alt: "Peaceful sleep environment and bedtime routine",
            caption: "Creating a calming bedtime routine can significantly improve sleep quality"
        }
    }
};

// DOM Elements
const topicContent = document.getElementById('topic-content');
const topicHeading = document.getElementById('topic-heading');
const topicDetails = document.getElementById('topic-details');
const topicImageContainer = document.getElementById('topic-image-container');
const topicImage = topicImageContainer.querySelector('img');
const imageCaption = document.getElementById('image-caption');
const backToTopicsBtn = document.getElementById('back-to-topics');

// Show selected topic
function showTopic(topicId, event) {
    if (event) {
        event.preventDefault();
    }
    
    const topic = topics[topicId];
    
    if (!topic) {
        console.error(`Topic "${topicId}" not found`);
        return;
    }
    
    // Update heading and content
    topicHeading.textContent = topic.title;
    topicDetails.innerHTML = topic.content;
    
    // Handle image display
    if (topic.image) {
        // Show image container
        topicImageContainer.style.display = 'block';
        
        // Update image source and attributes
        topicImage.src = topic.image.src;
        topicImage.alt = topic.image.alt;
        imageCaption.textContent = topic.image.caption;
        
        // Set default image if src is missing
        topicImage.onerror = function() {
            this.src = 'images/default-topic.jpg';
            this.alt = 'Topic illustration';
            imageCaption.textContent = 'Topic illustration';
        };
    } else {
        // Hide image container if no image
        topicImageContainer.style.display = 'none';
    }
    
    // Show topic content section
    topicContent.style.display = 'block';
    
    // Smooth scroll to topic content
    window.scrollTo({ 
        top: topicContent.offsetTop - 20, 
        behavior: 'smooth' 
    });
    
    // Update URL hash for bookmarking
    window.location.hash = topicId + '-management';
}

// Hide topic and show topic grid
function hideTopic() {
    topicContent.style.display = 'none';
    topicImageContainer.style.display = 'none'; // Also hide image container
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Clear URL hash
    window.location.hash = '';
}

// Initialize topic cards with event listeners
function initializeTopicCards() {
    const topicCards = document.querySelectorAll('.topic-card');
    
    topicCards.forEach(card => {
        card.addEventListener('click', function(event) {
            const topicId = this.getAttribute('data-topic');
            showTopic(topicId, event);
        });
    });
}

// Check URL hash on page load to show specific topic
function checkInitialTopic() {
    const hash = window.location.hash.replace('#', '').replace('-management', '');
    
    if (hash && topics[hash]) {
        showTopic(hash);
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize topic cards
    initializeTopicCards();
    
    // Set up back button
    if (backToTopicsBtn) {
        backToTopicsBtn.addEventListener('click', hideTopic);
    }
    
    // Check if a specific topic should be shown from URL
    checkInitialTopic();
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && topicContent.style.display === 'block') {
            hideTopic();
        }
    });
});

// Export functions for potential module use (optional)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        topics,
        showTopic,
        hideTopic,
        initializeTopicCards
    };
}