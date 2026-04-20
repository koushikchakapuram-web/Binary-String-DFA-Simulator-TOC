document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('binaryInput');
    const simulateBtn = document.getElementById('simulateBtn');
    const statusMessage = document.getElementById('statusMessage');
    
    // State DOM elements
    const states = {
        'q0': document.getElementById('q0'),
        'q1': document.getElementById('q1'),
        'q2': document.getElementById('q2')
    };

    // DFA Transition Table
    const transition = {
        'q0': { '0': 'q1', '1': 'q0' },
        'q1': { '0': 'q1', '1': 'q2' },
        'q2': { '0': 'q1', '1': 'q0' }
    };

    const acceptingState = 'q2';

    // Utility for animation delays
    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

    function resetStates() {
        Object.values(states).forEach(el => {
            el.classList.remove('active', 'success', 'fail');
        });
    }

    async function runSimulation() {
        const inputStr = inputField.value.trim();
        
        // Input validation
        if (!/^[01]+$/.test(inputStr)) {
            statusMessage.textContent = "Error: Please enter only 0s and 1s.";
            statusMessage.style.color = "#dc3545";
            return;
        }

        simulateBtn.disabled = true;
        resetStates();
        
        let currentState = 'q0';
        statusMessage.style.color = "#333";
        
        // Highlight start state
        states[currentState].classList.add('active');
        statusMessage.textContent = `Starting at ${currentState}...`;
        await sleep(1000);

        // Process each character
        for (let i = 0; i < inputStr.length; i++) {
            const char = inputStr[i];
            
            // Remove active class from old state
            states[currentState].classList.remove('active');
            
            // Calculate new state
            currentState = transition[currentState][char];
            
            // Update UI for new state
            states[currentState].classList.add('active');
            statusMessage.textContent = `Read '${char}' ➔ Moved to ${currentState}`;
            
            await sleep(800); // Visual pause for the simulation
        }

        // Final Evaluation
        states[currentState].classList.remove('active');
        if (currentState === acceptingState) {
            states[currentState].classList.add('success');
            statusMessage.textContent = `String Accepted! Ended in valid state ${currentState}.`;
            statusMessage.style.color = "#28a745";
        } else {
            states[currentState].classList.add('fail');
            statusMessage.textContent = `String Rejected! Ended in invalid state ${currentState}.`;
            statusMessage.style.color = "#dc3545";
        }
        
        simulateBtn.disabled = false;
    }

    simulateBtn.addEventListener('click', runSimulation);
    
    // Allow pressing "Enter" to run
    inputField.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') runSimulation();
    });
});
